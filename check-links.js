#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const yaml = require('js-yaml');

const REPO_ROOT = '/home/runner/work/ethereumclassic.github.io/ethereumclassic.github.io';
const TIMEOUT = 5000;
const USER_AGENT = 'Mozilla/5.0 (compatible; LinkChecker/1.0)';
const BATCH_SIZE = 10;
const BATCH_DELAY = 100;

// Results tracking
const results = {
  deadLinks: [],
  workingLinks: [],
  errors: [],
  totalChecked: 0,
  filesWithDeadLinks: new Set(),
};

// Cache to avoid checking same URL multiple times
const urlCache = new Map();

async function checkUrl(url) {
  if (urlCache.has(url)) {
    return urlCache.get(url);
  }

  return new Promise((resolve) => {
    try {
      const urlObj = new URL(url);
      const lib = urlObj.protocol === 'https:' ? https : http;

      const options = {
        method: 'HEAD',
        timeout: TIMEOUT,
        headers: {
          'User-Agent': USER_AGENT,
        },
      };

      const req = lib.request(url, options, (res) => {
        const status = res.statusCode;
        const isOk = status >= 200 && status < 400;
        urlCache.set(url, isOk);
        resolve(isOk);
      });

      req.on('error', () => {
        urlCache.set(url, false);
        resolve(false);
      });

      req.on('timeout', () => {
        req.destroy();
        urlCache.set(url, false);
        resolve(false);
      });

      req.end();
    } catch (err) {
      urlCache.set(url, false);
      resolve(false);
    }
  });
}

function extractLinksFromYaml(content, filePath) {
  const links = [];
  try {
    const data = yaml.load(content);

    function traverse(obj, path = []) {
      if (typeof obj === 'object' && obj !== null) {
        for (const [key, value] of Object.entries(obj)) {
          if (key === '__link' && typeof value === 'string' && value.startsWith('http')) {
            links.push({ url: value, path: [...path, key], context: obj });
          } else {
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
  // Match markdown links [text](url) and bare URLs starting with http
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const urlRegex = /https?:\/\/[^\s\)]+/g;

  let match;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const url = match[2];
    if (url.startsWith('http')) {
      links.push(url);
    }
  }

  // Also catch bare URLs
  while ((match = urlRegex.exec(content)) !== null) {
    const url = match[0];
    if (!links.includes(url)) {
      links.push(url);
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
    links = extracted.map(l => l.url);
  } else if (ext === '.md') {
    links = extractLinksFromMarkdown(content);
  }

  return links.map(url => ({ file: filePath, url }));
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkBatch(batch) {
  const promises = batch.map(async ({ file, url }) => {
    results.totalChecked++;
    const isWorking = await checkUrl(url);

    if (isWorking) {
      results.workingLinks.push({ file, url });
    } else {
      results.deadLinks.push({ file, url });
      results.filesWithDeadLinks.add(file);
      console.log(`❌ Dead link found: ${url} in ${file}`);
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
  console.log('Starting link check...\n');

  const contentDir = path.join(REPO_ROOT, 'content');
  const files = await findFiles(contentDir, ['.yaml', '.yml']);

  console.log(`Found ${files.length} files to check\n`);

  // Extract all links first
  const allLinks = [];
  for (const file of files) {
    const links = await checkFile(file);
    allLinks.push(...links);
  }

  console.log(`Found ${allLinks.length} total links to check\n`);

  // Process in batches
  for (let i = 0; i < allLinks.length; i += BATCH_SIZE) {
    const batch = allLinks.slice(i, i + BATCH_SIZE);
    await checkBatch(batch);
    if (i + BATCH_SIZE < allLinks.length) {
      await sleep(BATCH_DELAY);
    }
    if ((i / BATCH_SIZE) % 10 === 0) {
      console.log(`Progress: ${i}/${allLinks.length} links checked`);
    }
  }

  // Generate report
  const report = {
    summary: {
      totalLinksChecked: results.totalChecked,
      deadLinks: results.deadLinks.length,
      workingLinks: results.workingLinks.length,
      filesWithDeadLinks: results.filesWithDeadLinks.size,
      errors: results.errors.length,
    },
    deadLinks: results.deadLinks,
    errors: results.errors,
  };

  const reportPath = path.join(REPO_ROOT, 'dead-links-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log('\n=== SUMMARY ===');
  console.log(`Total links checked: ${report.summary.totalLinksChecked}`);
  console.log(`Working links: ${report.summary.workingLinks}`);
  console.log(`Dead links: ${report.summary.deadLinks}`);
  console.log(`Files with dead links: ${report.summary.filesWithDeadLinks}`);
  console.log(`Errors: ${report.summary.errors}`);
  console.log(`\nFull report saved to: ${reportPath}`);
}

main().catch(console.error);
