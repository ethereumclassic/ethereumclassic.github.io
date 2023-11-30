---
title: "ETC Ecosystem Spotlight: Creating Fair Launch ERC-20 Tokens On ETCInscribe"
date: 2023-12-13
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["guide"]
linkImage: ./banner.png
---

---
**You can listen to or watch this video here:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/VozNYab5p3o?si=uvGAXecj0TIPzfLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

ETCInscribe is a new product launched by HebeBlock who is a dapp developer team based in China. They also created HebeSwap, a popular ETC decentralized exchange, Hens, an ETC based domain name service, and ETCScan, an ETC block explorer.

ETCInscribe is a dapp that lets users create and mint ERC-20 tokens in what is called a fair launch manner.

The fair launch of a token means that there were no developer team premines, no VC presales, and that the public can acquire pre-set amounts of the token per transaction per address.

Following is a series of questions I asked Zhang, HebeBlock’s team leader, about the service.

**Donald McIntyre (DM): What does "Fair Launch" mean in ETCInscribe, why is it "fair" and not just a normal creation of an ERC-20 token?**

*Zhang (ZG): In ETCInscribe, "Fair Launch" refers to a fair and equitable process of creating an ERC-20 token, ensuring that no individual or team gains undue advantage during the initial distribution phase. The fairness is manifested in the following aspects:*

*Equal Opportunity: Everyone has an equal opportunity to participate in the creation and acquisition of tokens during the initial distribution phase.*

*Transparency: The process of token creation and distribution is openly displayed, ensuring that the information is accessible to all.*

*No Pre-mining or Pre-sale: There is no pre-mining or pre-sale of tokens to prevent any specific entity from accumulating a significant amount of tokens during the launch phase.*

*By implementing a Fair Launch, ETCInscribe aims to establish a fair, open, and inclusive environment for token creation, allowing more people to participate and share in the growth and potential of the tokens.*

**DM: What do these lines mean: “Number of Maxs” and “Mint Limit”?**

*ZG: Number of Maxs is how many times can you mint in total. Mint Limit represents how many ERC-20 tokens can be obtained for each mint. Therefore, Number of Maxs x Mint Limit = ERC-20 token total supply.*

**DM: Can't I just create a token of, for example, 10,000,000 tokens, with name "TokenName" and symbol "TKX" and that's it?**

*ZG: In normal ERC-20 tokens you create a token yourself, set the total amount, and the token will be sent to your address. This is not the goal of ETCInscribe. We have implemented normal ERC-20 tokens on this other dapp https://easy.hebeswap.com/*

**DM: What kind of tokens are these? People can create them by using the contract?**

*ZG: It is still a smart contract, just imitating the functional mechanism implemented in Bitcoin Inscriptions.*

**DM: What is ETCInscribe for?**

*ZG: At first, I was simply contemplating whether it would be possible to replicate the model of Bitcoin Inscriptions onto ETC, hoping to attract more attention to ETC. Well, the truth is it did indeed attract attention. Comparing it to BTC's inscription, I was able to complete it in less than a week using smart contracts, which provided a faster and more secure approach.*

**DM: So, it seems there is an ERC-20 token creator and then people can mint?**

*ZG: Yes. To mint for free on ETCInscribe, it is crucial to identify projects that are meaningful and have value. By doing so, you can avoid incurring unnecessary gas costs.*

**DM: What is an "inscription"?**

*ZG: The concept of "inscription" in ETCInscribe stems from the latest BRC-20 concept in Bitcoin. As we know, Bitcoin does not have smart contracts functionality. Therefore, they have resorted to adding annotations on UTXO transactions, such as:*
```
{"p":"brc-20","op":"mint","tick":"bank","amt":"1000"} 
```
*…and then, establishing indexes to achieve ERC-20 standards. However, this approach is highly insecure, as users may accidentally send the inscriptions on the UTXO when sending BTC. In ETCInscribe, we have learned from this BTC inscription model and implemented it using smart contracts. Currently, we have implemented ERC-20 functionality only, and, in the future, we plan to support NFTs where users can upload images or text into ETC blocks.*

## How Does ETCInscribe work?

In the following sections we explain how to create your own fair launch ERC-20 on ETC using ETCInscribe.

### 1. Go to ETCInscribe.com

The first step to create a fair launch ERC-20 token on ETC using ETCInscribe is to go to their website at https://etcinscribe.com. Once there, connect your wallet and click on the “Create ERC20” button.

### 2. See the ERC-20 Token Creation Form

In the next screen you will see the fair ERC-20 token creation form with the fields “Token Name”, “Token Symbol”, “Number of Maxs”, and “Mint Limit”.

### 3. Enter Your Parameters and Create Your Fair ERC-20 Token Launch

Now you can enter your parameters and preferences for your new fair token launch. In our case we used the sample name “Token-Y”, the symbol “TKNY”, the number of max mints 1,000, and a limit per mint of 100,000 tokens. Once you enter your preferences, press the button “Create Fair ERC20”.

### 4. Confirm Your Transaction on Your Wallet

In the next step, ETCInscribe will generate the transaction on your ETC wallet. On your wallet press “Confirm” to execute the transaction to create your fair ERC-20 token.

### 5. Wait for Your Transaction to be Confirmed

Because the ETC network takes more or less 13 to 26 seconds to confirm transactions, you need to wait a short while to see your transaction execution.

### 6. Fair ERC-20 Token Is Created: Add Token To Your Wallet

When the ETC network confirms your fair launch ERC-20 smart contract creation, your wallet will ask you if you wish to import that token. Press “Add token” on your wallet to see your balances later.

### 7. See the Profile Page of Your New Token!

Once you added the token to your wallet, the wallet window will close and you will see the profile page of your new fair ERC-20 token! In our case, because we specified a 1,000 mint limit and a max amount of 100,000 tokens per mint, then the total supply of our ERC-20 token, if users mint them all, will be 100,000,000.

### 8. Mint Your Fair ERC-20 Token for Yourself!

Now that your new fair ERC-20 token has been created, you can mint tokens for yourself! To do this click on the “Free Mint” button.

### 9. Confirm Your Mint Transaction 

In the next step, ETCInscribe will send the transaction to your wallet. To execute the transaction, click on the “Confirm” button on your ETC wallet.

### 10. Wait Until the Transaction is Executed

Now you have to wait a few seconds again until the minting is executed.

### 11. Your Total Mint Number Goes Down

Once the minting transaction is executed, you will see your fair ERC-20 token profile page again, but you will see that now there is one less mint available on your token (in our case it went down from 1,000 to 999) because you did the first mint. As users mint your token that number will go down until it gets to zero.

### 12. Check Your Fair ERC-20 Token Balance on Your Wallet!

If you open your wallet to check your balances, you will see that now you have a balance of your newly created fair ERC-20 token! In our case we have a balance of 100,000 $TKNY as this was the set amount we defined during token creation.

---

**Thank you for reading this article!**

To learn more about ETC please go to: https://ethereumclassic.org
