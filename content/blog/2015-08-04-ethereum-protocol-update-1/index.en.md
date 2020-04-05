---
title: Ethereum Protocol Update 1
date: 2015-08-04
author: Stephan Tual
---

![Ethereum Logo](./ethereum-icon-black.6b935ac0.png width="200")

Here comes the first Frontier patch, and this is a big one!

Before you go further, if your keys date back from Go 1.0 rc or C++ 0.9.36, note that you should regenerate all of your keys NOW. Though some releases of the pre-alpha and alpha clients are secure, this depends on which codebase and which version. You should assume that all keys generated prior to these clients are insecure and compromised. This, note, does not affect the pre-sale wallets.

![Ethereum Thawing](./687474703a2f2f692e696d6775722e636f6d2f344f686877776f2e6a7067.jpeg width="400")

## Thawing

The thawing [pull request](https://github.com/ethereum/go-ethereum/pull/1578) has been merged for the [Go client](https://github.com/ethereum/go-ethereum/releases/tag/v1.0.1) and the Master branch has been updated. If you’re still running branch release 1.0.0 please switch to Master.

As for the [C++](https://github.com/ethereum/cpp-ethereum) users, they can also switch to master once merged, and binaries will be made available shortly. If you’d rather not update eth but still wish to help thaw the network, you can also just restart eth with an extra parameter of –gas-floor 3141592.

I thought that I’d also repost a quick explanation on how the gas limit targeting process operates, and why we cannot guarantee a time by which we’ll reach the 21K limit necessary to process one basic transaction per block.

Each miner runs a copy of geth or eth. In the Frontier Genesis release, both were set to target 5k and never deviate from that figure. Now, with this update, both clients will be updated to instead target 3M gas limit per block.

But they cannot switch to a 3M gas limit just like that, because the protocol forces them to climb slowly at a certain rate. That rate is equal to previous block limit / 1024. Now, assuming all miners update their clients, and none of them mess around with the settings, we’re going to reach 3M within 28h assuming a steady 15s block time including propagation. But here’s the thing - not all miners are going to update in time, some might forget and some might never update!

So, going forward, if a winning block is mined by a updated miner, the block limit will adjust upwards by the rate intended, but if it is mined by a ‘lazy’ miner who didn’t update, it will adjust back downwards (as the lazy miner is still targeting 5k).

For this reason, it will take a minimum of 6h to get to a 21K gas limit per block(1 trx per block), and a minimum of 28h to get to 3M. In practice, it will likely take considerably longer than that.

This is where the free market come into play. Technically, miners could even have colluded a few days ago to modify the client code and make the network behave rather differently than what we had in mind. We merely act as advisers to the community.

## Default, community chosen, Genesis block

The Genesis block we have seen adopted by the community has now been hardcoded in the clients, and you no longer need to specify the –genesis parameter to start eth or geth. That said, you can still specify a hand-crafted genesis block if you want to start a private chain with different genesis, for example.

## Bug fixes

On the Go client side, a series of bug fixes and improvement have been merged into 1.0.1, including readying ourselves for a Go 1.5 release.

* Fixed crash in chain manager [#1568](https://github.com/ethereum/go-ethereum/pull/1568)
* Log number fixes [#1545](https://github.com/ethereum/go-ethereum/pull/1545)
* Crypto fix for go 1.5 [#1536](https://github.com/ethereum/go-ethereum/pull/1536)
* Fix for eth_call and eth_estimateGas [#1534](https://github.com/ethereum/go-ethereum/pull/1534)
* Console `resend` method fix [#1461](https://github.com/ethereum/go-ethereum/pull/1461)

On the C++ client, a full external audit has been carried out on its Key Store and cryptography. All actions recommended by our expert reviewers have been acted upon. Numerous optimizations and security improvements were added to the client:

* A unique C++ client feature is Secure Secrets: all heap memory used to store your secrets is securely overwritten immediately after it is finished
* The C++ client now relies upon boost::random_device, giving a cryptographically secure random-number generation
* Several crash and build fixes for AlethZero
* Enhancements to Alethzero, especially regarding account information
* The CLI tool ‘ethkey’ can now be used in concert with AlethZero to inspect and sign an otherwise unsigned transaction. This allows you to have a completely air-gapped cold-wallet-device

## Difficulty adjustment scheme

A lot of you have been wondering how we would implement a switch from PoW to PoS in time for Serenity. This will be handled by the newly introduced difficulty adjustment scheme, which elegantly guarantees a hard-fork point in the next 16 months.

It works as follow: starting from block 200,000 (very roughly 17 days from now), the difficulty will undergo an exponential increase which will **only become noticeable in about a year**. At that point (just around the release of the Serenity milestone), we’ll see a significant increase in difficulty which will start pushing the block resolution time upwards.

So, a year on, the network will continue to be useful for roughly 3-4 months, but eventually will reach an ‘Ice Age’ of sorts: the difficulty will simply be too high for anyone to find a block. This will allow us to introduce PoS, perhaps via [Casper](https://blog.ethereum.org/2015/08/01/introducing-casper-friendly-ghost/), if it proves itself.
