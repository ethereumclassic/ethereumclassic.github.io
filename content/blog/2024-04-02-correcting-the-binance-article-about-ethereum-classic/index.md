---
title: "Correcting the Binance Article About Ethereum Classic"
date: 2024-04-02
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["education"]
linkImage: ./1.png
---

![](./1.png)

The exchange Binance has an article about Ethereum Classic with the title and tag “Ethereum Classic (ETC), A Next-Generation Smart Contract And Decentralized Application Platform” in the following link:

https://www.binance.com/en/research/projects/ethereum-classic

The post has and introduction with bullet points about ETC and then 5 sections.

To our delight, the majority of the essay is well researched, however some parts have mistakes or common misconceptions that we wish to clarify.

In the following sections we will go over Binance’s statements, we will propose corrected phrases, and add our rationale for each correction.

## Section: Bullet Points Summary

**Binance Statement:**

- Ethereum Classic is a decentralized network that supports smart contracts. It was created by Vitalik Buterin in 2013. Following the DAO hack in 2016, several members of the Ethereum community rejected the idea of a hard-fork to revert transactions (and return funds to the DAO participants), leading to the split between Ethereum and Ethereum Classic.
- Ethereum Classic parted away from Ethereum at block 1,920,000 (July 20th 2016) to retain the original version of the network, reinforcing the blockchain’s core characteristic of immutability. Since its ICO in 2015, Ethereum has relied on Proof of Work (PoW); Ethereum Classic shares its early history with its first (common) block being mined in July 2015.
- Like Ethereum, the network is fueled by a cryptocurrency named ether (classic). It comprises an open-source, globally decentralized computing infrastructure, which executes programs called smart contracts.
- Similarly, Ethereum Classic is based on an account model to record state changes. It relies on the Ethereum Virtual Machine (EVM) with two types of addresses: externally owned addresses (EOAs) and contract addresses that are deployed on the EVM.
- As of March 2020, Ethereum Classic’s hashrate is much lower than Ethereum’s and the level of on-chain activity is also inferior to Ethereum's. With Ethereum planning to part away from Proof-of-Work (to introduce PoS with ETH 2.0), Ethereum Classic plans on persisting as the immutable Proof of Work version of Ethereum.

**Our Correction:**

- Ethereum Classic is a decentralized network that supports smart contracts. It was created by Vitalik Buterin in 2013. Following the DAO hack in 2016, several members of the Ethereum community rejected the idea of a hard-fork to revert transactions (and return funds to the DAO participants), leading to the split between Ethereum and Ethereum Classic.
- Ethereum (ETH) parted away from Ethereum Classic (ETC) at block 1,920,000 (July 20th 2016) to return the funds to the original owners, while ETC decided to retain the original version of the network, reinforcing the blockchain’s core characteristic of immutability. Since its launch in 2015, Ethereum Classic has relied on Proof of Work (PoW) while Ethereum migrated to Proof of Stake (POS); ETC and ETH share their early history with their first (common) block being mined in July 2015.
- Like Ethereum, the network is fueled by a cryptocurrency named ether (classic). It comprises an open-source, globally decentralized computing infrastructure, which executes programs called smart contracts.
- Similarly, Ethereum Classic is based on an account model to record state changes. It relies on the Ethereum Virtual Machine (EVM) with two types of addresses: externally owned addresses (EOAs) and contract addresses that are deployed on the EVM.
- As of March 2024, Ethereum Classic’s hashrate has increased 10 times after Ethereum’s migration to POS, while on-chain activity has been lower than Ethereum’s.

**Rationale:**

The first bullet point of this section by Binance is correct. 

We changed the second bullet point to show that Ethereum parted ways from Ethereum Classic, not the other way around.

ETC is the original untampered blockchain with its accounts and smart contracts untouched and immutable since the beginning. The one who broke away or split from the mainnet by manually modifying accounts and balances was Ethereum.

We also replaced the term ICO with “launch” because ETH and ETC did not do an ICO, but the original unified system was launched as any network would be started, by just running some initial nodes.

The confusion is that Vitalik Buterin did conduct a crowdfunding to finance the development of Ethereum the previous year, but it wasn’t an ICO as these were created and widely used in the industry in 2017 enabled precisely by the Ethereum blockchain with its ERC-20 token standard.

ETC remains as a Proof of Work (POW) blockchain to this day and will continue for the foreseeable future. Ethereum migrated to Proof of Stake (POS), which is significantly less secure.

As of March 2024, Ethereum Classic’s hashrate has increased 10 times after Ethereum’s migration to POS, while on-chain activity has been lower than Ethereum’s.

## Section: 1. What is Ethereum Classic (ETC)?

**Binance Statement:**

Since the fork occurred in 2016, Ethereum Classic and Ethereum share many similarities:

- Ethereum Classic is an open-source, globally decentralized computing infrastructure, executing programs referred to as smart contracts.
- Ethereum Classic’s supply was pre-mined (72 million). Among these pre-mined ethers, 60 million were sold during an Initial Coin Offering in 2015.
- Its PoW algorithm is Ethash, an algorithm that was initially designed to prevent ASIC mining. Block time has a target of ~15 seconds (with a maximum block size of 1,500,000 gas). Mining rewards are paid at a fixed rate of 4 ETC (vs. Ethereum’s 2 ETH) but will be reduced in the future to 3.2 ETC (at block 10,000,000).
- Ethereum Classic is (quasi) Turing-complete, but each transaction requires gas, with price fluctuation based on real-time bandwidth use. Hence, transaction fees are a function of storage needs, bandwidth use, and computational complexity. Gas is used to prevent infinite execution of programs; it introduces an execution stopper equal to the maximum fees set for a transaction.

**Our Correction:**

Since the fork occurred in 2016, Ethereum Classic and Ethereum share some similarities, but since the “merge” in Ethereum some parts are significantly different:

- Ethereum and Ethereum Classic are open-source, globally decentralized computing infrastructure, executing programs referred to as smart contracts.
- As they were the same network originally, both Ethereum’s and Ethereum Classic’s supplies were pre-mined and both were 72 million ETH and ETC. Among these pre-mined ethers for both networks, 60 million were sold during a crowdfunding in 2014.
- ETC’s PoW algorithm is ETCHash, an algorithm that was initially designed to prevent ASIC mining. Block time has a target of ~13 seconds (with a default block size of 8,000,000 gas). Ethereum’s consensus mechanism was changed from POW to POS in September 15th of 2022. 
- Mining rewards in ETC are paid at a fixed rate of 2.56 ETC, but these rewards are reduce every 5 million blocks by 20%.
- Ethereum Classic is (quasi) Turing-complete, but each transaction requires gas, with price fluctuation based on real-time bandwidth use. Hence, transaction fees are a function of block space demand, bandwidth use, and computational complexity. Gas is used to prevent infinite execution of programs and spam; it introduces an execution stopper equal to the maximum fees set for a transaction.

**Rationale:**

Since the 2016 fork Ethereum and Ethereum Classic are both EVM chains, thus very similar, but since the migration to POS, ETH is very different in some aspects.

Both ETH’s and ETC’s premine is the same at 72 million because both chains were one at the beginning.

Ethereum and ETC did a crowdfunding in 2014, not an ICO in 2015. Then, in 2015, when the network was launched, 60,000,000 ether were distributed among the crowdfunding investors.

ETC’s mining algorithm was changed to ETCHash, which has some minor changes to the original Ethash to make it unique and protect ETC from 51% attacks. 

Block times in ETC are targeted to 13 seconds, not 15. 

The GAS limit in ETC is set by default to 8,000,000 currently, not 1,500,000.

ETH’s consensus mechanism was changed from POW to POS in September 15th of 2022.

ETC’s block rewards are 2.56 ETC per block, but this is discounted by 20% every 2 years, approximately.

Gas is used in ETH and ETC to prevent infinite execution of programs and spam.

## Section: 2. Ethereum Classic’s core features

The technical details explained in this section are correct for Ethereum Classic as both Ethereum and Ethereum Classic share the same mechanical design, which is the EVM format.

However, Ethereum migrated to Proof of Stale and this explanation should be added to the Binace article about ETC.

Perhaps the line “These core features are similar to Ethereum. Click here to read the full report about Ethereum” should be deleted.

Other than this, all is fine in this section!

## Section: 3. Economics and supply distribution

**Binance Statement:**

Ethereum Classic’s economics rely solely on Proof of Work, following the original ICO in 2015.

Ethereum’s ICO was conducted in the first half of 2015 for 60 million ethers (collected in BTC).

Block mining is based on the Ethash function, which itself relies on Keccak. Ethash was designed to prevent ASIC participation, owing to features such as memory hardness. However, it has been gamed and blocks have become mostly mined by ASIC devices for a few years.

Unlike Ethereum, the total supply of Ethereum Classic is capped, with an inflation rate that decays over time. Its total maximum supply will be ~ 210-230 million ETC.

**Our Correction:**

Ethereum Classic’s economics rely solely on Proof of Work, following the original launch in 2015.

When they were one chain, Ethereum’s and Ethereum Classic’s launch was in 2015, which included a premine of 72 million ETH and ETC of which 60 million corresponded to investors who had participated in a crowdfunding campaign in the previous year.

Block mining is based on the ETCHash function, which itself relies on Keccak. ETCHash was designed to prevent ASIC participation, owing to features such as memory hardness. However, it has been gamed and blocks have become mostly mined by ASIC devices for a few years.

Unlike Ethereum, the total supply of Ethereum Classic is capped, with an inflation rate that declines by 20% every two years or 5 million blocks. Its total maximum supply will be ~ 210,700,000 ETC.

**Rationale:**

ETH and ETC did not do an ICO, they did a crowdfunding campaign in 2014 and the launch of the network was in 2015. This launch included the 60 million ETH and ETC that corresponded to the original crowdfunding campaign.

ETC uses the ETCHash mining algorithm since November of 2020.

ETC’s inflation rate will decline by 20% every 5 million blocks. Its total maximum supply will be ~ 210,700,000 ETC.

## Section: 4. Project team

![](./2.png)

The project team of Ethereum Classic is now the ETC Cooperative. The description of its functions is correct.

The link to see the ETC Cooperative team is this one:

https://etccooperative.org/people 

## Section: 5. Additional resources and references

This section with references can stay the same because all the information for the proposed changes in this post can be found in the https://ethereumclassic.org website.

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org
