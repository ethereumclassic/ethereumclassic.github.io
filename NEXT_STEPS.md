# Next Steps - How to Complete Dead Links Verification

This guide explains how to complete the dead links verification and apply fixes, given the network limitations of the CI environment.

## Quick Start (For Maintainers)

### Prerequisites
- Local development environment with internet access
- Node.js installed
- Repository cloned

### Run Link Checker

```bash
# 1. Navigate to repository
cd ethereumclassic.github.io

# 2. Ensure dependencies are installed
npm install

# 3. Run the link checker (this may take 10-15 minutes)
node scripts/check-dead-links.js
```

### Review Results

Two reports will be generated:

1. **dead-links-report.json** - Machine-readable
2. **DEAD_LINKS_REPORT.md** - Human-readable

Open `DEAD_LINKS_REPORT.md` and review the dead links found.

### Apply Fixes

For each dead link, follow these rules:

#### Rule 1: Reference Links (in text/descriptions)
Replace with main site:

```yaml
# Before
description: Check out [this service](https://dead-service.com) for more info

# After  
description: Check out [this service](https://ethereumclassic.org) for more info
```

#### Rule 2: Service Cards (complete entries)
Remove the entire service:

```yaml
# Before
Dead Service:
  __link: https://dead-service.com
  __name: Dead Service
  description: Some description

# After
# (completely removed)
```

#### Rule 3: Redirects
If a service moved, update the URL:

```yaml
# Before
Old Service:
  __link: https://old-domain.com
  __name: Old Service

# After
Old Service:
  __link: https://new-domain.com
  __name: Old Service (formerly Old Domain)
```

### Commit and Push

```bash
git add content/
git commit -m "Remove dead links found by automated checker"
git push
```

## Detailed Instructions

### Phase 1: High Priority (Exchanges and Wallets)

**Focus:** Files where dead links impact users directly

```bash
# Run checker
node scripts/check-dead-links.js

# Review high priority files
cat DEAD_LINKS_REPORT.md | grep -A 5 "exchanges/index.yaml\|wallets/index.yaml"
```

**Files to prioritize:**
1. `content/services/exchanges/index.yaml` (153 links)
2. `content/services/wallets/index.yaml` (56 links)

**Why:** Users store funds and make trades using these services.

### Phase 2: Medium Priority (Infrastructure)

**Focus:** Development and mining infrastructure

```bash
# Check specific files
cat DEAD_LINKS_REPORT.md | grep -A 5 "mining/pools\|development/tooling"
```

**Files to check:**
1. `content/mining/pools/index.yaml` (59 links)
2. `content/development/tooling/index.yaml` (73 links)
3. `content/community/channels/index.yaml` (42 links)

### Phase 3: Low Priority (Reference Material)

**Focus:** Historical references and less critical links

```bash
# Check remaining files
cat DEAD_LINKS_REPORT.md | grep -A 5 "history/timeline"
```

**Note:** Historical links can use archive.org versions if original is dead.

## Manual Verification Tips

### For Services That Block Bots

Many legitimate services fail automated checks because they block bots. For these, manually verify:

1. **Twitter/X** - Visit the profile, check last tweet date
2. **Discord** - Click invite link, see if it works
3. **Telegram** - Check if group exists
4. **Exchanges** - Visit site, verify ETC is listed
5. **Wallets** - Check app store or download page

### Indicators of Dead Services

✗ **Definitely Dead:**
- Domain doesn't resolve (404, DNS error)
- "Domain for sale" page
- "Service discontinued" message
- Last activity > 2 years ago
- Company site exists but service removed

⚠️ **Probably Dead (verify):**
- Last social media post > 1 year ago
- Website loads but looks abandoned
- App removed from app stores
- Unable to create account/download
- Service no longer supports ETC

✓ **Probably Alive (but verify):**
- Site loads normally
- Recent social media activity
- ETC still listed/supported
- Active community discussion
- Working product/service

## Using the Reports

### DEAD_LINKS_ANALYSIS.md
- **Use for:** Understanding scope and priorities
- **Contains:** Statistics, file rankings, action plan

### KNOWN_ISSUES_TO_VERIFY.md
- **Use for:** List of specific services to check
- **Contains:** ~30-40 flagged services with reasons

### DEAD_LINKS_REPORT.md (generated after running checker)
- **Use for:** Actual dead links found
- **Contains:** All failed links by file

### LINK_CHECKING_STATUS.md
- **Use for:** Understanding limitations and context
- **Contains:** Technical details, statistics

## Common Issues and Solutions

### Issue 1: Too Many False Positives

**Problem:** Link checker reports many working sites as dead

**Solution:**
- Social media sites block bots - manually verify
- Check the "skippedDomains" section in report
- These sites probably work fine

### Issue 2: Unsure If Service Is Dead

**Problem:** Service website loads but looks outdated

**Solutions:**
1. Check last blog post/news date
2. Check social media activity
3. Try to use the service
4. Post in Discord #website channel
5. Create GitHub issue for discussion

### Issue 3: Service Merged or Acquired

**Problem:** Original service moved to new company

**Solutions:**
- Update URL to new location
- Update name to reflect new brand
- Add note in description: "(formerly X)"
- Keep entry if service still supports ETC

## Automation Ideas

### Set Up Periodic Checking

Add to GitHub Actions (if network access is available):

```yaml
# .github/workflows/link-check.yml
name: Check Links
on:
  schedule:
    - cron: '0 0 1 * *' # Monthly
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: node scripts/check-dead-links.js
      - uses: actions/upload-artifact@v2
        with:
          name: link-report
          path: |
            dead-links-report.json
            DEAD_LINKS_REPORT.md
```

### Pre-commit Hook

Prevent adding dead links:

```bash
# .git/hooks/pre-commit
#!/bin/bash
# Only check modified YAML files
git diff --cached --name-only | grep '\.yaml$' | while read file; do
  # Extract and check new links
  # (implementation left as exercise)
done
```

## Getting Help

### Discord
Post in **#website** channel:
- Share link checker results
- Ask for community verification
- Get help with specific services

### GitHub Issues
Create issues for:
- Uncertain service status
- Multiple reports of dead link
- Need community input

### Contributions App
Use https://etc.contributions.app/ to:
- Submit new services
- Update existing services
- Report dead services

## Expected Results

After running link checker and applying fixes:

**Before:**
- 605 total links
- Unknown status
- 2-3 years since last update

**After:**
- All HIGH priority links verified
- Dead links removed or replaced
- Service cards updated
- Statistics documented

**Report Example:**
```
=== SUMMARY ===
Total links checked: 605
Working links: 550
Dead links: 55
Files with dead links: 12
```

## Timeline Estimate

| Phase | Time | Tasks |
|-------|------|-------|
| Setup | 15 min | Clone repo, install deps |
| Run Checker | 15 min | Execute link checker |
| Review Results | 30 min | Read reports, understand issues |
| High Priority Fixes | 2 hours | Exchanges & wallets |
| Medium Priority Fixes | 1 hour | Channels & tools |
| Low Priority Fixes | 1 hour | Other files |
| Testing | 30 min | Build site, visual check |
| Documentation | 30 min | Update reports |
| **Total** | **5-6 hours** | Full verification |

**Note:** Can be split across multiple sessions or contributors.

## Success Criteria

### Minimum (HIGH priority)
- ✅ All exchange links verified
- ✅ All wallet links verified  
- ✅ Dead services removed
- ✅ Build still works

### Complete (All priorities)
- ✅ All 605 links verified
- ✅ Statistics documented
- ✅ Reports updated
- ✅ GitHub issue closed

### Ideal (Beyond scope)
- ✅ Automated checking set up
- ✅ Last verified dates added
- ✅ Community verification process
- ✅ Regular maintenance schedule

## Questions?

1. Check existing documentation files
2. Ask in Discord #website channel
3. Create GitHub issue
4. Tag maintainers: @realcodywburns

---

**Status:** Ready to execute
**Requirements:** Local environment with internet access
**Estimated Time:** 2-6 hours depending on scope
**Priority:** HIGH (service files 2-3 years old)
