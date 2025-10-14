# Known Issues Requiring Manual Verification

This document lists services and links that are LIKELY to have issues based on common patterns, industry knowledge, and time since last update. These require manual verification.

## High Confidence - Likely Dead

### 1. Heroku Free Apps
- ✅ **FIXED:** `https://ethereumclassic.herokuapp.com/` (Slack invite)
  - Status: Confirmed dead, Heroku discontinued free tier
  - Action taken: Replaced with ethereumclassic.org

### 2. Deprecated Communication Platforms
- ❓ `https://gitter.im/core-geth/community`
  - Reason: Gitter merged with Matrix, may redirect or be dead
  - File: content/community/channels/index.yaml
  - Recommendation: Verify or replace with Matrix link

## Medium Confidence - Verify These

### Services with Common Shutdown Patterns

#### Small/Startup Wallets (High Failure Rate)
These wallet services often shut down due to low adoption or funding:

1. **Midas Protocol** - `https://midasprotocol.io/`
   - File: content/services/wallets/index.yaml
   - Pattern: DeFi protocols from 2020-2021 era often defunct

2. **Now Wallet** - `https://walletnow.app/`
   - File: content/services/wallets/index.yaml
   - Pattern: Generic name, low brand recognition

3. **Ownbit** - `https://ownbit.io/`
   - File: content/services/wallets/index.yaml
   - Pattern: .io domain, unclear current status

4. **Button Wallet** - `https://buttonwallet.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: Single-purpose wallet, may have pivoted

5. **Hebe Core** - `https://hebecore.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: ETC-specific wallet, unclear maintenance status

#### Small/Defunct Exchanges
These exchanges may have low liquidity or shut down:

1. **eToroX** - `https://www.etorox.com/`
   - Files: content/services/exchanges/index.yaml, content/services/wallets/index.yaml
   - Pattern: eToro launched separate crypto exchange, may have consolidated

2. **Tidex** - `https://tidex.com/exchange/ETC/USDT`
   - File: content/services/exchanges/index.yaml
   - Pattern: Small exchange, unclear current status

3. **FatBTC** - `https://www.fatbtc.com/`
   - File: content/services/exchanges/index.yaml
   - Pattern: Unusual name, may have rebranded or closed

4. **CAT.EX** - `https://www.catex.io/trading/ETC/USDT`
   - File: content/services/exchanges/index.yaml
   - Pattern: Small exchange, unclear status

#### Hardware/Recovery Products
Physical product companies that may have ceased:

1. **BillFodl** - `https://billfodl.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: Hardware seed storage, company status unclear

2. **Blockplate** - `https://www.blockplate.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: Similar hardware product

3. **ColdTi** - `https://coldti.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: Titanium seed storage

4. **Crypto Key Stack** - `https://cryptokeystack.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: Hardware seed storage product

5. **Hodlinox** - `https://hodlinox.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: Steel wallet product

6. **Steely** - `https://thesteely.com/`
   - File: content/services/wallets/index.yaml
   - Pattern: Similar product category

## Indicators to Check When Verifying

When manually verifying these services, check for:

### Dead/Defunct Indicators (Remove if found):
- [ ] Domain doesn't resolve (DNS error)
- [ ] Page returns 404 or server error
- [ ] Domain parked/"for sale" page
- [ ] Last blog post/tweet > 2 years old
- [ ] "Service discontinued" message
- [ ] Company website exists but service removed
- [ ] Acquired by another company and service shut down

### Redirect/Rebrand Indicators (Update link):
- [ ] Redirects to new domain
- [ ] Rebranded (update name and link)
- [ ] Merged with another service
- [ ] Changed URL structure

### Active Indicators (Keep):
- [ ] Site loads properly
- [ ] Recent activity (tweets, blog posts)
- [ ] ETC still listed/supported
- [ ] Working product/service
- [ ] Active user community

## By File Priority

### HIGH PRIORITY (User funds at risk)

#### content/services/exchanges/index.yaml (153 links)
**Time since update:** 2 years 8 months (Feb 2022)
**Focus areas:**
- Spot markets: Verify top 30 by volume
- Derivative markets: Check if perpetuals still offered
- Small/regional exchanges: High failure rate

**Known changes since last update:**
- FTX collapsed (Nov 2022) - not in list, good
- Multiple small exchanges shut down
- Regulatory changes affected some regions

#### content/services/wallets/index.yaml (56 links)
**Time since update:** 2 years 2 months (Aug 2022)
**Focus areas:**
- Hardware wallets: Usually stable
- Software wallets: Higher churn rate
- Seed storage products: Many startups in this space

**Known changes since last update:**
- Some wallet apps discontinued
- iOS/Android app store removals
- Company pivots/acquisitions

### MEDIUM PRIORITY

#### content/community/channels/index.yaml (42 links)
**Time since update:** 2 years 8 months (Feb 2022)
**Focus areas:**
- Social media handles (Twitter, Reddit, Telegram)
- Discord invites (can expire)
- Chat platforms (Slack, Gitter deprecated)

**Known changes since last update:**
- Twitter → X rebrand (links still work)
- Gitter merged with Matrix
- Some Telegram groups may be inactive

#### content/mining/pools/index.yaml (59 links)
**Focus areas:**
- Active pools (check hashrate)
- Retired pools (low hashrate for extended period)
- Payment systems working

### LOW PRIORITY (Reference/Historical)

#### content/knowledge/history/timeline.yaml (78 links)
**Nature:** Historical references
**Action:** Lower priority, links are for historical context
**Note:** Archive.org versions acceptable for historical references

## Automated Checking Notes

Several categories of sites will fail automated checks even if working:

### Known Bot Blockers (Manual Check Required)
- Twitter/X (`twitter.com`)
- Facebook (`facebook.com`)
- Reddit (`reddit.com`)
- Discord (`discord.gg`, `discord.com`)
- Telegram (`t.me`)
- YouTube (`youtube.com`)
- Many major exchanges (require browser cookies)

These will likely show as "failed" in automated checks but may be working fine.

## Verification Process

1. **Run automated check:**
   ```bash
   node scripts/check-dead-links.js
   ```

2. **For each failed link:**
   - [ ] Try opening in browser
   - [ ] Check if site redirects
   - [ ] Verify ETC still supported
   - [ ] Check last activity date
   - [ ] Look for shutdown announcements

3. **For confirmed dead links:**
   - If service card: Delete entire entry
   - If reference link: Replace with ethereumclassic.org
   - Document in removal commit message

4. **For uncertain links:**
   - Post in Discord #website channel
   - Ask community for verification
   - Create GitHub issue for discussion
   - Leave for now if actively used by community

## Statistics

- **High confidence dead:** 1 (fixed)
- **Medium confidence requiring verification:** ~30-40
- **Total links needing some verification:** 605
- **High priority for immediate check:** ~200 (exchanges + wallets)
- **Time since last update:** 2-3 years for critical files

## Recommendations

1. **Immediate:** Verify HIGH priority files (exchanges, wallets)
2. **Short term:** Check communication channels
3. **Long term:** Set up quarterly link verification
4. **Process:** Add "last verified" dates to all service entries

## Next Steps

1. Run automated checker in environment with internet access
2. Focus manual verification on HIGH priority files
3. Cross-reference with etc.contributions.app submissions
4. Post to Discord for community help with verification
5. Update this document with findings

---

**Created:** 2025-10-14
**Status:** Awaiting manual verification with internet access
**Priority:** HIGH priority files first (exchanges, wallets)
