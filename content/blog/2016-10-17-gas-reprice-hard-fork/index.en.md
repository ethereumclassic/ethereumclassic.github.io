---
title: Gas Reprice Hard Fork on ETC block 2,500,000 (October 25)
date: 2016-10-17
author: Arvicco
---

![Gas Reprice Hard fork imminent](./hardfork_etc.png)

During the last week, both Ethereum and Ethereum Classic were hit by a series of attacks that took advantage of inadequately low gas cost for certain computational operations. The effect of this attack was effectively making both networks hardly usable: blockchain sync becoming extremely slow and halting unpredictably, valid transactions taking extremely long time to make it into a block, and full nodes (both parity and geth) crashing due to difficulties processing spam transactions bloat.

It turns out that the client code fixes can do only so much to protect the network from this type of attacks. In order to close the attack vector completely, a non-backwards-compatible change is needed that reprices some operations to better reflect their impact on the nodes and the network. Which can be done only through a hard fork.

From the very beginning of Ethereum Classic project, we made it clear that hard forks are only acceptable in order to correct protocol-level bugs, fix security vulnerabilities, and provide functionality upgrades, not to bail out failed contracts and special interests. The gas reprice hard fork provides an important security fix and does not violate any principles that the Ethereum Classic community rallied around.

The technical details of the hard fork are expressed in [ECIP-1050](https://github.com/ethereumproject/ECIPs/issues/17) ([EIP-150 for Ethereum](https://github.com/ethereum/EIPs/issues/150)), and the fork code is currently being implemented and tested by ETC dev team.

It is important to note that ETH team chose another timeframe for hard fork implementation, to be effective on ETH block 2463000. Unfortunately, geth 1.4.18 released by Ethereum Foundation developers **does not** properly take --oppose-dao flag into consideration when implementing hard fork changes on block 2463000. Therefore, it becomes impossible to use this geth release as Ethereum Classic client.

**All ETC full node users and miners are advised to upgrade to either [Classic version of geth](https://github.com/ethereumproject/go-ethereum/releases) or [Parity](https://github.com/ethcore/parity/releases/) full node (which implements ETC hard fork properly) as soon as possible.**

Users of the light ETC wallets (such as [Jaxx](https://jaxx.io/)), [web wallet](http://classicetherwallet.com/) or [Chrome extension](https://chrome.google.com/webstore/detail/classicetherwallet-cx/opggclcfcbfbchcienjdaohghcamjfhf) should not be affected. Your ETC located in the exchange accounts also should be safe through a hard fork transition. Mist or EthereumWallet users should use Parity or Classic geth as a backend, as explained [here](https://www.youtube.com/watch?v=peAnJ3rRn04).

![Gas Reprice Hard fork imminent](./logo_etc8.jpg)

### UPDATE: ETC community successfully implemented GasReprice hard fork

Block 2,500,000 passed without any issues, and ETC GasReprice hard fork is now effective. There was no netsplit, and ETC nethash did not change in any significant way, as can be seen on ETCstats network monitor.

We appreciate continued support of ETC exchanges, wallets and mining pools who upgraded their infrastructure in a timely manner and contributed to a smooth transition through the hard fork event.

First Ethereum Classic hard fork is a significant milestone for ETC community. Congratulations to classic geth and parity developers on the successful implementation and testing of the hard fork code! Many community members distributed information about the fork, helped ETC users to upgrade or troubleshooted various infrastructure issues. Without your active involvement, such a smooth transition would not be possible. **Thank you!**

Follow Ethereum Classic Twitter and Reddit for more updates:

* https://twitter.com/eth_classic
* https://www.reddit.com/r/EthereumClassic
