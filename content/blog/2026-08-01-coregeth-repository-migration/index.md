---
title: "CoreGeth Repository Migration: Maintenance Moves to the Ethereum Classic Community Org"
date: 2026-08-02
author: realcodywburns
tags:
  - Development
  - Infrastructure
image: ./core_geth_migration.png
---

The CoreGeth repository referenced by this website is moving from `etclabscore/core-geth` to `ethereumclassic/core-geth`. This post explains what is changing, what is not changing, and what node operators, miners, exchanges, and infrastructure providers should do.

**Short version: nothing on the network changes. There is no protocol upgrade, no consensus change, and no action required to keep an existing node running. This is a change to where the code is maintained and where releases are published.**

### What Is Changing

The client links on ethereumclassic.org — repository, releases, and issue tracker — now point to [`ethereumclassic/core-geth`](https://github.com/ethereumclassic/core-geth). Ongoing maintenance, review, and release tagging happen there.

The repository now exists under the community org as described in the [ETC Pathways announcement in July 2024](https://ethereumclassic.org/blog/2024-07-30-ethereum-classic-pathways-by-etc-cooperative-istora-and-donald-mcIntyre), when the intent to consolidate community-maintained assets was first stated publicly. The same consolidation covered the ECIP repository, this website, community calls, and — as of [November 2025](https://ethereumclassic.org/blog/2025-11-05-discord-migration/) — the community Discord. This step completes it for the client.

### What Is Not Changing

- **No hard fork.** No consensus rule, chain configuration, or protocol parameter is altered by this move.
- **No chain data migration.** Datadirs, keystores, database schemas, and CLI flags are unchanged. Nothing needs to be resynced.
- **No forced upgrade.** Nodes running current releases continue to operate normally and remain in consensus with the network.
- **No statement about which client anyone should run.** There is no official client in Ethereum Classic. See the client diversity section below.

### Verifiable Releases

Releases from the community org are built and signed by an automated workflow. Every release binary, checksum file, and container image carries a build provenance attestation bound to the tagged workflow run that produced it.

This means an artifact can be verified against the exact source revision it was built from, using GitHub's OIDC signing identity rather than a maintainer-held key. Artifacts produced outside that workflow — including anything uploaded manually by a repository or organization administrator — do not carry a valid attestation and will fail verification.

Verification instructions are published with each release. **Check them.** Signed provenance is only useful if operators actually verify before deploying.

### For Node Operators

If you are running a current CoreGeth release, you do not need to do anything today.

Going forward:

- **Release artifacts and signed tags** are published at `ethereumclassic/core-geth`. Update any bookmarks, documentation, or runbooks that reference the previous location.
- **CI/CD pipelines and automated update scripts** that poll the GitHub releases API for `etclabscore/core-geth` should be repointed. Pipelines watching the old path will silently stop seeing new releases rather than failing loudly — this is the most likely way an operator ends up running stale software without noticing.
- **Container images** are published to the GitHub Container Registry at `ghcr.io/ethereumclassic/core-geth`. Operators pulling from the previous Docker Hub namespace should repoint; that namespace will not receive new tags after `[VERSION]`. If you pull `:latest` in an automated deployment, repoint before the next release or you will silently pin to a stale image.
- **Package and appliance distributions** — DAppNode packages, third-party installers, hosted node providers — are maintained by their respective operators and do not follow this change automatically. If you consume CoreGeth through one of these, follow that project's guidance. Maintainers of those distributions are encouraged to open an issue in the repository so the transition can be coordinated.
- **Verify what you run.** Check attestations and published checksums against release artifacts before deploying. Do not pull binaries from unverified mirrors.

Existing releases remain available at their original location. Nothing is being deleted or made inaccessible, and historical artifacts stay retrievable for reproducibility and audit.

### Why the Move

The rest of the community's shared infrastructure — the ECIP repository, this website, community call records — is maintained under the `ethereumclassic` org, where branch protection requires review from multiple maintainers before anything merges. The client was the last item outside that model.

Consolidating maintenance under the community org means:

- Changes to a widely deployed client are visible to multiple contributors before release.
- The same review standard applies to the client as to every other shared community asset.
- Release artifacts are reproducible from reviewed source and verifiable by anyone, rather than resting on trust in whoever performed the build.
- No single organization's continued existence is a dependency for the community's reference to that work.

The move also resolves a practical problem: the previous org is inactive, which has made routine maintenance — dependency updates, security patches, release cadence — slower than it should be for software this widely deployed.

### Contributing and Reporting Issues

Issues, pull requests, and security reports go to [`ethereumclassic/core-geth`](https://github.com/ethereumclassic/core-geth). Maintainer access is open to contributors with a track record in the ecosystem; open an issue in the [volunteer org](https://github.com/ethereumclassic) to be considered.

Security-sensitive reports should be raised privately to maintainers first, following the disclosure process in the repository's `SECURITY.md`, rather than opened as public issues.

### Client Diversity

CoreGeth is the most widely deployed Ethereum Classic client, but it is not the only one, and the network is healthier when it is not the only one. A bug in a single implementation that everyone runs becomes an involuntary consensus rule for the whole network. Running a minority client is a meaningful contribution to network resilience.

Alternative implementations and plugins for ETC include:

- [Hyperledger Besu](https://github.com/hyperledger/besu) with the [ETC plugin](https://github.com/diega/besu-etc-plugin)
- [Nethermind](https://github.com/NethermindEth/nethermind) with the [ETC plugin](https://github.com/etccooperative/nethermind-etc-plugin)
- [go-ethereum-classic](https://github.com/diega/go-ethereum-classic)
- [Fukuii](https://github.com/chippr-robotics/fukuii)


Operators evaluating client choice are encouraged to look at these, and developers interested in maintaining an implementation are encouraged to build one. Consensus rules are defined by the [ECIP process](https://github.com/ethereumclassic/ECIPs), not by any repository or organization.

### Questions

Discussion happens in the [community Discord](https://ethereumclassic.org/discord) and on the [community calls](https://cc.ethereumclassic.org/). If your infrastructure depends on the previous repository path in a way this post does not address, raise it — operator feedback on transition mechanics is welcome before and after the cutover.

💚⚒️
*Ethereum Classic Community*

