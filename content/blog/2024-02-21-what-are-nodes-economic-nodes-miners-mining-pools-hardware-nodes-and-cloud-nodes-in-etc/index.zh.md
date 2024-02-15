---
title: "什么是ETC中的节点、经济节点、矿工、矿池、硬件节点和云节点"
date: 2024-02-21
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["education"]
linkImage: ./banner.png
---

---
**由此收听或观看本期内容:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W9y2BrwOMZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

![](./banner.png)

最近，我们撰写了一篇关于为什么[更多节点](https://ethereumclassic.org/blog/2024-01-16-why-more-nodes-makes-ethereum-classic-more-secure)使得以太坊经典（ETC）更安全的文章。

我们还写了一篇关于[节点和矿工](https://ethereumclassic.org/blog/2024-01-17-the-difference-between-nodes-and-miners-in-ethereum-classic)在ETC中的区别，指出在挖矿、质押、流动性提供者和收益获取方面存在一些额外的混淆，同时澄清了这些概念。

最后，我们撰写了一篇帮助用户了解ETC [节点计数](https://ethereumclassic.org/blog/2024-02-20-understanding-the-ethereum-classic-node-count-on-etcnodes-org)和 [ETCNodes.org](https://etcnodes.org/)上的统计数据的文章。

但是，许多人可能会问，什么是节点？还有，网络中有哪些不同类型的参与者？

在这篇文章中，我们将介绍节点、经济节点、矿工、矿池、硬件节点和云节点。

## 以太坊经典中的节点是什么？

区块链是点对点网络，系统中的每台参与计算机都被称为一个节点。

要使一台计算机成为节点，它需要运行一个包含该特定网络协议规则集的软件应用程序。在ETC中，最受欢迎的软件客户端是[Core Geth](https://ethereumclassic.org/blog/2022-12-27-core-geth-explained)。

在以太坊经典中，不创建区块但不断接收和重新分发新交易，并对新区块执行相同操作的计算机被称为“节点”。

这些计算机重新分发交易和区块，并在其本地磁盘驱动器上保留整个区块链的副本，也称为“区块链”。

![](./1.png)

节点分布在世界各地，其基本作用是不断验证交易和区块是否正确和真实。

节点的另一个基本作用是在ETC的区块链中创建全球级的冗余，其中包含所有用户的帐户、余额和智能合约；这使得网络变得几乎不可能被关闭或攻击，因为它在如此多的地方复制。

## 什么是经济节点？

在撰写本文时，全球范围内有5,063个ETC节点。这些节点中的一个子组被称为“经济节点”。

经济节点是由生态系统中关键业务参与者运行的财务上重要的节点，它们往往处理大量财务资本和每天大量的交易。

例如，中心化交易所，如[Coinbase](https://ethereumclassic.org/blog/2023-10-04-buying-and-trading-etc-through-coinbase)、[Kraken](https://ethereumclassic.org/blog/2024-02-13-buying-and-trading-etc-through-kraken)和[Binance](https://www.binance.com/en/how-to-buy/ethereum-classic)运行它们自己的节点，以验证传入的交易、检查余额、保管客户资金，并将交易发送到系统。

这类节点运营商管理大量的交易量，保管数十亿美元的资金，在网络升级时至关重要。

其他类型的经济节点可能包括钱包操作者和区块浏览器。

## 以太坊经典中的矿工是什么？

除了ETC中可见的节点库存外，还有一部分机器，其中许多是不可见的，它们是矿工。

矿工从普通节点接收交易，将它们分组成批次，用密码哈希戳记它们（因此称为“[工作证明](https://ethereumclassic.org/blog/2023-02-23-ethereum-classic-course-10-proof-of-work-explained)”），然后将已完成的区块发送回网络供验证。

矿工对以太坊经典至关重要，因为他们的工作履行了几个角色：

1. 它在全球范围内实现共识
2. 保护总帐的历史免受篡改
3. 在分裂的情况下，使网络中的计算机重新统一

## 什么是矿池？

在ETC网络中，有许多不可见的矿机之所以如此之多，是因为其中很大一部分是通过矿池工作的。

矿池运行它们自己的ETC节点，是另一种重要的经济节点。

矿池从全球范围内的许多矿机中聚集大量的哈希率，并将自己呈现给网络，作为一个具有巨大计算能力的单一可见玩家。

这使得矿工通过集中资源，获得赢得区块的更高概率，并且他们更频繁地而不是零星地获得报酬。

矿池通过向矿工收取他们通过其获得的挖矿奖励的一部分来赚钱。

在ETC中一些重要的矿池包括[F2pool](https://ethereumclassic.org/blog/2023-09-13-mining-ethereum-classic-through-f2pool)和[2miners](https://ethereumclassic.org/blog/2023-03-14-mining-ethereum-classic-with-an-ipollo-asic-through-2miners-pool)。

## 以太坊经典中的硬件节点是什么？

在区块链行业中的一个最重要原则是尽可能让更多的人运行自己的节点。

这是因为通过运行节点，用户可以自行验证余额并直接将交易发送到区块链，而不依赖于可信第三方。

实现这一点的一种实际方法是购买所谓的“硬件节点”。

硬件节点是专用机器，运行ETC节点，通常使用Core Geth软件客户端。

个人和企业可以将这些设备安装在家中或办公室，并使用它们发送交易、验证余额，并通过验证区块并持有完整数据库的副本来支持整个区块链。

在ETC中执行此操作的两个重要品牌是[Dappnode](https://ethereumclassic.org/blog/2023-04-26-how-run-an-ethereum-classic-node-using-dappnode)和[ETCMC](https://ethereumclassic.org/blog/2023-09-05-etc-spotlight-etcmc-ethereum-classic-plug-and-play-node-part-i)。

## 什么是云节点？

由于并非每个人都遵循前一部分中解释的运行自己节点的原则，因此有些私人服务提供了所谓的RPC端点，以便用户或钱包运营商可以发送交易和检查余额。

这种设置并不是很安全，因为用户必须信任这些第三方正确管理他们的交易和信息。

然而，这些服务在以太坊经典等区块链中可能被视为关键基础设施，因此在网络升级时也发挥着重要作用。

ETC的公共RPC端点列表可以在[ETC社区网站](https://ethereumclassic.org/network/endpoints)上找到。

---

**感谢阅读本文！**

要了解有关ETC的更多信息，请访问：https://ethereumclassic.org
