---
title: Onward from the Hard Fork
date: 2016-07-26
author: Vitalik Buterin
---

<img src="./ethereum-icon-black.6b935ac0.png" alt="Ethereum Logo" width="150"/>

The foundation has committed to support the community consensus on the admittedly difficult hard fork decision. Seeing the results of various metrics, including carbonvote, dapp and ecosystem infrastructure adoption, this means that we will focus our resources and attention on the chain which is now called ETH (ie. the fork chain). That said, we recognize that the Ethereum code can be used to instantiate other blockchains with the same consensus rules, including testnets, consortium and private chains, clones and spinoffs, and have [never been opposed](https://github.com/ethereum/wiki/wiki/Consortium-Chain-Development) to such instantiations.

All users who had ETH before block 1920000 now have both ETH (the fork chain) and ETC (the community effort to continue the no-fork chain). Users are generally advised that most Ethereum client defaults, including clients developed by the Foundation and by third parties (eg. Parity), will select the ETH chain; if you are offered a choice on a fork in the Mist interface, then selecting “Yes” on this choice will direct you to this chain.

Users who are interested in taking any actions with their ETC, including creating and participating in applications, converting to another asset, etc are advised to use [the splitter contract](https://etherscan.io/address/0xaBbb6bEbFA05aA13e908EaA492Bd7a8343760477#code) at address `0xaBbb6bEbFA05aA13e908EaA492Bd7a8343760477` to move their ETC to a separate newly created account so as to avoid replay attacks; we also encourage the ETC community to consider adopting a secondary hard fork to change transaction formats to make further replay attacks impossible. Until and unless that happens, once ETH and ETC are “split” they should be managed via separate wallets.

To use the splitter contract from inside of the Ethereum Wallet, click on Contracts -> Watch Contract, copy the address and ABI from the above linked etherscan page, and click “OK”; then, click on the contract in the Contracts tab, select “Write to Contract”, and select the “Split” function. It will ask for two addresses; for the first, put the address where you want your ETH to go (feel free to put the same address you are sending from), for the second put the address where you want the ETC to go. Make sure to try this with a very small amount of ether first to verify that it works before increasing the amount. You may use the [Ethereum Classic Explorer](http://classic.aakilfernandes.com/#/) here to verify that ETC balances have been transferred. A more detailed community-provided guide can be found [here](https://steemit.com/ethereum/@pauls/ethereum-fork-step-by-step-guide-to-safely-splitting-your-eth-etc).
