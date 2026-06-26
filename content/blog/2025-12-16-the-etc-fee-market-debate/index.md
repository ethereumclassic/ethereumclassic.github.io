---
title: "The ETC Fee Market Debate: Navigating the Path Forward"
date: 2026-03-30
author: Cody Burns, Diego López León, Istora Mandiri
contributors: ["realcodywburns", "IstoraMandiri", "diega"]
tags: ["announcement", "development", "hardfork"]
---

*This article summarizes active proposals and the arguments made by their respective authors. Inclusion does not constitute endorsement of any proposal. Readers are encouraged to review each ECIP directly and form their own conclusions.*

## The Fee Market Question

EIP-1559 introduced a dynamic fee market with a base fee that adjusts algorithmically based on network demand, improving fee predictability by replacing the first-price auction model.

There is general agreement within the ETC community that adopting this mechanism is desirable. The remaining question is what to do with the basefee once collected. On Ethereum, basefees are burned. For Ethereum Classic, with its commitment to a fixed monetary supply under [ECIP-1017](https://ecips.ethereumclassic.org/ECIPs/ecip-1017), the community must decide how to handle these fees in alignment with ETC's principles.

Two broad approaches have been proposed. Each offers a vision with distinct tradeoffs.

## The Olympia Approach (ECIPs 1111-1119)

Olympia, introduced by Cody Burns and Chris Mercer, proposes redirecting basefees to a treasury governed by on-chain mechanisms. The suite encompasses:

- **[ECIP-1111](https://ecips.ethereumclassic.org/ECIPs/ecip-1111)**: Activates EIP-1559 and redirects basefees to a treasury contract
- **[ECIP-1112](https://ecips.ethereumclassic.org/ECIPs/ecip-1112)**: Defines the on-chain treasury contract
- **[ECIP-1113](https://ecips.ethereumclassic.org/ECIPs/ecip-1113)**: Establishes a modular on-chain governance framework
- **[ECIP-1114](https://ecips.ethereumclassic.org/ECIPs/ecip-1114)**: Creates the Olympia Improvement Process (OIP) for funding proposals
- **[ECIP-1115](https://ecips.ethereumclassic.org/ECIPs/ecip-1115)**: Introduces optional L-curve smoothing to distribute a governance-defined portion of basefees to miners
- **[ECIP-1116](https://ecips.ethereumclassic.org/ECIPs/ecip-1116)**: Proposes a 95/5 basefee split between miners and the treasury
- **[ECIP-1117](https://ecips.ethereumclassic.org/ECIPs/ecip-1117)**: Introduces futarchy (prediction-market-based) governance for treasury decisions
- **[ECIP-1118](https://ecips.ethereumclassic.org/ECIPs/ecip-1118)**: Defines streaming disbursements and funding mechanisms for governance infrastructure
- **[ECIP-1119](https://ecips.ethereumclassic.org/ECIPs/ecip-1119)**: Establishes a sanctions compliance oracle for treasury withdrawals

### The case for Olympia

Proponents observe that ETC has faced challenges funding core development and infrastructure. Some view historical reliance on donations and ad-hoc coordination as unsustainable, and see Olympia as creating a self-sustaining funding mechanism.

The treasury is designed to be governed entirely on-chain through smart contracts. Disbursements would execute automatically after successful votes, which supporters say ensures decisions are transparent and follow predetermined rules. Supporters suggest the OIP (Olympia Improvement Process) would open funding access to all contributors equally.

Proponents argue that on-chain governance enhances decentralization by replacing opaque off-chain decision-making with transparent on-chain processes.

ECIP-1115 and ECIP-1116 offer flexibility within the Olympia framework. Rather than directing all basefees exclusively to the treasury, governance can allocate a portion to miners, allowing the network to balance treasury funding with miner incentives. This split would be adjustable through the OIP process without requiring hard forks.

*The following third-party resources advocate for the Olympia approach. They are provided for informational purposes and their inclusion does not constitute endorsement:*

- [olympiadao.org](https://olympiadao.org) - Olympia governance and treasury infrastructure
- [ethereumclassicdao.org](https://ethereumclassicdao.org) - Ethereum Classic DAO LLC

## ECIP-1120: Basefee Distribution to Miners

[ECIP-1120](https://github.com/ethereumclassic/ECIPs/pull/547), authored by Istora Mandiri and Diego López León, proposes distributing basefees directly to miners.

The proposal introduces a backward-looking distribution system that algorithmically smooths fee payments across ancestor blocks, deriving distribution objectively from existing block header data without additional state management.

### The case for ECIP-1120

Proponents argue that proof-of-work security depends on adequate miner compensation. As block subsidies decline under ECIP-1017, some view transaction fees, though currently a small fraction of miner income, as increasingly important for maintaining the security budget long-term. ECIP-1120 directs basefees to those who secure the network.

The proposal avoids introducing governance mechanisms at the consensus layer. Supporters suggest the protocol layer should remain minimal and focused on consensus, that this minimizes attack surface and complexity, and that simplicity itself contributes to security and longevity.

Opponents of the treasury approach have raised broader concerns. Some argue that embedding a treasury at the protocol layer changes the rules agreed upon in ETC's founding documents, breaks protocol neutrality, increases the network's vulnerability to capture, and introduces additional technical, legal, and political risk.

*The following third-party resources advocate for ECIP-1120 or against the Olympia approach. They are provided for informational purposes and their inclusion does not constitute endorsement:*

- [ecip1120.dev](https://ecip1120.dev) - ECIP-1120 proposal information
- [nolympia.dev](https://nolympia.dev) - A community petition opposing the Olympia treasury proposal

## The Path Forward

### Common Ground: ECIP-1121

Regardless of how the fee market debate is resolved, [ECIP-1121](https://ecips.ethereumclassic.org/ECIPs/ecip-1121) proposes an execution client specification alignment that is broadly non-controversial. It brings ETC clients up to date with recent Ethereum execution-layer improvements such as gas accounting, cryptographic precompiles, and memory optimizations, while explicitly excluding contentious items like fee market governance and proof-of-stake changes. This upgrade can proceed independently of the treasury debate.

### The Importance of Deliberation

Ethereum Classic exists because of a community that refused to accept a rushed, contentious change to protocol rules. That history carries a responsibility: changes to ETC's economic model deserve the highest standard of scrutiny, and the cost of getting it wrong far outweighs the cost of taking more time.

Neither proposal is final. Both remain open for discussion, revision, and community input. The [ECIP process](https://ecips.ethereumclassic.org) exists to ensure decisions emerge through broad participation rather than narrow consensus.

The ETC community holds regular calls where proposals like these are discussed openly. Check the [community calls repository](https://github.com/ethereumclassic/community-calls) for schedules and recordings.

Questions worth considering:

- What is the appropriate level of protocol complexity for ETC?
- How should the network ensure long-term security as block subsidies decline?
- What mechanisms, if any, should exist for coordinating development funding?
- What are the risks of acting too quickly, or too slowly?

Both proposals have thoughtful authors behind them. Examine both, ask questions, and participate in the discussion. Your participation matters.
