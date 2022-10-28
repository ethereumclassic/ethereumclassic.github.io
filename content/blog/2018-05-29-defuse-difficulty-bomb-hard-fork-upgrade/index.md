---
title: "Defuse Difficulty Bomb Hard Fork Upgrade"
date: 2018-05-29
author: Igor Artamonov
contributor: ["splix"]
tags: ["announcement", "development", "education", "teams", "hardfork"]
---

# ECIP 1041 - Remove Difficulty Bomb

[https://ecips.ethereumclassic.org/ECIPs/ecip-1041](https://ecips.ethereumclassic.org/ECIPs/ecip-1041)

![Defuse Difficulty Bomb Hard Fork Upgrade](./hardfork_difficulty_bomb.jpg)

## Abstract

This ECIP proposes removing Difficulty Bomb from Ethereum Classic Mainnet at block 5,900,000

## Motivation

As Ethereum Classic Mainnet is not planed to migrate to PoS in near future there is no reason to have it and the Difficulty Bomb should be removed to avoid collapse of the network.

## Specification

Difficulty Bomb is an artificial increase of mining difficulty of Ethereum blockchain which was introduced to Ethereum protocol as a motivation for developers to migrate to Proof of Stake consensus algorithm. It was introduced in Ethereum Homestead by EIP-2.

With that additional element, Minimum Mining Difficulty grows exponentially every 100,000 blocks by factor of 2. It was paused by ECIP-1010 from block 3,000,000 to block 5,000,000. With continued growth at the block 6,500,000, which is scheduled for September 2018, the mining of ETC chain will become unprofitable. There is a small chance that miners will quit mining ETC because of mining difficulty growth before that block.

Removing that part of the formula is a trivial change, but because it’s a part of consensus rules it produces a Hardfork. To make it successfull it requires modifications to all of existing ETC peer implementations and providing time to upgrade for miners, exchanges and other critical parts of ETC ecosystem.

It seems reasonable to allocate up to 6 weeks to update and release all critical software and up to 6 weeks to upgrade for miners and exchanges. Which gives up to 3 months for enabling this proposal. With that requirements the earliest safe block to enable new hardfork would be 5,700,000 which is expected at April 2018

Growing Difficulty Bomb above 20% of standard difficulty is dangerous, also for additional security we should consider scenario when half of the current miners left the network. With current difficulty at about 7,000 Gh/s it shouldn’t grow above 700 Gh. Under that requirements the latest safe block to enable new hardfork would be 6,100,000 with 550Gh of extra difficulty, which fits our requirements. Block 6,100,000 is expected at June 2018.

Hardfork boundaries:

* Earliest block is 5,700,000 at April 2018
* Latest block is 6,100,000 at June 2018

It’s proposed here to use block 5,900,000 which is in the middle between these boundaries.

Block 5,900,000 expected at May 2018 and will require 137Gh of additional difficulty. It’s an optimal block under current circumstances.

## Implementation

```
if (block.number >= diffuse_block) {
    extra_difficulty = 0
} else {
    explosion = PREVIOUS_FORMULA
    extra_difficulty = int(2**explosion)
}

block_diff = parent_diff
      + parent_diff / 2048 * max(1 - (block_timestamp - parent_timestamp) / 10, -99)
      + extra_difficulty
```

For most of peer implementations it’s a trivial modification and can be done through configuration without changing actual code.

## References

* [ECIP-1010 Delay Difficulty Bomb Explosion](https://ecips.ethereumclassic.org/ECIPs/eip-1010)
* [EIP-2 Homestead Hard-fork Changes](https://eips.ethereum.org/EIPS/eip-2)
