---
title: "Ethereum Classic Pathways by ETC Cooperative, Istora, and Donald McIntyre"
date: 2024-07-30
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["philosophy", "development"]
linkImage: ./banner.png
---

![](./banner.png)

*This post is based on [the presentation](https://www.youtube.com/live/vD7gS344qTg?t=20424s) the author did at WDMS Oman in March of 2024.*

Smart contracts are the second most important invention of the blockchain industry. Satoshi Nakamoto actually had planned smart contracts for Bitcoin. However, because of technical problems with its design, Bitcoin did not support smart contracts inside its highly secure environment. This is why Vitalik Buterin invented Ethereum Classic (ETC), which is the original Ethereum, to be a POW blockchain, with digital gold, and that it could be programmable. Hence, ETC is Bitcoin’s philosophy with Ethereum’s technology. In other words, the best of both worlds.

ETC is a unique combination of attributes because it is not only a POW blockchain and has a fixed monetary supply schedule, but also is programmable with smart contracts. This is a unique positioning for Ethereum Classic that has already made it the largest POW smart contracts blockchain in the world, and the fifth largest POW blockchain overall. These three pillars make true the aspirations of “Code Is Law” and “Unstoppability”.

Bitcoin’s innovation, enabled by POW, is permissionlessness and sound internet money. ETC’s innovation is to add programmability to permissionlessness and sound internet money, making applications unstoppable. With smart contracts inside Ethereum Classic, decentralized applications are much more secure than any type of application running on external systems, data centers, or cloud services. Indeed, applications in ETC are the most secure apps in the world.

As a POW blockchain with smart contracts, ETC has the most valuable position in the industry because, after the move by Ethereum to POS, ETC became the largest POW programmable blockchain in the world that is digital gold. POS smart contract blockchains are insecure, and POW blockchains without smart contracts are less versatile AND less secure.

As ETC has a fixed supply cap of 210,700,000 ETC; and there are around 148 million already issued; then, there are more or less 62,700,000 ETC still to be mined. This is an estimated future revenue of more than $1.4 billion dollars at current prices, of which around 50% will be paid to miners in the next 10 years. However, because of its continued growth and excellent positioning as programmable digital gold, mining revenues are likely to be significantly higher.

Although people often talk about "roadmaps" for these projetcs, ETC does not actually have a roadmap.  As Istora Mandiri, a very important ETC community member, explained [in a post](https://ethereumclassic.org/blog/2023-04-08-roadmaps-and-pathways) on the ETC community website, in a truly decentralized blockchain there cannot be roadmaps. Technological roadmaps are imposed by leadership, corporations, or foundations. Decentralized blockchains such as Bitcoin or Ethereum Classic do not have presidents, leaders, administrators, or managers. Everything happens through the improvement proposal process, which in ETC is the “Ethereum Classic Improvement Proposal (ECIP) process”. Instead, ETC has a pathway that is forged on the go by the ECIP process through intense debates in the ecosystem.

Having said this, then, there are several parallel proposals for technological upgrades of the ETC blockchain, for example, this is the ETC Cooperative’s proposed pathway for 2024:

1. Enhancing Client Stability and Functionality:

- Comprehensive Maintenance and Enhancement of the Core-Geth Client
- Advanced Support and Refinement in Cross-Client Testing (Core Geth, Erigon, Core Geth Light, and Hyperledger Besu)

2. Network Observation and Analysis Advancements (to check network health):

- Node Infrastructure for Observation and Analysis
- Upgrading Chain and Network Monitoring and Incident Reaction Systems
- Upgrading Network Analysis Tooling
- Unified Infrastructure Management (there are many servers managed manually, and the idea is to unify everything with a single deployment interface called Ansible)

3. Technological Development and Exploration:

- The EVM Object Format (EOF): To continue advocacy for inclusion to Ethereum and ETC (the Prague hard fork in ETH in the second half of 2024 may include EOF but it is competing with Verkle trees)
- EIP 1559: We will be exploring enablement on ETC to have full parity with Ethereum in this aspect as well
- Verkle Trees: We will research ETC implications in the absence of a beacon chain (the Patricia Merkle Tree will be replaced with Verkle Trees to enable stateless clients)
- Privacy-Oriented Geth Deployment, we will study to add privacy technology to ETC’s node software such as VPN services
- Enhancing regression testing and automating release processes (to better check how new releases affect older releases, etc.)

Istora Mandiri himself proposed the following pathway:

1. Erigon Client Adoption:

- One potential path for Ethereum Classic is the adoption of the Erigon client, which would make the network more secure and accessible. Erigon allows for faster syncing and validation on cheaper hardware, making it an attractive option for a wider range of users and strengthening the ETC network.

2. Upgradability and EVM Object Format (EOF):

- Another possible direction for ETC is the implementation of the EVM Object Format (EOF), which would enable upgradability of the Ethereum Virtual Machine. EOF is particularly useful for ETC as it opens the door to backwards-incompatible updates while maintaining the "Code is Law" principle. This also paves the way for more easily adopting EVM innovations made by other projects.

3. Cryptographic Primitives for L2 and Privacy:

- ETC may also benefit from adding cryptographic primitives similar to those planned for in Ethereum mainnet to support L2 protocols and enhance privacy features. These additions would provide a solid foundation for scaling and improving the overall functionality of the network.

4. L2 Scaling and Compatibility:

- While Ethereum mainnet has long-term goals for layer-1 level sharding, much effort is currently focused on L2 protocols, such as rollups. ETC can take advantage of these technologies and adopt them for compatibility and scaling. This would allow Ethereum Classic to grow in tandem with the broader Ethereum ecosystem.

And, the roadmap that I proposed in a recent article is the following:

1. Cancel MESS (Modified Exponential Subjective Scoring): I am happy to report that this has been implemented with the ETC hard fork, Spiral, which was activated in the mainnet on February 5th of 2024!

2. Move Core Geth to the Ethereum Classic community GitHub repository: This would restore sovereignty of the community on the node client software.

3. Solve backward compatibility with the account and EVM versioning system: This would solve the risk of smart contracts breaking each time there is a hard fork.

4. Develop a tool to easily audit the real supply of ETC: This would bring certainty to the correct supply number of ETC.

5. Set the block size to 8 million gas: This would help to control bloat and take away from miners the ability to change the block size, as happened recently.

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org
