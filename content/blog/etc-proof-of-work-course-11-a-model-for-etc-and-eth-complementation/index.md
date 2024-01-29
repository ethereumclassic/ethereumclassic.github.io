---
title: "ETC Proof of Work Course: 11. A Model for ETC and ETH Complementation"
date: 2024-01-25
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["announcement"]
linkImage: ./banner.png
---

---
**You can listen to or watch this video here:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/9pE8Q4bNqiM?si=iv6mDof1OXz5Wvxj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

In the previous class, 10, we talked about the permissionless paradox in proof of work (POW) blockchains.

The permissionless paradox says that, to guarantee permissionlessness in a POW blockchain, the community that most influences it must not be permissionless.

This concept is related to this class, 11, because proof of stake (POS) blockchains are not permissionless, either at the blockchain or the community levels.

However, this could be solved if Ethereum (ETH) used Ethereum Classic (ETC) as a way to add permissionlessness back into its system. This, in turn, would benefit ETC because it would gain Ethereum’s scalability.

We will explain the rationale for this concept in this post.

## What Does “Complementation” Between ETC and ETH Mean?

As explained in the introduction, the complementation between Ethereum and ETC would be that both would gain if they were to integrate their systems further.

Today, both ETH and ETC follow the same technological standard which is called the “EVM standard” that is the “Ethereum Virtual Machine” paradigm that [brought](https://etherplan.com/ethereum-white-paper.pdf) smart contracts to the blockchain industry.

However, ETH and ETC differ in that their consensus mechanisms are powered by different methods. 

ETH uses proof of stake, a method that is [centralized](https://ethereumclassic.org/blog/2023-12-27-ethereum-classic-at-scale-is-decentralized-ethereum-is-centralized) and does not have a fork choice, and ETC uses proof of work, the only method that guarantees decentralization and has a fork choice.

On the other hand, proof of stake may be more scalable than proof of work. This means that if ETH and ETC were to integrate up to a certain point, then ETH would gain the security of ETC, and ETC would gain the scalability of ETH.

## ETH Is Insecure, Convoluted, and Prone to Centralization

Ethereum was a system nearly identical to ETC before it migrated to proof of stake. However, because POS is centralized, ETH has become an insecure, convoluted system, prone to centralization.

There are times in which ETH [is censored](https://ethereumclassic.org/blog/2023-02-22-ethereum-classic-is-censorship-resistant-ethereum-is-not) in up to 70% of its transactions. Other problems it has are that big staking pools may control more than 33% of validators, which surpasses the security threshold of the system.

In addition to these centralization tendencies, ETH staking has early no friction, therefore it has very efficient economies of scale, which inevitably leads to large staking interests and the large [staking elites](https://ethereumclassic.org/blog/2023-11-08-proof-of-stake-is-broken-because-of-its-incentives) getting richer and the rest of the economy getting poorer.

## ETH Has No Fork Choice on a Global Scale

Other than general centralization, proof of stake’s weakness is that it has no fork choice. A fork choice is a way for all nodes and validators to know on which chain to work in case there is a split or fork. 

Proof of work is very clear as to the choice nodes must make in case there is a split or fork, all must follow the chain with the most work done, which is very easy to calculate and verify. 

Proof of stake does not have this, therefore it is necessary to depend on trusted third parties to know on which chain everyone else is working!

In a way, Ethereum is prone to centralization, very much because of this lack of fork choice. When there is fork choice, nodes can join and leave whenever they want without checking with anyone else. In other words, it is permissionless. 

Ethereum is permissioned because it is always necessary to verify with trusted authorities where the correct chain is.

Ethereum needs to gain a fork choice before a black swan event occurs, which would be catastrophic.

## ETH Can Keep Its Execution Layer

![](./1.png)

Ethereum is convoluted because it is divided in two layers, the execution layer (EL) and the consensus layer (CL). This combined system is riddled with [complexity](https://www.lynalden.com/proof-of-stake/).

However, in a potential integration with ETC, Ethereum could keep its execution layer, but use ETC as its consensus layer. 

ETC could be ETH’s consensus layer by receiving ETH block templates from the Ethereum network and hashing them. After hashing them, they could return them to the Ethereum network of nodes for verification so that all computers in that system could know which is the correct block in each round.

With this same system, all nodes in ETH could also know which would be the correct chain in case of splits or forks.

## ETH Can Keep Both Its Execution and Consensus Layers

In another model, Ethereum could keep both its EL and CL layers but use ETC for stamping its state in specific intervals.

For example, ETC could serve as a checkpointing system every 100 or 1000 blocks (every 20 or 200 minutes) to prevent stakers from reversing and tampering with the chain beyond those limitations.

The way it would work would be that Ethereum could keep producing blocks as it does today, but it would send its whole state to ETC every 100 or 1000 blocks to record it in that POW blockchain.

If for any reason the ETH chain were to split or be reversed by attackers, then nodes could go to the ETC chain, check the last checkpoint and continue from there instead of trying to find what is the correct chain by bickering at the social layer.

## The Inexorability of POW As the Base Layer

Both models of complementation proposed above would make Ethereum gain the key advantage of POW; which is to have a clear way of knowing what is the correct chain for all machines globally to be able to join and leave whenever they wish without any central control; and would provide a fork choice in case of partitions or attacks.

As the world realizes POS is a mirage, this kind of anchoring is inexorable in the whole segment, unless they wish to definitely kill Ethereum and the other POS systems. 

But, with so much competition and market cap at stake, it is very likely that when one does the move, the rest will follow.

In the process, POW blockchains such as ETC will gain in scalability as proof of stake networks settle their transactions using their highly secure consensus systems.

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org
