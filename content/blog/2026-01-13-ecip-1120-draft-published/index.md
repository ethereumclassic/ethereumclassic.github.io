---
title: "ECIP-1120 Draft Published"
date: 2026-01-13
author: Istora Mandiri
contributors: ["IstoraMandiri"]
tags: ["announcement", "development", "hardfork"]
disclaimer: opinion
---

After extended discussion in the Ethereum Classic community, [PR #547](https://github.com/ethereumclassic/ECIPs/pull/547) has been merged. [ECIP 1120: Basefee Market with Miner Rewards](https://ecips.ethereumclassic.org/ECIPs/ecip-1120) is now published in the ECIP repository as a Draft proposal.

This article explains what ECIP-1120 is, the significance of this milestone, how we got here, and what comes next.

## What is ECIP-1120?

ECIP-1120 brings [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)-style transaction fee markets to Ethereum Classic. The key difference from Ethereum's implementation is that base fees are redistributed to miners rather than burned.

Ethereum Classic increasingly needs EIP-1559 compatibility because modern wallets, infrastructure, and smart contract systems expect these transaction types. At the same time, as a fixed-supply proof-of-work chain, ETC cannot afford to burn fees. Miners need that revenue for long-term security, particularly as block subsidies decline under ECIP-1017's emission schedule.

The proposal distributes base fees across a window of ancestor blocks, which smooths miner revenue and discourages manipulation.

For the full technical details, see the [specification](https://ecips.ethereumclassic.org/ECIPs/ecip-1120).

## What This Means

To be clear, this is a procedural step within the ECIPs repository. The proposal has been published as a Draft, not activated on the network. No changes to Ethereum Classic itself have occurred.

That said, having ECIP-1120 recognized as a Standards Track Core proposal matters. It sits alongside other Core ECIPs, available for review, critique, and iteration by the community.

[Olympia](https://ecips.ethereumclassic.org/ECIPs/ecip-1111) (ECIPs 1111 through 1115) proposes redirecting fees to a treasury with DAO governance. ECIP-1120 takes a different path: purely algorithmic distribution with no treasury, no governance, and no smart contracts. For those who have concerns about treasury-based approaches, this provides a concrete alternative to evaluate. The ETC community now has two distinct paths forward for EIP-1559 adoption, each with different tradeoffs.

Draft status means the proposal has passed basic editorial review but is not final. Parameters remain to be determined, implementation details need validation, and community consensus must be built. The specification is in place; the work continues.

## The Path Here

The PR was open for several months while editors and authors worked through a classification question: should ECIP-1120 be labeled "Informational" or "Standards Track Core"? The disagreement centered on whether a proposal with undefined parameters could qualify as Standards Track.

After discussion, including a community call where editors reviewed the precedents and ECIP-1000 requirements, three of four editors agreed that Standards Track was the appropriate classification. The proposal describes consensus-layer changes requiring a hard fork; that's what Standards Track Core is for. Parameter finalization is part of the Draft-to-Final process, not a prerequisite for initial acceptance.

With that resolved, the PR was accepted and the Draft was published on January 12, 2026.

## What Comes Next

With the specification now in Draft status, a number of areas need community input before ECIP-1120 can progress. We'll start with research on finalizing parameters.

**Block Elasticity**: What should the elasticity multiplier be? Higher values allow larger temporary block sizes for contract deployments and L2 settlement, but require careful analysis of node performance and network propagation.

**Distribution Mechanism**: How should base fees flow to miners across ancestor blocks? The smoothing window size and distribution curve shape affect both miner revenue stability and manipulation resistance.

**Consensus Gathering**: Beyond the technical parameters, the community needs to weigh in on whether this is the right direction for ETC. Client developers, miners, node operators, and other stakeholders all have perspectives that matter.

A dedicated research hub has been set up at [ecip1120.dev](https://ecip1120.dev). The research published there provides starting points, and we'll continue publishing findings as work progresses.

## Moving Forward Together

With the procedural questions now resolved, the focus shifts to the work ahead. Ethereum Classic's development community is small, which makes coordination and shared effort all the more important.

The community now has two concrete paths for EIP-1559 adoption: ECIP-1120 and Olympia. Both need further development, and ultimately the ecosystem will need to reach consensus on which direction to take. For ECIP-1120, the path forward involves research, community feedback, parameter finalization, and if there's consensus, client implementation and a hard fork. That requires input from client developers, miners, node operators, researchers, and community members.

The coming months will require your voice. Join the [community calls](https://cc.ethereumclassic.org), participate in the [ETC Discord](https://ethereumclassic.org/discord), and share your thoughts on socials. Please contribute your opinion. It matters.

---

*This article is a cross post of [https://ecip1120.dev/ecip-1120-draft-published](https://ecip1120.dev/ecip-1120-draft-published)*
