---
title: Future Classic
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-02-22
disclaimer: opinion
seo: An overview of the future development roadmap and how decisions are made in the Ethereum Classic ecosystem, based on its history, principles.
---

Unlike many other blockchain projects, Ethereum Classic does not have a central organizing committee calling the shots, so what gets implemented in the protocol is determined through an organic, meritocratic, emergent system, rather than top-down. While this approach is not designed at first to yield explosive expansion, the trade-off is made for long term sustainability, and Ethereum Classic's persistence has put it in a strong position for its next stage of growth when network effects begin to snowball adoption.

In this section, we will unpack this process, take a high level overview of the current state of ETC, and briefly cover some potential upgrades currently being discussed that may be on the horizon for ETC.

## Upgrade Process

Ethereum Classic, like Bitcoin, does not have a roadmap in the traditional software development sense, but rather a process that allows good features to be implemented if and when they come along and are approved by the community.

### ECIPs

The [Ethereum Classic Improvement Proposal (ECIP) process](/development/ecips) is how upgrades to Ethereum Classic are discussed, and rigorously vetted by its developer community. This process is open, and anyone can contribute by drafting an ECIP that may one day be included in Ethereum Classic.

### Move Slowly & Don't Break Things

Typically, implementing new features requires overwhelming support or, at least, no significant opposition from the Ethereum Classic community, making ETC, like BTC, fairly cautious in its technological development. With no central group biasing decisions about what upgrades are implemented, the threat of a chain split due to significant pushback means that Hard Forks on ETC tend to be safe, incremental and above all non-contentious.

Rather than a "move fast and break things" mentality, which can cause financial harm if things go wrong, significant updates are typically mulled, refined and tested over long periods before being implemented into the protocol so that consensus can be properly reached _before_ a fork.

Additionally, care is taken to ensure that, as much as possible, contracts that were deployed as far back in 2015 can faithfully operate in perpetuity and that _Code is Law_ is maintained.

This does not mean that ETC is unable to innovate opportunistically. One such example is the [Thanos fork](/knowledge/forks#thanos), which took advantage of Ethereum's increasing DAG size sweep up security by allowing an otherwise abandoned category of GPUs to mine ETC, which was an easy win-win upgrade for Ethereum Classic.

### Inherited Innovation

Ethereum Classic maintains compatibility with Ethereum Virtual Machine, it inherits all the innovations that happen on other EVM chains, including contract systems, developer tooling, libraries and other general concepts funded by and developed primarily for these other chains.

Optimistic Rollups, a promising Layer 2 technology that enhances scalability via off-chain transactions, is an excellent example of this. Thanks to the nature of Free Open Source Software, millions of dollars of research and development were spent by projects and teams that had no association with Ethereum Classic. This innovation, thanks to generalized EVM compatibility, has indirectly increased the utility and value of ETC.

### Ethereum as a Testnet

One advantage of this approach is that Ethereum Classic can stand by while watching other chains take on the risk of implementing new features. Only after they have shown to be safe and effective, good features can be implemented with minimal risk and development effort.

In this way, other EVM chains can be seen as incentivized testnets of Ethereum Classic, with much more rigorous testing than a traditional testnet could provide.

## Looking Ahead

As of writing, 2022 has just arrived, and ETC is beginning the year experiencing a surge of activity. A litany of new [apps](/services/apps) and users have organically coalesced, and the ETC ecosystem is starting to show signs of network effects, which will snowball adoption as the network becomes more useful and valuable.

Recent growth is partly thanks to a growing army of Ethereum Classic content creators and influencers who have been creating [videos](/videos) and memes, driving adoption through social media.

### The Merge

Ethereum™ mainnet chain, although experiencing some minor delays, is looking increasingly close to completing a migration away from Proof of Work to Proof of Stake, known as _The Merge_. For Ethereum Classic this will be an extremely relevant event, as it seems likely newly evicted GPU miners will be looking towards other chains to mine, and Ethereum Classic is an obvious choice.

The migration of miners from ETC to ETH will likely bring a new wave of interest to the Ethereum Classic ecosystem, increase the security of the network, and accelerate adoption and network value.

Additionally, if there are any short term problems during or after "The Merge", perhaps due to unforeseen game theory problems or protocol exploits due to additional complexity, Ethereum Classic will be ready and waiting to provide a fallback chain that remains on the tried and true Ethereum protocol of today. In the long term, the move to Proof of Stake will likely result in further centralization of Ethereum™ mainnet, which makes it vulnerable to other kinds of social attacks, which again, ETC will remain immune to.

### SHA3

One proposal that is garnering a lot of [discussion](https://etccooperative.org/posts/2020-12-03-why-keccak/) in the Ethereum Classic community is the idea of changing the mining algorithm away from ETCHash to SHA3 (keccak).

Changing the mining algorithm of a blockchain mid-flight is a huge undergoing and presents potential risks. The debate is by no means settled and somewhat depends on the state of the future ecosystem. Still, the move towards SHA3 has the potential to provide some benefits to the ETC technologically and security wise.

SHA3 enables a new type of light client known as a "FlyClient", which can more efficiently and securely verify the state of the chain, which is useful in many applications and increases decentralization by reducing hardware requirements to sync. SHA3 blocks are also easier to verify in contracts, which may open doors to new types of applications and cross chain interoperability options.

### EVM Versioning

With Ethereum Classic aiming to maintain _Code is Law_ for many decades, if not centuries to come, a feature of major utility will be that of _versioning_ of deployed contracts. This provides several significant advantages to the long term operation and maintenance of Ethereum Classic, notably that it makes it far easier to maintain _Code is Law_ whilst still providing flexibility for upgrading contract execution in the future.

Rather than worrying about whether a protocol change, such as gas repricing, would break old contracts, versioning would mean deployed code is guaranteed to always run on a compatible version of the EVM based on the block number it was deployed to. In additional, future contracts could opt-in to functionality that would otherwise break old contracts, meaning Ethereum Classic can provide new technology like signature schemes, add or modify opcode behavior, etcetera, without affecting existing applications.

Even though they are running on a different version of the EVM, future contracts would still be able to communicate with old contracts over the same (or translated) API to maintain interoperability. There appears to be no apparent downside to versioning other than the additional complexity required to implement it.

### Layer 2

It is becoming increasingly clear that the only reasonable ways to scale blockchains is in layers. With Bitcoin's Lightning Network spearheading this promising new domain, Ethereum is following in the form of State Channels, Optimistic Rollups, zk-Rollups, and other emergent technologies.

Layer 2 promises to provide adequate assurances of decentralization and trustlessness, with much greater transaction throughput by managing state off-chain and using the base chain for settling this state. In theory, there is no upper bound to the number of transactions per second in many Layer 2 systems, and can satisfy civilization-scale usage requirements.

With Ethereum Classic's EVM and commitment to Proof of Work that will eventually dominate mining in ETCHash or SHA3, it will be one of the few choices for a Sovereign Grade base layer that can support a full range of L2 solutions.
