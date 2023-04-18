---
title: 將 MetaMask 與 ETC 結合使用
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: 分步指南，涵蓋如何使用 MetaMask 和 Ethereum Classic 發送 ETC 並與去中心化應用程序交互。
info: 本文由 Etherplan [創建](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/)。 如需更多以太坊經典教程、理論和加密貨幣概念，請查看 [etherplan.com](https://etherplan.com)。
contributors:
  - DonaldMcIntyre
---

**⚠️ 更新**  
您現在可以通過點擊 https://chainlist.org/chain/61 上的“Connect-Wallet”輕鬆將 ETC 添加到 MetaMask

您還可以在本網站每個頁面的底部找到此鏈接。

---

[MetaMask](https://metamask.io) 可用作錢包來管理您的 ETC 和代幣，以及與支持它的應用程序進行交互。 這篇文章解釋瞭如何開始將 MetaMask 與 Ethereum Classic (ETC) 網絡結合使用。

您也可以考慮 [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1)，它是 MetaMask 的一個分支，支持開箱即用的 ETC。

## 第 1 步：登錄 MetaMask

第一步是登錄以解鎖您的 MetaMask。

![步驟1](./01.png)

## 第 2 步：查看初始屏幕

您將看到正常的初始屏幕。 在這種情況下，默認網絡是以太坊 (ETH)，您的賬戶將照常顯示。 當您使用其他網絡時，如果它們是最後使用的網絡，那麼當您解鎖您的 MetaMask 時，它們將顯示為默認值。

在我的例子中，它顯示以太坊為初始網絡，我的 ETH 帳戶 `0x48c1...EfF3`中的餘額為零。

![第2步](./02.png)

## 第 3 步：打開網絡下拉菜單

下一步是打開網絡下拉菜單。 您可以通過單擊您看到默認網絡的欄來執行此操作。

從上面可以看出，默認的網絡列表是以太坊主網及其最受歡迎的測試網。

如果你在你的機器上運行一個，“本地主機 8545”將是一個到以太坊節點的連接。

“自定義 RPC”是添加自定義網絡的選項，在本例中為 ETC。

“RPC”代表“遠程過程調用”，它是機器用於程序調用遠程機器中的其他程序的協議術語。

![步驟 3](./03.png)

## 第 4 步：選擇自定義 RPC

所以，下一步是點擊“Custom RPC”。

![步驟4](./04.png)

## 第 5 步：查看新的網絡表格

選擇“自定義 RPC”後，您將看到添加網絡的表單。 它在頂部有一條安全消息和五個帶空字段的選項，用於輸入您要使用的新網絡：

- 網絡名稱：要添加的網絡的名稱。
- 新 RPC URL：要添加的網絡 RPC 的 URL。
- Chain ID：將交易發送和定向到您要添加的網絡的 ID。
- 貨幣符號（可選）：要添加的網絡的貨幣符號。 例如，“ETH”是以太坊的符號，“ETC”是以太坊經典的符號。
- 區塊瀏覽器 URL（可選）：MetaMask 具有指向每個網絡的區塊鏈瀏覽器的鏈接，以檢查帳戶歷史記錄、發送的新交易及其餘額，因此您可以在此處為要添加的網絡添加一個區塊瀏覽器。

![步驟 5](./05.png)

## 第 6 步：輸入以太坊經典網絡信息

下一步，是添加 Ethereum Classic 的具體信息。 下面是我使用的網絡數據：

- 網絡名稱： `以太坊經典`
- 新的 RPC URL： `https://etc.rivet.link`
- 鏈號： `61`
- 貨幣符號（可選）： `ETC`
- 區塊瀏覽器 URL（可選）： `https://blockscout.com/etc/mainnet/`

對於“RPC URL”，我使用了一家名為 [Rivet](https://rivet.link/)的公司為此目的提供的端點，該公司為此與 [ETC Cooperative](https://etccooperative.org) 簽約。 您可以在 [網絡](/network/endpoints) 部分找到更多 RPC 端點。

“Chain ID”必須是“61”，因為這是以太坊經典網絡的特定 ID，用於通過錢包和節點向運行的區塊鏈發送 ETC 交易。

儘管“符號”和“區塊瀏覽器 URL”是可選的，但我建議使用“ETC”作為符號，因為這是網絡廣為人知的市場符號，而 BlockScout 作為區塊鏈瀏覽器，因為這是我經常使用的（但您可以添加您喜歡的！）。

單擊“保存”將 ETC 添加到 MetaMask。

![步驟 6](./06-rivet.png)

## 第 7 步：在 Networks 下拉菜單中查看 Ethereum Classic

添加 ETC 後，您將在網絡下拉菜單中看到它已添加到網絡列表中。

![步驟 7](./07.png)

## 第 8 步：您可以在 ETC 上查看您的同一帳戶

如果你去你的賬戶，你會發現它和你的 ETH 賬戶是一樣的。 在我的例子中，它是相同的 `0x48c1...EfF3` 帳戶。

這是因為 ETH 和 ETC 使用相同的賬戶格式，所以以太坊上的賬戶也可能在 Ethereum Classic 中使用。

事實上，你可能還記得我的 ETH 賬戶餘額為零，但現在在同一個賬戶中可能會看到餘額為 1 ETC，但在 Ethereum Classic 上。 這是因為我在 Ethereum Classic 網絡中為這個演示發送了 1 個 ETC 到這個賬戶。

另請注意，ETC 網絡現在顯示在網絡欄中，“ETC”符號現在用於顯示余額。

![步驟 8](./08.png)

## 第 9 步：您可以使用同一帳戶返回以太坊

因此，由於兩個網絡使用相同的帳戶格式，您可以返回以太坊主網，您將能夠再次看到您的 ETH 帳戶具有相同的號碼。

![步驟 9](./09.png)

## 第 10 步：您可以使用同一帳戶返回以太坊經典

要使用 ETC 網絡，只需在網絡下拉菜單中再次選擇 Ethereum Classic，您將再次看到您的 ETC 餘額。

![步驟 10](./10.png)

//

祝您投資和使用ETC成功！

---

** 代碼就是法律 **
