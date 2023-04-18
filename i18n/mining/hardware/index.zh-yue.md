---
title: 挖礦硬件指南
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: 對挖掘以太坊經典硬件要求的簡短解釋，涵蓋 ETHash 與 ETCHash、SHA3、GPU 和 ASIC。
---

挖掘 Ethereum Classic 與挖掘 Ethereum 幾乎相同，並且支持相同的硬件和挖掘軟件。 如果您是最近被驅逐的以太坊礦工，以太坊經典愛它的礦工並歡迎您，您只需切換到支持以太坊經典的 [礦池](/mining/pools) 即可使用現有硬件開始開採 ETC。

## ETCH哈希

ETC 挖礦算法與以太坊的 ETHash 幾乎相同，只是進行了小幅升級，使其對礦工更加友好。 2020 年底，在 [Thanos 升級](/blog/2020-11-27-thanos-hard-fork-upgrade)期間，ETC 實施了 [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099)，它將 ETHash 算法調整為後來被稱為 ETCHash 的算法。

基本上到2020年，以太坊的DAG就超過了4GB，也就是說很多4GB顯存的GPU都無法繼續挖ETH了。 作為回應，Ethereum Classic 調整了它的算法，以確保 4 GB 的卡能夠繼續挖掘 ETC 直到 [大約在 2025 年中期](https://minerstat.com/dag-size-calculator)。

## 硬件要求

有兩種主要類型的硬件可用於從 Ethereum Classic 中獲利。

### 顯卡

通常，用於挖掘 Ethereum Classic 的最佳顯卡是具有至少 4 GB 內存的最節能的顯卡。 在選擇 GPU 之前，請查看專門關於挖掘 ETCHash 的評論。 您可以在線搜索“[當年] 用於挖掘 Ethereum Classic 的最佳 GPU”以獲得建議，並訪問 [WhatToMine](https://whattomine.com/coins?e4g=true) 了解更多信息。

### 專用集成電路

ASIC，或專用集成電路，顧名思義，是專門製造的芯片，專為挖掘一種特定算法而設計。 最初，由於 DAG 的內存密集型要求，ETHash 對 ASIC 相當抗拒，但隨著時間的推移，就像所有有利可圖的算法一樣，有很大的動力為 ETHash 構建 ASIC，這確實進入了市場。

可以通過在線搜索“ETHash ASIC Miners”找到一系列 Ethereum Classic ASIC 礦機，並查看製造商的規格是否支持 ETCHash。

## 支持

如需 ETC 社區其他礦工的進一步幫助和指導，您可以在 [Discord](https://ethereumclassic.org/discord)上的#mining 頻道聯繫。
