---
title: "The ETC Fee Market Debate: Navigating the Path Forward"
date: 2025-12-16
author: Cody Burns, Diego López León, Istora Mandiri, Chris Mercer
contributors: ["realcodywburns", "IstoraMandiri", "chris-mercer"]
tags: ["announcement", "development", "hardfork"]
---

The Ethereum Classic community stands at a crossroads. Two distinct proposals for implementing EIP-1559-style fee market mechanisms have emerged, each representing different philosophies about how ETC should evolve. Both paths offer compelling visions for the network's future, and the coming months will see the community work through these options together.

## The Fee Market Question

EIP-1559 introduced a dynamic fee market with a base fee that adjusts algorithmically based on network demand, improving fee predictability by replacing the first-price auction model.

The key question for ETC is not whether to adopt this mechanism, but what to do with the basefee once collected. On Ethereum, basefees are burned. For Ethereum Classic, with its commitment to a fixed monetary supply under [ECIP-1017](https://ecips.ethereumclassic.org/ECIPs/ecip-1017), the community must decide how to handle these fees in alignment with ETC's principles.

Two proposals have been submitted for consideration. Each offers a coherent vision with distinct tradeoffs.

## Two Proposals, Two Approaches

### The Olympia Upgrade (ECIPs 1111-1114)

Olympia, introduced by Cody Burns and Chris Mercer, proposes redirecting basefees to a protocol-level treasury governed by on-chain mechanisms:

- **[ECIP-1111](https://ecips.ethereumclassic.org/ECIPs/ecip-1111)**: Activates EIP-1559 and redirects basefees to a treasury contract
- **[ECIP-1112](https://ecips.ethereumclassic.org/ECIPs/ecip-1112)**: Defines the on-chain treasury contract
- **[ECIP-1113](https://ecips.ethereumclassic.org/ECIPs/ecip-1113)**: Establishes a modular on-chain governance framework
- **[ECIP-1114](https://ecips.ethereumclassic.org/ECIPs/ecip-1114)**: Creates the Olympia Improvement Process (OIP) for funding proposals

#### The case for Olympia

Proponents observe that ETC has faced challenges funding core development and infrastructure. Some view historical reliance on donations and ad-hoc coordination as unsustainable, and see Olympia as creating a self-sustaining funding mechanism native to the protocol.

The treasury is designed to be governed entirely on-chain through smart contracts. Disbursements would execute automatically after successful votes, which supporters say ensures decisions are transparent and follow predetermined rules.

Proponents argue that empowering ETC holders to govern fund allocation aligns incentives between those who hold value in the network and those who decide how protocol revenue is spent. They suggest the OIP (Olympia Improvement Process) would open funding access to all contributors equally.

Some believe that on-chain governance, properly designed, enhances decentralization by replacing opaque off-chain decision-making with transparent on-chain processes.

### ECIP-1120: Basefee Market with Miner Rewards

[ECIP-1120](https://github.com/ethereumclassic/ECIPs/pull/547), authored by Istora Mandiri and Diego López León, proposes distributing basefees directly to miners through a protocol-native mechanism.

The proposal introduces a backward-looking distribution system that smooths fee payments across ancestor blocks, deriving distribution entirely from existing block header data without additional state management.

#### The case for ECIP-1120

Proponents argue that proof-of-work security depends on adequate miner compensation. As block subsidies decline under ECIP-1017, some view transaction fees as increasingly important for maintaining the security budget. ECIP-1120 directs basefees to those who secure the network.

The proposal avoids introducing governance mechanisms at the consensus layer. Supporters suggest that keeping fee distribution protocol-native and stateless minimizes attack surface, reduces complexity, and sidesteps difficult questions of voter participation and governance capture.

Authors contend the smoothing mechanism reduces fee manipulation opportunities and provides more consistent miner rewards, potentially making revenue more predictable for mining infrastructure investment.

Some believe the protocol layer should remain minimal and focused on consensus, that funding decisions are better handled through existing coordination, and that simplicity itself contributes to security and longevity.

## The ECIP Process

Ethereum Classic has no foundation dictating technical direction. Decisions emerge through the [ECIP process](https://ecips.ethereumclassic.org), where proposals are submitted, reviewed, debated, and refined through community participation.

Neither proposal is final at this stage. Both remain open for discussion, revision, and community input.

## Community Engagement

Both proposals deserve thorough examination on technical merits, philosophical alignment with ETC's principles, and practical implementation considerations.

The ETC community holds regular calls where proposals like these are discussed openly. Check the [community calls repository](https://github.com/ethereumclassic/community-calls) for schedules and recordings.

Questions to consider:

- What is the appropriate level of protocol complexity for ETC?
- How should the network ensure long-term security as block subsidies decline?
- What mechanisms, if any, should exist for coordinating development funding?

## A Level Playing Field

Both proposals have thoughtful authors behind them. The strength of arguments, quality of research, and breadth of community support will inform the outcome.

Those who favor one approach may find it valuable to articulate why reasonable people might favor the other.

## Rough Consensus

Perfect unanimity is rarely achieved in open communities. The goal is for voices to be heard, concerns to be addressed, and the community to move forward together when a direction emerges.

Both proposals are in development and open for review. Examine both, ask questions, and participate in the discussion. Your participation matters.
