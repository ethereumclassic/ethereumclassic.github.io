---
title: "How Do Miners Change the Gas Limit in Ethereum Classic?"
date: 2023-12-20
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["education"]
linkImage: ./banner.png
---

---
**You can listen to or watch this video here:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/0iBaEfb54mA?si=Pj6C_nuWylVCg0e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

![](./1.png)

On November 7th of 2023 Ethereum Classic (ETC) developer and community member Garalo reported on the [ETC Discord server](https://ethereumclassic.org/discord) that he was having trouble attempting to launch smart contracts. He also reported that other developers had the same problem. 

At that time, ETC core developer Chris Ziogas responded to the concern and started to work on finding and solving the problem. 

![](./2.png)

Around 9 hours later, ETC core developer Diego López León reported that the problem was that the gas limit per block in the Ethereum Classic network had been reduced by miners from the usual 8 million gas at which it was running to 1 million gas per block.

The gas limit establishes a maximum number of gas that may be used in a block, thus the size of the block itself, therefore the number of transactions and smart contracts that may fit.

![](./3.png)

The solution was to contact mining pools and miners to request them to raise the gas limit again to the 8 million level. 

F2pool, the largest mining pool in the ETC blockchain, [responded](https://twitter.com/f2pool_official/status/1722142321377206441) within several hours that the change back to 8 million gas per block had been implemented.

![](./4.png)

By the next day, the gas limit had returned back to the 8 million mark as reported by ETC core developer Isaac Ardis.

![](./5.png)

Later that day, developer and community member Garalo reported that his problem had been resolved and he could send smart contracts to ETC again.

![](./6.png)

As we write this post, we can [see](https://etc.blockscout.com/stats) that the gas limit in ETC has been on its normal average of 8 million per block ever since. 

The abnormal gas limit fluctuation lasted from October 19th to November 8th of 2023.

It is not known which miners or for what reason the gas limit was lowered in this incident, but it is possible it was just a parameter settings mistake. Others believe that it may have been an attempt by miners to increase fee revenues by restricting block space.

## Why and How do Miners Change the Gas Limit?

![](./7.png)

The way power is balanced in proof of work blockchains is that core developers propose the design of the protocol, miners produce blocks, and node operators verify the blocks. 

If developers propose crazy rules for the system, miners and node operators may reject them or split, if miners propose dishonest blocks, node operators may reject them, and if node operators start to run software clients with new rules that have not been agreed by consensus, then developers and miners may rebuke them.

Taking into account this balancing act, when the Ethereum network was being created in 2014 and 2015, the original designers thought that the setting of the block size should be left to the miners in the free market. That miners should be able to raise or reduce the gas limit as they saw fit to adapt the conditions of the network to transaction volumes. 

By doing this, the reasoning went, developers would not have so much power and there would be a better balance amongst the different players of the system.

Because Ethereum Classic is the original Ethereum blockchain, and it remains with the proof of work consensus mechanism, it inherited this feature.

The way miners, can increase or decrease the gas limit per block is by adjusting a simple parameter on a per block basis.

Each block in ETC contains the gas limit that the miner who built it used. In ETC the average historical gas limit reported per block has been around 8 million gas.

If miners want to increase or decrease the gas limit, to increase or decrease the block size, to respond to increases or decreases in transaction volumes, they can increase or decrease the gas limit reported on a per block basis.

However, they can only propose increments of 1/1024th over the previous block gas limit. 

For example, if the previous block mined had a gas limit of 8,000,000 established by the previous miner, then the next block’s gas limit can’t be more than 8,007,812 gas (7,812 is a 1024th of 8,000,000).

This means that the gas limit can only increase at these small increments, which may be called the block gas limit change rate, which is 0.0976% per block (1/1024 x 100).

It also means that several thousand blocks should be built on ETC for significant increases or decreases of block size to happen. This is why it took several hours or days for the gas limit fluctuations to occur in ETC between October and November.

As ETC blocks are created every 13 seconds on average, then it produces 6,646 blocks per day, which is a number enough to produce the recovery that was seen in the previous section.

## Should the Gas Limit be Fixed in ETC to Avoid These Situations?

When observing the experience of Bitcoin, that blockchain started in 2009 with no block limit. Implicitly, this meant that miners had the option of filling each block with more or less transactions, occupying more or less space as they pleased. 

However, to prevent spam or dishonest actors from creating large blocks to bloat the network, in 2010 Satoshi Nakamoto fixed the block size to 1 megabyte.

Satoshi Nakamoto may be considered analogous to the core developer team in a blockchain. This means that the block size limit was hard coded and established by the core developer.

As Bitcoin is the first and most successful blockchain in history, we could say, that it would be a good idea to imitate its model, therefore to eliminate the miner determined block gas limit and to fix it at an arbitrary level, for example at 8 million gas, which is the level that has been used historically by ETC.

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org
