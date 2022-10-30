---
title: 采矿硬件指南
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: 以太坊经典挖矿的硬件要求的简短解释，包括ETHash与ETCHash、SHA3、GPU和ASIC。
---

挖掘Ethereum Classic与挖掘Ethereum几乎相同，支持相同的硬件和挖掘软件。 如果你是最近被驱逐的以太坊矿工，Ethereum Classic喜欢它的矿工并欢迎你，你可以使用你现有的硬件开始挖ETC，只需切换到支持Ethereum Classic的 [采矿池](/mining/pools)。

## ETCHash

ETC挖矿算法与以太坊的ETHash几乎相同，只是做了一个小的升级，使其对矿工更加友好。 2020年底，在 [Thanos升级期间](/blog/2020-11-27-thanos-hard-fork-upgrade)，ETC实施了 [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099)，该算法将ETHash算法调整为后来的ETCHash。

基本上，在2020年，以太坊的DAG超过了4GB，这意味着许多拥有4GB内存的GPU将无法继续挖掘ETH。 作为回应，Ethereum Classic调整了它的算法，以确保4GB的卡能够继续挖掘ETC，直到 [大约2025年中期](https://minerstat.com/dag-size-calculator)。

## 硬件要求

有两种主要的硬件可以用来开采Ethereum Classic，并从中获利。

### GPU

一般来说，挖掘Ethereum Classic的最佳显卡是最省电的显卡，至少有4GB的内存。 在挑选GPU之前，寻找专门关于挖ETCHash的评论。 你可以在网上搜索"[当年]开采Ethereum Classic的最佳GPU "以获得建议，并访问 [WhatToMine](https://whattomine.com/coins?e4g=true) 以获得更多信息。

### 集成电路

ASIC，即特定应用集成电路，是专门制造的芯片，顾名思义，是为开采一种特定算法而设计的。 最初，由于DAG的内存密集型要求，ETHash对ASIC相当抵触，但随着时间的推移，像所有有利可图的算法一样，有很大的动力为ETHash建立ASIC，这些ASIC确实进入了市场。

一系列的ASIC矿机Ethereum Classic是可用的，可以通过在网上搜索 "ETHash ASIC Miners "找到，并检查制造商的规格是否支持ETCHash。

## 支持

如果需要ETC社区其他矿工的进一步帮助和指导，你可以在 [Discord](https://ethereumclassic.org/discord)的#mining频道中联系。
