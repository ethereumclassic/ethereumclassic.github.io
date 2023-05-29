---
title: "Using Ethereum Classic With MyEtherWallet"
date: 2023-05-23
author: Donald McIntyre
contributors: ["DonaldMcIntyre"]
tags: ["series", "guide"]
linkImage: ./banner.png
---

---
**You can listen to or watch this video here:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/Uv0oOHj23Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

MyEtherWallet (MEW) is a special kind of wallet app because it offers multiple services and even connects to other wallets. It was the original Ethereum wallet when the blockchain was launched in 2015.

Its original design and success was that it let users generate and keep their private keys while using the website to only create and send transactions.

Now MEW has several products, including a mobile app and a browser extension, but in this guide we will explain how to use the web application.

We will explain how to connect MEW to the Ethereum Classic (ETC) network, create and connect wallets, see wallet addresses and reveal private keys, check balances and transactions, and send and receive ETC to and from other addresses.

## 1. Create ETC Addresses on MyEtherWallet

On MyEtherWallet you may connect existing wallets, such as browser extensions, mobile wallets, and hardware wallets, or you may create new ETC addresses from scratch. 

To create a new address, click on the “create a new wallet” button.

![](./1.png)

In the next screen, MEW shows you all the ways in which you may create new ETC addresses. The first two options are their products Enkrypt, a browser extension like MetaMask, and their mobile app. We are concerned here with the options of using hardware wallets or creating ETC addresses with mnemonic phrases. 

In the case of hardware wallets, you really create new ETC addresses on them directly, so we will not go through the process here. 

For this example, we will proceed to create a new mnemonic phrase, and then create an ETC address from there.

![](./2.png)

In the next screen, MEW will show you two options, but we will not use keystore JSON file because that is an older form of creating addresses. Today, the most used format for managing non-custodial wallets is with 12 or 24 word secret passphrases.

We will click on “Mnemonic Phrase” and then copy on paper the 12 words that MEW will provide us.

Disclaimer: MEW correctly advises not to use its web app for mnemonic phrases or keystore files because the web service may be intercepted by hackers. We are just going through this process to show how MEW works in general. You may connect the other types of wallets. The best way to generate mnemonic phrases is with apps on your phone or computer or with hardware wallets, but not on the web or open internet.

![](./3.png)

## 2. Connect ETC Wallets on MyEtherWallet

Now that in the previous step we copied the 12 words, we need to go to the home again and click on the “Access my wallet” button.

This will take us to the options to access various kinds of wallets.

![](./4.png)

In the next screen, MEW will show you all the kinds of wallets that you can connect with your ETC addresses. 

The first two options are their products Enkrypt and their mobile app. Then they show the possibility of using browser extensions such as MetaMask, and then mobile apps, hardware wallets, and finally keystore files or mnemonic phrases.

You can use the option that you wish, but we will use the mnemonic phrase option for this example.

![](./5.png)

When you click on “Software” wallets, in the next screen you will see that MEW has the three normal options to check addresses when not using hardware wallets, wallet apps, or extensions.

For this example, we will click on “Mnemonic Phrase”.

![](./6.png)

In the next screen, we will enter the 12 words that we created when creating a new wallet for ETC.

Then, we will press “Next”.

IMPORTANT: DO NOT USE THE 12 WORD MNEMONIC PHRASE IN THIS EXAMPLE. MNEMONIC PHRASES MUST BE SECRET AND EACH USER MUST HAVE THEIR OWN SECRET PASSPHRASE. THIS ONE IS JUST A DUMMY FOR THIS GUIDE.

![](./7.png)

In the next screen, we will see many addresses created for Ethereum (because it is the default blockchain on MEW) but these are totally compatible with ETC, so we just have to select one.

However, we have to tell MEW that we wish to access the Ethereum Classic blockchain, so this will be in the next step.

![](./8.png)

If you scroll down on the same page, you will see that there is a dropdown menu called “Network” below the addresses. Click on it.

When you click and the dropdown menu displays, you will see many networks of which ETC is one of them. Click on ETC so MEW changes the network to that blockchain.

![](./9.png)

In the next screen, MEW will take you to your new ETC wallet!

![](./10.png)

## 3. Select the Ethereum Classic Blockchain on MyEtherWallet

In case you connected any kind of wallet and you forgot to change the network from Ethereum to Ethereum Classic, you can still do so from the main address page.

In the image you will see that the same address as before is on the Ethereum network.

Click on the box that says “Ethereum” and a menu will open on your screen.

![](./11.png)

In the box with the menu that opens, select ETC and MEW will change the network automatically.

![](./12.png)

## 4. Reveal Addresses and Private Keys With Paper Wallets

To see your full address and private key, MEW has a function that lets you generate a paper wallet that you may print that contains both keys.

To generate your paper wallet, go to the card that is on the top left of your screen and click in the dropdown menu.

On the menu select “View paper wallet”.

![](./13.png)

In the next step, a paper wallet will be shown on your screen.

The information on it is the ETC public address and below the private key that corresponds to that address.

These two were generated from your 12 word secret passphrase, and many more may be created with that technology.

The paper wallet also has the QR codes for both the address and the private key. 

If you print it, make sure to put it in a safe place.

![](./14.png)

## 5. Receive ETC

To receive ETC on the address you are browsing on MEW, go to the main address page and click on the “Receive” button on the left menu.

![](./15.png)

In the next step, a pop up box will appear on your screen with your address and a QR code to send or show to others.

Copy the address and give to others so they can send you ETC.

![](./16.png)

## 6. Send ETC

To send ETC, go to the address main page again and click on the “Send” button on the left menu.

![](./17.png)

In the next screen, enter the amount and the recipient address.

Then click on the transaction fee menu.

![](./18.png)

In the next screen, MEW lets you select the fee level from three options: Normal, Higher priority, or Highest priority.

We will select Normal for this example and click on it.

Once you select the fee level, the pop up box will close and you can press “Next”.

![](./19.png)

In the next step, MEW will show you another pop up box with the data of the transaction so you can verify it.

If everything is ok, then you can go ahead and press “Confirm & Send”.

![](./20.png)

After the transaction is sent, on the top right of your address main page you will see a bell with a notification symbol. 

If you click on it, then a box with the transaction status will be shown.

![](./21.png)

## 7. Check Balances and Transactions

MEW has a function to show you your ETC address balance, but it does not support transaction history for any blockchain.

This is weird, but if you check the card on the top left, you will see your latest balance. In this example it is zero because we just sent out all our balance for the previous step.

In that card, click on the copy icon to put the address on the clipboard. 

To check your transaction history you may go to Blockscout, which is the most popular block explorer for ETC.

The link is: https://blockscout.com/etc/mainnet/

![](./22.png)

Once on Blockscout, enter the address that you copied from MEW into the field on the top right of the page and press enter.

![](./23.png)

In the next screen on Blockscout, you will see the address balance and the transactions below.

In this case we can see the two transactions I did for this guide.

![](./24.png)

---

**Thank you for reading this article!**

To learn more about MyEtherWallet pleaso go to: https://myetherwallet.com 

To learn more about ETC please go to: https://ethereumclassic.org
