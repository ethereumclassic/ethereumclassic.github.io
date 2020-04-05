---
title: "Phoenix Hard Fork Upgrade"
date: 2020-06-10
author: /raw PONG _GHMoaCXLT
---

# ECIP 1088: Phoenix EVM and Protocol Upgrades

[https://ecips.ethereumclassic.org/ECIPs/ecip-1088](https://ecips.ethereumclassic.org/ECIPs/ecip-1088)

![Phoenix Hard Fork Upgrade](./pheonix_fire.gif)

## Simple Summary

Enable the outstanding Ethereum Foundation *Istanbul* network protocol upgrades on the Ethereum Classic network in a hard-fork code-named *Phoenix* to enable maximum compatibility across these networks.

## Abstract

Add support for a subset of protocol-impacting changes introduced in the Ethereum Foundation (ETH) network via the *Istanbul* hardforks. The proposed changes for Ethereum Classic’s *Phoenix* upgrade include:

* Add Blake2 compression function `F` precompile
* Reduce alt_bn128 precompile gas costs
* Add ChainID opcode
* Repricing for trie-size-dependent opcodes
* Calldata gas cost reduction
* Rebalance net-metered SSTORE gas cost with consideration of SLOAD gas cost change

This document proposes the following blocks at which to implement these changes in the Classic networks:

* `999_983` on Mordor Classic PoW-testnet (April, 2020)
* `2_200_013` on Kotti Classic PoA-testnet (April, 2020)
* `10_500_839` on Ethereum Classic PoW-mainnet (June 10th, 2020)

For more information on the opcodes and their respective EIPs and implementations, please see the *Specification* section of this document.

## Motivation

To enhance the Ethereum Virtual Machine’s (EVM) capabilities, various opcodes shall be added to the Ethereum Classic networks, all of which have been in use on the Ethereum Foundation networks since end of 2019.

## Specification

Technical specifications for each EIP can be found at those documents respectively:

* [EIP-152](https://eips.ethereum.org/EIPS/eip-152): Add Blake2 compression function `F` precompile
* [EIP-1108](https://eips.ethereum.org/EIPS/eip-1108): Reduce alt_bn128 precompile gas costs
* [EIP-1344](https://eips.ethereum.org/EIPS/eip-1344): Add ChainID opcode
* [EIP-1884](https://eips.ethereum.org/EIPS/eip-1884): Repricing for trie-size-dependent opcodes
* [EIP-2028](https://eips.ethereum.org/EIPS/eip-2028): Calldata gas cost reduction
* [EIP-2200](https://eips.ethereum.org/EIPS/eip-2200): Rebalance net-metered SSTORE gas cost with consideration of SLOAD gas cost change

## Rationale

**Interoperability**: Establishing and maintaining interoperable behavior between Ethereum clients is essential for developers and end-user adoption, yielding benefits for all participating chains (e.g., ETH and ETC, Ropsten and Mordor, Görli and Kotti).

**Immutability**: None of the introduced new opcodes in the EVM has the potential to change the behavior of existing contracts; in the case where previously an arbitrary invalid bytecode would have been deployed to the network, none of them would be able to modify the state of the Ethereum Classic networks retrospectively. Adding opcodes to the EVM increases its functionality and should be considered a feature upgrade rather than a modification.

## Implementation

Adoption of the content of this ECIP requires a hard fork as it introduces changes that are not backward compatible.

The following clients with Ethereum Classic support implement the *Istanbul* features currently and would be able to support the *Phoenix* upgrade:

* Core-Geth
* Hyperledger Besu
* Multi-Geth
* OpenEthereum

## Final Note

Both, the Geth Classic client and the Morden testnet will no longer be supported by the community and not recieve the *Phoenix* ugrades.

* Users of the Geth Classic client are urged to migrate their services to Parity Ethereum, Multi-Geth, or Hyperledger Besu. It is no longer recommended to run Geth Classic in production.
* Users of the Morden Classic testnet are urged to migrate their applications to the Kotti Classic or Morder Classic testnets.

### Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
