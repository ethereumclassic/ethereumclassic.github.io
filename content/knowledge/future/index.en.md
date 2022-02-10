---
contribute: true
contributors: ["IstoraMandiri"]
updated: 2022-01-01
title: Future Classic
seo: An overview of the future development roadmap and how decisions are made in the Ethereum Classic ecosystem, based on it's history, principles.
disclaimer: opinion
---

Unlike many other blockchain projects, Ethereum Classic does not have a central organizing comittee calling the shots, so what gets implemented in the protocol is determined through an organic, meritocratic, emergent system, rather than from the top down. Whilst this appraoch is not designed to yeild explosive expansion at first, the trade-off is made for long term sustainability, and Ethereum Classic's persitence has put it in a strong position for it's next stage of growth when network effects begin to snowball adoption.

In this section, we will unpack this process, take a high level overview of the current state of ETC, and briefly cover some potential upgrades currently being discussed and may be on the horizon for ETC.

## Upgrade Process

Etheruem Classic, like Bitcoin, does not have a "Roadmap" in the traditional sense, but rather a process that allows good features to be implemented if and when they come along and are approved by the community.

### Move Slowly & Don't Break Things

Typically, the implementation of new features requires overwealming support (more accurately, no significant opposition) from the Ethereum Classic community, making ETC, like BTC, fairly cautious in it's technological development. With no central group biasing decisions about what upgrades are implemented, the threat of a chain split due to significant pushback means that Hard Forks on ETC tend to be safe, incremental and above all non-contencious.

Rather than a "move fast and break things" mentality, which can cause financial harm if things go wrong, significant updates are typically mulled, refined and tested over long periods before being implemented into the main network to that consensus can be properly reached _before_ a fork.

Additionally, care is taken to ensure that, as much as possible, contracts that were deployed as far back in 2015 can faithfully operate in perpetuity, and that _Code is Law_ is maintained.

This does not mean that ETC is unable to innovate opportunistically. One such example is the [Thanos fork](/knowledge/forks#thanos), which took advantage of Ethereum's increasing DAG size in order to sweep up security by allowing an otherwise abandoned category of GPUs to mine ETC, which was an easy win-win upgrade for Ethereum Classic.

### Inherited Innovation

As Etheruem Classic maintains compatibiltiy with Ethereum Virtual Machine, it inherits all of the innovations that happen on other EVM chains, including contract systems, devleoper tooling, libraries and other general concepts that were funded by and developed primarily for these other chains.

Optimistic rollups, a promising Layer 2 technology that enhances scalability via off-chain transactions, is an excellent example of this. Thanks to the nature of Free Open Source Software, millions of dollars of research and development were spent by projects and teams that had no association with Ethereum Classic, but this innovation, thanks to generalised EVM compatibility, has indirectly increased the utility and value of ETC.

### Etheruem as a Testnet

One advantage of this approach is that Ethereum Classic can stand by whilst watching other chains take on the risk of implementing new features, and only after they have shown to be safe and effective, good features can be implemented with minimal risk or development effort.

In this way, other EVM chains can be seen as incentivised Testnets of Etheruem Classic, with much more rigorous testing than a traditional Testnet could provide.

### ECIPs

The [Ethereum Classic Improvement Proposal (ECIP) process](/development/ecips) is the main way that upgrades for Ethereum Classic are discussed, and are rigorously vetted by it's developer community. This process is completely open, and anyone can contribute by drafting an ECIP that may one day be included in Ethereum Classic.

## Looking Ahead

As of writing, the year of 2022 has just arrived, and ETC is beginning the year experiencing a surge of activity. A liteny of new [apps](/services/apps) and users have organically coelessed and the ETC ecosystem is beginning to show signs of network effects, which will snowball adoption as the network becomes more useful and valuable.

Recent growth is partly thanks to a growing army of Etheruem Classic content creators and influencers who have been creating [videos](/videos), memes and driving adoption through social media.

### The Merge

Etheruem mainnet, although experiencing some minor delays, is looking increasingly close to completing thier migration away from Proof of Work to Proof of Stake, known as _The Merge_. For Ethereum Classic this will be an extremely relevant event, as it seems likely newly evicted GPU miners will be looking towrads other chains to mine, and Ethereum Classic is an obvious choice.

The migration of miners from ETC to ETH is likely bring a new wave of interest to the Ethereum Classic ecosystem, will increase the security of the network, and is very likely to accellarate adoption and network value.

Additionally, if there are any short term problems during or after "The Merge", perhaps due to [unforeseen](/why-classic/decentralization) Game Theory problems or protocol exploits due to additional complexity, Ethereum Classic will be ready and waiting to provide a fallback chain that remains on the tried and true Ethereum protocol of today. In the long term, the move to Proof of Stake is likely to result in further centralization of Etheruem mainnet, which makes it vulnerable to other kinds of social attacks, which agian, ETC will remain immune to.

### SHA3

One porposal that is garnereing a lot of [discussion](https://etccooperative.org/posts/2020-12-03-why-keccak/) in the Etheruem Classic community is the idea of changing the mining algorithm away from ETCHash to SHA3 (keccak).

Changing the mining algorithm of a blockchain mid-flight is a huge undergoing and presents potential risks, and the debate is by no means settled and somewhat depends on the state of the future ecosystem, but the move towards SHA3 has the potential to provide many benefits to the ETC technologically and security wise.

SHA3 enables a new type of light client known as a "FlyClient", which can more efficiently and securely verify the state of the chain, which is useful in many applications and increases decentralization. SHA3 blocks are also easier to verify in contracts, which may open doors to new types of applications and cross chain interoperability options.

It appears that current thinking is that _after_ "The Merge" is completed (or abandoned), a serious focus on either implementing or abandoning the SHA3 proposal will come to the forefront, so this discussion is sure reactivate in the not-to-distant future.

### EVM Versioning

With Ethereum Classic aiming to maintain _Code is Law_ for many decades, if not centuries to come, a feature of major utility will be that of _versioning_ of deployed contracts. This provides several significant advantages to the long term operation and maintenance of Etheruem Classic, notably that it makes it far easier to maintain _Code is Law_ whilst still providing flexibility for upgrading contract execution in the future.

Rather than having to worry about whether a protocol change (such as gas repricing) would break old contracts, versioning would mean deployed code is guarunteed to always run on a compatible version of the EVM based on the block number it was deployed to. Future contracts could opt-in to additional functionality that would otherwise break old contracts, and that Etheruem Classic can provide new technology like signature schemes, add or modify opcode behaviour, etc. without effecting existing applications.

Future contracts, even though they are running on a different version of the EVM, would still be able to communicate with old contracts over the same (or translated) API, so interoperability can be maintained. There appears to be no obvious downside to versioning other than the additional complexity required to implement it.

### Layer 2

It is becoming increasingly clear that the only reasonable ways to scale blockchains is in layers. With Bitcoin's Lightning Network spearheading this promising new domain, Ethereum is following in the form of State Channels, Optimistic Rollups, zk-Rollups, and other emergent technologies.

Layer 2 promises to provide adequate assurances of decentralization and trustlessness, with much greater transaction throughput by managing state off-chain and using the base chain for settling this state. In theory, there is no upper bound to the number of transactions per second in many Layer 2 systems, and can, again in theory, satisfy civilization-scale usage requirements.

With Etheruem Classic's EVM and commitment to Proof of Work that will eventually dominate mining in Ethash or SHA3, it will be one of the only choices for a Sovereign Grade base layer that can support a full range of L2 solutions.
