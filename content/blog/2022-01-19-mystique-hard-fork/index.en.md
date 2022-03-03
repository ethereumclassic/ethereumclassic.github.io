---
title: Mystique Hard Fork on ETC block 14,525,000 (~Feb 13th 2022)
date: 2022-01-19
author: EthereumClassic.technology
tags: ["announcement", "development", "teams", "hardfork", "education"]
contributors:
  - ziogaschr 
---

The Mystique hard-fork will be activated on the Ethereum Classic mainnet at block **14,525,000** which is estimated to occur on **Feb 13th, 2022**.
This is not a contentious hard-fork, just a routine protocol upgrade.

It is anticipated that all the major pools, exchanges, wallets and other
services are ready or are actively preparing for Mystique.
Outreach is ongoing, but service providers are also encouraged to
publicly signal their readiness to the public in whatever way makes
most sense for them.

Adoption across publicly visible ETC nodes can be tracked on this dashboard
by looking at the percentage of nodes for which **ForkId (Next) = Mystique**:

- [ETC Node Explorer](https://etclabscore.github.io/nodes-interface/)

At the time of writing (January 27th), there is 35% readiness. The historic
adoption pattern has seen a spike in readiness close to the activation block,
following slow and steady increases in earlier weeks.  It is not unusual for
total readiness to only hit 60-70% by the activation block.  That is not
problematic as long as the economically important nodes (primarily those run
by mining pools and exchanges) are updated in time.  If other node operators
do not upgrade then they get stranded on the old chain, but that does not
harm anybody but themselves.  When they upgrade their own nodes, they will
be back on the right chain.

## Clients supporting Mystique hard-fork?

The following client releases contain Mystique support.  All node operators are encouraged to upgrade as soon as possible.

- Core-geth [v1.12.4](https://github.com/etclabscore/core-geth/releases) or later.
- Hyperledger Besu [v21.10.8](https://github.com/hyperledger/besu/releases) or later.

If you are using a managed API service or third-party service provider, then please ensure they are ready for Mystique.  The more people who ask, the more
likely a provider is to make a public statement confirming their readiness.

## What is the Mystique hard-fork?

Mystique is a hard-fork bringing a subset of the EIPs which are part of
Ethereum's London hard-fork across into Ethereum Classic.  The hard-fork
is specified in
[ECIP-1104 (Mystique EVM and Protocol Upgrades)](https://ecips.ethereumclassic.org/ECIPs/ecip-1104).

Included:

- [EIP-3529 (Alternative refund reduction)](https://eips.ethereum.org/EIPS/eip-3529)
- [EIP-3541 (Reject new contracts starting with the 0xEF byte)](https://eips.ethereum.org/EIPS/eip-3541)

Excluded:

- [EIP-1559 (Fee market change)](https://eips.ethereum.org/EIPS/eip-1559)
- [EIP-3198 (BASEFEE opcode)](https://eips.ethereum.org/EIPS/eip-3198)
- [EIP-3554 (Difficulty bomb delay)](https://eips.ethereum.org/EIPS/eip-3554)

The fee market change and associated BASEFEE opcode are undesirable for ETC
because they conflict with the fixed monetary policy.  The difficulty bomb
delay is not applicable because ETC has already removed the difficulty bomb
entirely.

**See you on the other side!**

Announcement thanks to https://www.ethereumclassic.technology/
