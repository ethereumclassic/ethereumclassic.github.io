---
title: "Ethereum Classic Is Censorship Resistant, Ethereum Is Not"
date: 2023-02-22
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["Opinion"]
linkImage: ./etc-is-eth-is-not.png
---

---
**You can listen to or watch this video here:**

[video]

---

Bitcoin (BTC) was launched in January of 2009 and has been working uncensored ever since.

Ethereum Classic (ETC) has been working since July of 2015 and it has never been censored to this day. 

When Ethereum (ETH) migrated to proof of stake (PoS) in September of 2022, it was [censored](https://www.mevwatch.info/) [immediately](https://twitter.com/koeppelmann/status/1580893089077809153).

Why is this?

![ETC is censorship resistant, ETH is not.](./etc-is-eth-is-not.png)

The reason is that Ethereum Classic uses proof of work (PoW) based Nakamoto Consensus and Ethereum uses proof of stake as its consensus mechanism.

To be fair, if all block producers (miners or stakers/validators) in any of these systems were to be captured by governments or agreed on a censorship strategy, then both proof of work and proof of stake consensus systems would be censored.

But, what makes ETC's proof of work more resistant to these problems?

The answer is a series of features that differentiate PoW from PoS. In essence, it is much easier to group and capture stakers in a proof of stake system than miners in a proof of work system.

To begin with, the economics of proof of stake consensus in Ethereum have made it practically impossible for small stakers to produce and validate blocks independently. To run your own validator node, you need to deposit 32 ETH in an account (more than $52,000 at the time of this writing) and install complex infrastructure that requires [two](https://ethereum.org/en/developers/docs/nodes-and-clients/) Ethereum nodes: an execution layer (EL) client and a consensus layer (CL) client. 

In addition to this, proof of stake in Ethereum imposes [penalties](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/) for as trivial things as being offline to more serious offenses as proposing invalid blocks. This makes it a financially dangerous endeavor to run nodes, risking your capital if you don't have a large and professional operation managing a sophisticated data center that is available and correct all the time.

For the above reasons, Ethereum block production and validation is largely performed through staking pools. 

This by itself wouldn't be such a bad problem. After all, ETC mining is also largely channeled through mining pools. The problem is that, because of proof of stake's design, pools are organized in ways that foster much more centralization and capture than in proof of work networks.

In proof of stake pools, the staking capital is actually separated from the validators, also called node operators (NOs). 

This means that there may be hundreds of thousands of individuals who stake their ETH in small amounts through pools, but they don't actually run any machine or software to validate or produce blocks. They just receive stake tokens representing the ETH that they deposited. Aside from that, they delegate 100% of the responsibility and operation to the staking pools.

Then, the staking pools usually do one of two things, they either run their own node operation in professional data centers, or they hire in the open market a set of controlled node operators.

These two models are well represented by centralized crypto exchanges, such as Coinbase, Kraken, and Binance; who take staking deposits from their clients and then run their own validator nodes; and Liquid Staking Derivatives (LSD) pools, such as Lido and RocketPool; who take deposits from their users through smart contracts on Ethereum and then hire a set of NOs who run the machines with the EL and CL clients and receive the staking deposits from the pools, sharing the earnings.

*Note: Kraken has actually closed its staking services due to regulatory [controls and capture]() as we write this post, confirming our hypothesis in real time! Further down we comment on the effects of these events.*

In both cases (the centralized crypto exchanges and the LSD pools) there is already some sort of filtering and censorship just to participate.

In the case of the centralized crypto exchanges, they filter who may stake or not by using the traditional know your customer (KYC) and anti-money laundering (AML) rules from the countries where they operate. In other words, staking through these services is not permissionless nor censorship resistant. Stakers need to actually show them their passports and prove they are a good citizens to be able to stake through them.

In the case of the LSD pools, they don't filter who may stake, as that is done through smart contracts on Ethereum, so anyone may make a deposit, but they filter and censor who can run validator nodes and be their NOs. 

This is done through a selection process through a "[sub-governance group](https://operatorportal.lido.fi/apply-to-be-a-lido-node-operator)" and then by voting the final candidates through a DAO, in the case of Lido, or through an algorithm, where they constantly filter who are the most profitable NOs to allocate the staked ETH and reject all the others, in the case of RocketPool.

The fact that regulated and centralized exchanges [have a large share](https://beaconcha.in/pools) of pooled stake deposits is already a source of capture and censorship in Ethereum's proof of stake consensus system, but that the pools that are supposed to be "decentralized" actually control who may me the NOs is an additional source of [centralization](https://notes.ethereum.org/@djrtwo/risks-of-lsd) and thus of eventual censorship and cartelization as expressed even by the [Ethereum Foundation](https://notes.ethereum.org/@djrtwo/risks-of-lsd).

Once we understand the huge flaw that is the risk of centralization described above in proof of stake networks, then we can list a host of additional centralization vectors and drivers that are already causing the current high rate of block censorship in Ethereum, and will likely bring all sorts of additional capture problems in the future that will never be present in proof of work blockchains as ETC.

**Staking pools and node operators/validators are static and easy to find:** Staking in Ethereum PoS requires a static accounts on the network, therefore it is easy to track and find NOs and to which pools they work for. If to this we add that they are dependent hired contractors by the pools, or that the pools are themselves the NOs in the case of centralized exchanges, then we can see that they are easy to capture and control by special interests and abusive government regulation. In ETC, mining is a process of deploying capital in large data centers, purchasing enormous amounts electricity, working hard to win blocks by merit, and miners and pools may use different accounts on a block by block basis. This is done all over the world as cheap electricity generation resources are naturally distributed around the globe, creating diseconomies of scale. Mining pools are consequently also distributed around the world, there has been historically and empirically a significant rotation of players in the industry, and neither mining nor mining pools have ever held dominant or controlling positions in the market.

**Staking pools take deposits that are securities:** As we mentioned above, the Securities and Exchange Commission in the United States has decided that staking deposits in exchanges are securities, therefore completely subject to government regulation. It is a matter of time until the LSDs are also included in this definition. Therefore, all staking will be subject to regulation, thus additional capture and censorship. In ETC's proof of work, mining is not done by depositing money that may be interpreted as a security, nor are mining pools or mining operations considered financial services, but just plain computing warehouses and data centers.

**Staking pools and node operators are inside the ledger:** Many idealist Ethereum insiders and developers say that they will appeal to [Social Consensus](https://ethereumclassic.org/blog/2023-01-25-ethereums-social-consensus-vs-ethereum-classics-code-is-law) if staking pools behave badly by increasing censorship and imposing restrictions to permissionlessness. This is a very difficult task to achieve because when a set of exchanges and LSD pools capture the network with their cartelized stakers and NOs they will be planted inside the blockchain itself in the form of the staking validator accounts and the smart contracts that fund those deposits. This means that the [action of last resort](https://etherplan.com/2019/05/18/proof-of-work-has-division-of-power-proof-of-stake-does-not/7619/) that proof of work blockchains have, to make a protocol change and fork away from the attackers, is impossible because the whole block producing industry is inside the ledger. In ETC's proof of work, miners import energy into the blockchain in the form of block hashes, this is done externally and they have no say and may be easily replaced if the ecosystem forks away from them with a different mining algorithm. Because of this possible action of last resort, in proof of work, miners are humbly submitted to the rest of the ecosystem, not the other way around.

**Staking pools will all be regulated financial institutions:** As seen with the growth and market share of centralized exchanges in the staking pool business, and now that the SEC has defined such business as a security, we can now more clearly observe that financial institutions are going to be the main stakers, node operators, and pool operators in Ethereum proof of stake. There will be no other kind of business or institution that will be allowed to manage staking pools and validation operations. It will be very difficult for Lido, RocketPool, and the other "decentralized" pools to not be either forced to shut down, taken over by regulated financial institutions, or just lose market share because of the strong competition in capital and distribution. This will turn Ethereum, and any proof of stake system for that matter, into a hyper-regulated traditional financial system. 

**Staking pools suffer unrestricted economies of scale:** Just as the banking system, the staking industry will be dominated by 3 or 4 cartelized entities. This is because capital inside Ethereum may flow with no local or real world restrictions. These economies of scale will favor a few large centralized pools, managed by financial institutions, who will be able to negotiate lower fees with NOs, always have more capital for marketing and distribution, and present the best solvency guarantees to their stake depositors, all this reinforcing their cartelization. This makes it much easier than in proof of work to concentrate capital and thus control of the network. Once pools achieve large scales, they will be even more capturable in any jurisdiction. As mentioned before, to the contrary, proof of work has diseconomies of scale because it will always have local political constraints for the size of its physical operations and energy use, cheap electricity generation is naturally distributed around the globe, pools actually do not control block production, eand the industry has been constantly rotating its players since 2009.

**Staking pools and validators must be online all the time:** The fact that the design of proof of stake has many restrictions that ETC's proof of work does not, such as locked deposits, liveness penalties, and slashing, makes it very difficult to exit the system to relocate or hide in case of legal changes or geopolitical problems. When China suddenly prohibited Bitcoin mining in 2021, the majority of the hashrate moved to new locations, such as Kazakstan, Paraguay, and Canada, in a matter of weeks. Not only that, but currently, even with the sanctions still in place, China has re-emerged as a leading BTC hashrate player with nearly 20% share, proving that miners can fly under the radar. This is the case with ETC as well. But, once proof of stake validator infrastructure is in place, it is very difficult and costly to exit, move, hide, and re-enter the network whenever needed. This locks down pools and validators forcing them to comply with whatever jurisdictions they are dealing with.

**In proof of stake, there is no alternative to centralized and captured pools:** Once the staking pool industry is centralized, there is no recourse by Ethereum users to enter transactions that could eventually be processed by some staker outside of the dominating cartels. For the reasons sated above, the pooling cartel in proof of stake will necessarily have nearly 100% control of the system. In ETC's proof of work, because entry and exit is truly permissionless, there are no penalties, and the mining base may be anywhere in the world, then there will always be a set of miners with sufficient share that will gladly earn the fees for transactions that may not be processed by cartelized and censoring pools. Indeed, these pools and miners will actually always have a significant market share because they will consistently earn more than the censored ones, enabling them to invest in ever growing infrastructure and electricity, thus outcompeting their captured peers. In proof of stake, special interest capture is a benefit, in proof of work it is a serious disadvantage.

**Proof of stake does not have the decentralization guarantees that proof of work has:** Proof of work guarantees that miners and mining pools may change all the time, migrate from place to place, and exit and enter the network whenever they please because it has the two guarantees that proof of stake does not have: It enables consensus without having to check with anyone in the world except by just verifying the proof of work in the latest block, and it enables free entry and exit without having to check with anyone in the world except by just checking the most work done on the network. Proof of stake is a system where stakers, pools, and validators are locked in their places and easy to capture and censor due it its design restrictions as described above, and it doesn't provide the permissionless chain selection focal point that proof of work does. This shows how different both systems are and that proof of work was the real invention of the blockchain industry. Proof of stake is just the traditional centralized banking system but reframed to make it look decentralized.

Nick Szabo's essay "[Trusted Third Parties are Security Holes](https://nakamotoinstitute.org/trusted-third-parties/)" explained why trusted third parties were hazards that increased the risk to networks and computing systems. This created incentives so that people like [Satoshi Nakamoto](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) and [Hal Finney](https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)) could build decentralized peer-to-peer systems, and POW has been the best invention to solve this problem.

However, the reverse incentives will likely occur with Ethereum's proof of stake: As they continue building the system by adding fixes and patches to close the myriad of security holes that it has, they will end up with a set of centralized validators, just like banking, and the only difference will be that the database will be completely replicated among these validators. 

Then, when these cartelized pools and node operators realize that they may trust each other because they know each other, have the same special interests, and are all buddies in the same state sponsored regulatory framework, then one day they will say to themselves "why do we replicate the data in public nodes, locking so much capital in staking, if we can reduce costs and be more efficient just by using our own data centers and cloud services?". 

Then, the world will realize that proof of stake was just a slow, tedious, and complexity-obfuscated way of re-building a new centralized banking system, bit by bit, without anyone noticing.

Thus, in the end, their glorified "[cryptoeconomic](https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51)" pseudoscience will drive the system to total centralization.

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org

