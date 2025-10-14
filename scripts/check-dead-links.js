#!/usr/bin/env node

/**
 * Link Checker for Ethereum Classic Website
 * 
 * This script checks all external links in YAML and Markdown files
 * for dead/broken links and generates a comprehensive report.
 * 
 * Usage: node scripts/check-dead-links.js
 * 
 * Note: This script requires internet access. It cannot run in sandboxed
 * environments with restricted network access.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Check if js-yaml is available
let yaml;
try {
  yaml = require('js-yaml');
} catch (e) {
  console.error('ERROR: js-yaml module not found. Please run: npm install js-yaml');
  process.exit(1);
}

const REPO_ROOT = path.resolve(__dirname, '..');
const TIMEOUT = 10000;
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
const BATCH_SIZE = 5;
const BATCH_DELAY = 500;
const MAX_RETRIES = 2;

// Results tracking
const results = {
  deadLinks: [],
  workingLinks: [],
  errors: [],
  totalChecked: 0,
  filesWithDeadLinks: new Set(),
  skippedDomains: new Set(),
};

// Cache to avoid checking same URL multiple times
const urlCache = new Map();

// Domains that commonly block automated requests
const PROBLEMATIC_DOMAINS = [
  'twitter.com',
  'facebook.com',
  'reddit.com',
  'discord.gg',
  't.me',
];

async function checkUrl(url) {
  if (urlCache.has(url)) {
    return urlCache.get(url);
  }

  // Check if domain is problematic
  try {
    const urlObj = new URL(url);
    if (PROBLEMATIC_DOMAINS.some(d => urlObj.hostname.includes(d))) {
      results.skippedDomains.add(urlObj.hostname);
      // Assume these are OK since they block bots
      urlCache.set(url, true);
      return true;
    }
  } catch (e) {
    // Invalid URL
    urlCache.set(url, false);
    return false;
  }

  let retries = 0;
  while (retries <= MAX_RETRIES) {
    const result = await checkUrlOnce(url);
    if (result || retries === MAX_RETRIES) {
      urlCache.set(url, result);
      return result;
    }
    retries++;
    await sleep(1000);
  }
}

async function checkUrlOnce(url) {
  return new Promise((resolve) => {
    try {
      const urlObj = new URL(url);
      const lib = urlObj.protocol === 'https:' ? https : http;

      const options = {
        method: 'GET',
        timeout: TIMEOUT,
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
      };

      const req = lib.request(url, options, (res) => {
        const status = res.statusCode;
        const isOk = status >= 200 && status < 400;
        // Drain response
        res.resume();
        resolve(isOk);
      });

      req.on('error', () => {
        resolve(false);
      });

      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });

      req.end();
    } catch (err) {
      resolve(false);
    }
  });
}

function extractLinksFromYaml(content, filePath) {
  const links = [];
  try {
    const data = yaml.load(content);

    function traverse(obj, path = []) {
      if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        for (const [key, value] of Object.entries(obj)) {
          if (key === '__link' && typeof value === 'string' && value.startsWith('http')) {
            links.push({
              url: value,
              path: [...path, key],
              name: obj.__name || obj.name || 'Unknown',
              context: obj,
            });
          } else if (typeof value === 'object') {
            traverse(value, [...path, key]);
          }
        }
      } else if (Array.isArray(obj)) {
        obj.forEach((item, idx) => traverse(item, [...path, idx]));
      }
    }

    traverse(data);
  } catch (err) {
    results.errors.push({ file: filePath, error: err.message });
  }

  return links;
}

function extractLinksFromMarkdown(content) {
  const links = [];
  // Match markdown links [text](url) and bare URLs
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const urlRegex = /https?:\/\/[^\s\)]+/g;

  let match;
  const seen = new Set();
  
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const url = match[2];
    if (url.startsWith('http') && !seen.has(url)) {
      links.push(url);
      seen.add(url);
    }
  }

  // Also catch bare URLs
  while ((match = urlRegex.exec(content)) !== null) {
    const url = match[0];
    if (!seen.has(url)) {
      links.push(url);
      seen.add(url);
    }
  }

  return links;
}

async function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const ext = path.extname(filePath);
  let links = [];

  if (ext === '.yaml' || ext === '.yml') {
    const extracted = extractLinksFromYaml(content, filePath);
    links = extracted.map(l => ({ file: filePath, url: l.url, name: l.name }));
  } else if (ext === '.md') {
    const urls = extractLinksFromMarkdown(content);
    links = urls.map(url => ({ file: filePath, url, name: null }));
  }

  return links;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkBatch(batch) {
  const promises = batch.map(async ({ file, url, name }) => {
    results.totalChecked++;
    const isWorking = await checkUrl(url);

    const linkInfo = { file, url, name };
    if (isWorking) {
      results.workingLinks.push(linkInfo);
    } else {
      results.deadLinks.push(linkInfo);
      results.filesWithDeadLinks.add(file);
      console.log(`❌ Dead link found: ${url}`);
      if (name) console.log(`   Name: ${name}`);
      console.log(`   File: ${path.relative(REPO_ROOT, file)}`);
    }
  });

  await Promise.all(promises);
}

async function findFiles(dir, extensions) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      files.push(...await findFiles(fullPath, extensions));
    } else if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  console.log('🔍 Ethereum Classic Link Checker\n');
  console.log('Scanning for links in content directory...\n');

  const contentDir = path.join(REPO_ROOT, 'content');
  
  if (!fs.existsSync(contentDir)) {
    console.error(`ERROR: Content directory not found: ${contentDir}`);
    process.exit(1);
  }

  const files = await findFiles(contentDir, ['.yaml', '.yml', '.md']);
  console.log(`Found ${files.length} files to check\n`);

  // Extract all links first
  console.log('Extracting links from files...');
  const allLinks = [];
  for (const file of files) {
    const links = await checkFile(file);
    allLinks.push(...links);
  }

  console.log(`Found ${allLinks.length} total links to check\n`);

  // Process in batches
  console.log('Checking links (this may take a while)...\n');
  for (let i = 0; i < allLinks.length; i += BATCH_SIZE) {
    const batch = allLinks.slice(i, i + BATCH_SIZE);
    await checkBatch(batch);
    if (i + BATCH_SIZE < allLinks.length) {
      await sleep(BATCH_DELAY);
    }
    if ((i / BATCH_SIZE) % 10 === 0 && i > 0) {
      console.log(`Progress: ${i}/${allLinks.length} links checked`);
    }
  }

  // Group dead links by file
  const deadByFile = {};
  for (const link of results.deadLinks) {
    const relPath = path.relative(REPO_ROOT, link.file);
    if (!deadByFile[relPath]) {
      deadByFile[relPath] = [];
    }
    deadByFile[relPath].push(link);
  }

  // Generate comprehensive report
  const report = {
    summary: {
      timestamp: new Date().toISOString(),
      totalLinksChecked: results.totalChecked,
      deadLinks: results.deadLinks.length,
      workingLinks: results.workingLinks.length,
      filesWithDeadLinks: results.filesWithDeadLinks.size,
      errors: results.errors.length,
      skippedDomains: Array.from(results.skippedDomains),
    },
    deadLinksByFile: deadByFile,
    allDeadLinks: results.deadLinks.map(l => ({
      file: path.relative(REPO_ROOT, l.file),
      url: l.url,
      name: l.name,
    })),
    errors: results.errors,
  };

  const reportPath = path.join(REPO_ROOT, 'dead-links-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  const readmePath = path.join(REPO_ROOT, 'DEAD_LINKS_REPORT.md');
  const readme = generateMarkdownReport(report, deadByFile);
  fs.writeFileSync(readmePath, readme);

  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total links checked: ${report.summary.totalLinksChecked}`);
  console.log(`Working links: ${report.summary.workingLinks}`);
  console.log(`Dead links: ${report.summary.deadLinks}`);
  console.log(`Files with dead links: ${report.summary.filesWithDeadLinks}`);
  console.log(`Errors encountered: ${report.summary.errors}`);
  if (report.summary.skippedDomains.length > 0) {
    console.log(`\nSkipped domains (known to block bots): ${report.summary.skippedDomains.join(', ')}`);
  }
  console.log(`\nDetailed JSON report: ${reportPath}`);
  console.log(`Human-readable report: ${readmePath}`);
  console.log('='.repeat(60));

  process.exit(report.summary.deadLinks > 0 ? 1 : 0);
}

function generateMarkdownReport(report, deadByFile) {
  let md = '# Dead Links Report\n\n';
  md += `**Generated:** ${report.summary.timestamp}\n\n`;
  md += '## Summary\n\n';
  md += `- **Total Links Checked:** ${report.summary.totalLinksChecked}\n`;
  md += `- **Working Links:** ${report.summary.workingLinks}\n`;
  md += `- **Dead Links:** ${report.summary.deadLinks}\n`;
  md += `- **Files with Dead Links:** ${report.summary.filesWithDeadLinks}\n`;
  md += `- **Errors:** ${report.summary.errors}\n\n`;

  if (report.summary.skippedDomains.length > 0) {
    md += '### Skipped Domains\n\n';
    md += 'These domains commonly block automated requests and were assumed to be working:\n\n';
    report.summary.skippedDomains.forEach(domain => {
      md += `- ${domain}\n`;
    });
    md += '\n';
  }

  if (Object.keys(deadByFile).length > 0) {
    md += '## Dead Links by File\n\n';
    for (const [file, links] of Object.entries(deadByFile)) {
      md += `### ${file}\n\n`;
      md += `${links.length} dead link(s):\n\n`;
      links.forEach(link => {
        md += `- **URL:** ${link.url}\n`;
        if (link.name) {
          md += `  **Name:** ${link.name}\n`;
        }
        md += '\n';
      });
    }
  }

  md += '## Recommended Actions\n\n';
  md += '1. **For reference links:** Replace with `https://ethereumclassic.org`\n';
  md += '2. **For service cards:** Remove the entire service entry\n';
  md += '3. **Verify manually:** Some links may be false positives due to bot blocking\n\n';

  return md;
}

if (require.main === module) {
  main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = { checkUrl, extractLinksFromYaml, extractLinksFromMarkdown };
