---
title: "From Block Rewards to Balance Sheets: The Market Infrastructure Behind Ethereum Classic"
date: 2025-12-19
description: "Explaining how Stratum distributes work and rewards in mining pools, how payout algorithms like PPLNS work, and why liquidity providers are essential bridges between miners and consumers — tied together with an analogy to BASE fee smoothing."
author: "Cody Burns"
linkImage: ./energy_market.png
tags: ["mining", "pools", "stratum", "liquidity", "ETC"]
---
![](./energy_market.png)

# From Block Rewards to Balance Sheets: The Market Infrastructure Behind Ethereum Classic

## Introduction

Ethereum Classic (ETC) is a **proof-of-work smart contract platform** with a global mining ecosystem built on decentralization, economic neutrality, and long-term operational resilience. As issuance events unfold probabilistically, miners, pools, and markets rely on **coordination layers** that reduce variance while preserving permissionless participation.

This article explores:

- How **mining pools** use the Stratum protocol and payout algorithms like PPLNS  
- How **liquidity providers** bridge miners and institutional consumers  
- Why these mechanisms provide useful intuition for **fee-smoothing proposals such as ECIP-1115 & 1120**, including the optional use of a protocol treasury  

---

## Why Mining Pools Exist

Solo mining exposes participants to extreme variance. Even large miners may experience long dry spells, while smaller operators can struggle to remain viable.

Mining pools emerged as a pragmatic response:

- Aggregate hashpower
- Distribute work continuously
- Measure contribution probabilistically
- Convert random block discovery into **predictable income streams**

Importantly, pools do **not** alter consensus rules. They are an economic coordination layer operating *on top of* proof-of-work.

---

## Stratum: The Coordination Protocol of Mining Pools

Every node on Ethereum Classic is capable of building and validating blocks internally or they can share block templates through the rpc protocol.  The `get_work` end point returns the hash of the current block, the seedHash, and the boundary condition to be met ('target'). This is all a miner *needs* from the node to do the work required in ETChash. The miner will return the solution after it is discovered. Multiple miners can receive work from the same node and work in parallel to be more efficient. 

Modern mining pools rely on the [**Stratum protocol**](https://github.com/AndreaLanfranchi/EthereumStratum-2.0.0/blob/master/README.md) to distribute work and collect results efficiently.

Stratum enables pools to:

1. **Distribute block templates**  
   Pools assemble candidate blocks and assign work to miners.

2. **Assign per-miner difficulty targets**  
   Share difficulty scales with miner hashpower.

3. **Collect shares**  
   Miners submit partial proofs of work that statistically represent contributed effort.

A **share** is not a valid block, but over time, shares accurately reflect each miner’s proportional contribution to pool hashpower. This statistical foundation allows pools to operate at global scale.

---

## From Shares to Payouts

Once shares are collected and blocks are found, pools must determine **how rewards are distributed**. This is where payout algorithms matter.

### A Miners Fair "Share"

Mining pools require strategic payout systems to incentivize miner loyalty and maintain a stable, predictable hashrate, which secures the network and ensures a consistent block discovery rate. Several[payout strategies](https://en.bitcoin.it/wiki/Comparison_of_mining_pools) have evolved to balance pool stability with individual miner autonomy.

**PPLNS** is one of the most widely adopted payout models in Ethereum Classic mining.

Under PPLNS:

- A block reward is distributed among the **last N submitted shares**
- Only recent work is rewarded
- Long-term participation is incentivized
- Pool-hopping strategies are discouraged

Rather than eliminating randomness, PPLNS **averages randomness over time and participants**.

## Ethereum Classic Mining Pools in Practice

Ethereum Classic is supported by a diverse and mature mining-pool ecosystem. A full list is maintained on the official  
ethereumclassic.org [mining pools](https://ethereumclassic.org/mining/pools/) page.

Notable ETC-supporting pools include:

- **AntPool** – Operated by **Bitmain**, AntPool has been a **consistent and visible supporter of Ethereum Classic**, contributing hashpower, stability, and long-term alignment with PoW ecosystems.  
  https://www.antpool.com/

- **F2Pool** – One of the **largest mining pools globally**, supporting ETC with professional infrastructure and long-standing operational reliability. F2Pool’s participation brings deep hashpower and international miner participation to the Ethereum Classic network.  
  https://www.f2pool.com/

- **2Miners ETC Pool** – A popular community pool using PPLNS payout mechanics.  
  https://etc.2miners.com/

- **Hiveon ETC Pool** – Offers PPS-style payouts with global Stratum endpoints.  
  https://hiveon.net/etc

- **WoolyPooly ETC** – Provides modified PPLNS variants with competitive fees.  
  https://woolypooly.com/en/coin/etc

The presence of **both community-run pools and globally scaled operators** reflects ETC’s position as the leading proof-of-work smart-contract network.

## Pool Fees as Infrastructure Funding

Mining pools typically charge a **small fee** (often 0.5–2%) deducted after payouts are smoothed.

These fees fund:

- Stratum infrastructure
- DDoS protection
- Software development
- Monitoring and support
- Operational risk management

Crucially, fees are **transparent and competitive**. Miners choose pools based on trust, performance, and payout consistency.

---

## Liquidity Providers: Bridging Production and Consumption

Mining pools coordinate **production**.  
Liquidity providers coordinate **distribution**.

Miners earn ETC, but must convert that issuance into usable capital. Liquidity providers make this possible by offering continuous bid-ask depth and absorbing volume.

---

## Liquidity in the Institutional and Custodial Landscape

In modern markets, liquidity rarely flows directly from miner to end user. Instead, the flow typically follows this path:

1. **Mining Pool** – Smooths block reward variance  
2. **Custodial Infrastructure** – Secures assets with institutional controls  
3. **Liquidity Provider** – Absorbs volume and prices risk  
4. **Consumers** – Exchanges, funds, payment processors, enterprises  

Major centralized exchanges such as [**Binance**](https://www.binance.com/en/trade/ETC_USDC?type=spot), [**Coinbase**](https://www.coinbase.com/price/ethereum-classic), [**MEXC**](https://www.mexc.com/futures/ETC_USDT), and [others](https://ethereumclassic.org/services/exchanges) provide ETC liquidity at institutional scale, while on-chain venues such as [**ETCswap**](https://etcswap.org/) and [HebeSwap](https://hebeswap.com/) enable decentralized liquidity participation.

Liquidity providers play a role analogous to **primary dealers in traditional finance**: they ensure issuance can be absorbed without destabilizing markets.

---

## Smoothing Appears at Every Layer

The same economic principle appears repeatedly:

| Layer | Smoothing Mechanism |
|-----|-------------------|
| Mining | Pools & PPLNS |
| Markets | Liquidity provision |
| Protocol | Fee smoothing |

Each layer reduces variance without altering the underlying rules.

---

## Treasury as a Coordination Analogue

In Olympia discussions, treasury allocation is best understood not as extraction, it’s **infrastructure funding**, analogous to:

- Pool fees funding mining infrastructure
- Liquidity spreads funding market depth
- Custody fees funding security and compliance

Each exists because **uncoordinated systems do not scale sustainably**.

---

## Conclusion

Ethereum Classic’s ecosystem demonstrates that proof-of-work systems scale not by eliminating intermediaries, it does this by **making coordination optional, transparent, and competitive**.

Mining pools coordinate hashpower.  
Liquidity providers coordinate markets.  

Together, they allow ETC to operate securely and efficiently at institutional scale — and they provide useful intuition for protocol-level mechanisms like ECIP-1120.

These patterns are not theoretical. They are already operating, every day, across the Ethereum Classic network.
