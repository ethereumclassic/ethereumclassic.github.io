---
title: "Your Exchange Needs More Confirmations: The BitConf Measure"
date: 2023-09-19
author: Anonymous
contributors: ["Anonymous"]
tags: ["education"]
linkImage: ./banner.png
---

The following article was originally published on December 17 2018 by an author who wishes to remain anonymous.

---

In cryptocurrency we regularly advise against accepting zero-conf transactions but are entirely happy to accept weakly-conf’d transactions for convenience. And we need to stop. Cryptocurrencies naturally settle to over time, but how fast they settle varies. We need to stop making unreasonable demands of confirmation time.

> $81,000 of security, and $3,000 of security are not equivalent. Whatever the threshold is, it should be normalized so that all networks have the same security when it comes to deposits and accepting payments.

How blocks see themselves vs. how they actually are.

Your typical Cryptocurrency exchange requires a different number of confirmations/blocks depending on which Cryptocurrency you’re using. For example, Bitcoin is typically 2, Litecoin is 6, Ethereum is 36, and Ethereum Classic is 72.

Okay, great, there are different amounts of blocks needed for each network to sufficiently deter attacks that result in reversed transactions. Except these numbers are not at all equivalent. 6 Litecoin blocks are much cheaper to mine than 1 Bitcoin block.

A Bitcoin block is ~$40,500; we’ll call this 1 BitConf, the equivalent PoW security of mining a single Bitcoin block. So 2 BitConfs is $81,000 of security.

A Litecoin block is ~$500, or 0.01234 BitConfs. 6 Litecoin blocks are $3,000 of security.

It’s 27x cheaper to 51% attack Litecoin than Bitcoin on any exchange that waits 6 blocks for a Litecoin and 2 for Bitcoin. For your exchange to have the same security on Litecoin as Bitcoin you need to wait 162 blocks, or 6.75 hours for confirmation. This is the security of the Litecoin network.

For Ethereum, each block costs $252 and you need 321 of them (or 1.2 hours) for the same confirmation strength as Bitcoin. Ethereum Classic is $14 per block and needs 5,785 blocks or about 1 day to reach 2 BitConfs.

Maybe an exchange doesn’t need to wait 2 BitConfs, maybe a fraction of a BitConf is enough. Maybe it varies based on how much they’re depositing, a sane attacker is not going to spend $10,000 to double spend $1,000 on your exchange. But $81,000 of security, and $3,000 of security are not equivalent. Whatever the threshold is, it should be normalized so that all networks have the same security when it comes to deposits and accepting payments.

P.S. It’s also viable to credit deposits instantly & wait confirmations for withdrawals. Some exchanges already do this with cash deposits, start doing it with all deposits.

*Thanks to  Rocco.*

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org
