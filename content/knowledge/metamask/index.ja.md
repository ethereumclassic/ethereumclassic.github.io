---
title: MetaMaskをETCで使用する
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Ethereum ClassicでMetaMaskを使用してETCを送信し、分散型アプリケーションと対話する方法を網羅したステップバイステップのガイドです。
info: この記事は[Etherplanで作成](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/)です。 Ethereum Classicのチュートリアル、理論、暗号通貨の概念については、 [etherplan.com](https://etherplan.com)をご覧ください。
contributors:
  - DonaldMcIntyre
---

**⚠️アップデート**  
https://chainlist.org/en/chain/61 の「Connect-Wallet」をクリックすることで、MetaMaskにETCを簡単に追加できるようになりました。

また、本サイトの各ページの最下部にもこのリンクがあります。

---

[MetaMask](https://metamask.io) は、ETCやトークンを管理するウォレットとして利用できるほか、対応するアプリケーションとのやり取りも可能です。 この記事では、Ethereum Classic（ETC）ネットワークでMetaMaskの利用を開始する方法を説明します。

また、 [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1)は MetaMask のフォークで、ETC をすぐにサポートします。

## Step 1: Log Into MetaMask

まず、ログインしてMetaMaskのロックを解除します。

![ステップ1](./01.png)

## Step 2: View Initial Screen

通常の初期画面が表示されます。 この場合、デフォルトのネットワークはイーサリアム（ETH）であり、アカウントは通常通り表示されます。 他のネットワークを利用した場合、最後に利用したネットワークであれば、MetaMaskのロック解除時にデフォルトとして表示されます。

私の場合、初期ネットワークとしてEthereumが表示され、ETH口座の残高がゼロになりました `0x48c1...EfF3`.

![ステップ2](./02.png)

## Step 3: Open the Networks Dropdown Menu

次に、ネットワークのドロップダウンメニューを開きます。 デフォルトのネットワークが表示されているバーをクリックすると、これを行うことができます。

上で見たように、デフォルトのネットワークリストは、Ethereumメインネットとその最も人気のあるテストネットです。

ローカルホスト8545」は、あなたのマシンでイーサリアムノードが稼働していれば、そのノードへの接続となる。

"カスタムRPC "は、カスタムネットワークを追加するオプションで、今回はETCを追加しました。

「RPCとは "リモートプロシージャコール "の略で、マシンが遠隔地にある他のプログラムを呼び出すためのプロトコルを指す言葉である。

![ステップ3](./03.png)

## Step 4: Select Custom RPC

そこで、次に「カスタムRPC」をクリックします。

![ステップ4](./04.png)

## Step 5: View the New Network Form

カスタムRPC」を選択すると、ネットワークを追加するためのフォームが表示されます。 上部にセキュリティメッセージが表示され、使用したい新しいネットワークを入力するための空欄のある5つのオプションがあります。

- ネットワーク名。追加するネットワークの名前です。
- 新しいRPCのURL。追加するネットワークRPCのURLです。
- チェーンID：追加したいネットワークにトランザクションを送信し、指示するためのIDです。
- Currency Symbol（オプション）。追加するネットワークの通貨記号です。 例えば、「ETH」はイーサリアムのシンボル、「ETC」はイーサリアムクラシックのシンボルです。
- ブロックエクスプローラーのURL（任意）。MetaMaskはネットワークごとにブロックチェーンエクスプローラーへのリンクがあり、アカウント履歴や新規取引送信、残高などを確認することができますので、ここでは追加したいネットワークのブロックエクスプローラーを追加することになります。

![ステップ5](./05.png)

## Step 6: Enter the Ethereum Classic Network Information

次に、Ethereum Classicの固有の情報を追加します。 以下は、使用したネットワークデータです。

- ネットワーク名 `イーサリアムクラシック`
- 新しいRPCのURL： `https://www.ethercluster.com/etc`
- チェーン ID： `61`
- 通貨記号（オプション）。 `ETC`
- ブロックエクスプローラーURL（オプション）： `https://blockscout.com/etc/mainnet/`

RPC URL」については、この目的のために [ETC Cooperative](https://etccooperative.org/)が提供するものを使いました。これは、彼らが構築した [Ethercluster](https://ethercluster.com/)という製品に由来するものです。

_[編集部注】Etherclusterは現在， [RIVET](https://rivet.cloud/)によって運営されています。 その他のRPCエンドポイントは、 [network](/network/endpoints) セクションに掲載されています。_

チェーンID」は、ウォレットやノードによるETC取引を運用中のブロックチェーンに送信するためのイーサリアムクラシックネットワークの固有IDであるため、「61」でなければなりません。

シンボル」と「ブロックエクスプローラーURL」は任意ですが、シンボルはネットワークのマーケットシンボルとして広く知られている「ETC」、ブロックチェーンエクスプローラーは私が普段使っている「BlockScout」がおすすめです（ただし、お好みのものを追加することも可能です！）。

保存」をクリックすると、ETCがMetaMaskに追加されます。

![ステップ6](./06.png)

## Step 7: View Ethereum Classic in the Networks Dropdown Menu

ETCが追加されると、ネットワークのドロップダウンメニューで、ネットワークのリストに追加されたことが確認できます。

![ステップ7](./07.png)

## Step 8: You May View Your Same Account but on ETC

アカウントにアクセスすると、ETHのアカウントと同じであることがわかります。 私の場合、同じ `0x48c1...EfF3` のアカウントになります。

これは、ETHとETCが同じ口座形式を採用しているため、イーサリアムの口座がイーサリアムクラシックでも使用できる可能性があるためです。

実際、ETHの口座の残高がゼロだったのを覚えている人もいるかもしれないが、今は同じ口座でもイーサリアムクラシックで1ETCの残高が見られることがある。 これは、今回のデモのために、イーサリアムクラシックネットワークのこのアカウントに1ETCを送ったからです。

また、ネットワークバーに表示されるネットワークはETCネットワークになり、残高の表示には「ETC」のマークが使われるようになりましたので、ご注意ください。

![ステップ8](./08.png)

## Step 9: You May Move Back to Ethereum With the Same Account

そのため、両方のネットワークが同じアカウント形式を使用しているため、イーサリアムのメインネットに戻ると、再び同じ番号のETHアカウントを見ることができるようになります。

![ステップ9](./09.png)

## Step 10: You May Move Back to Ethereum Classic With the Same Account

ETCネットワークを使用するには、ネットワークのドロップダウンメニューでイーサリアムクラシックを再度選択するだけで、ETCの残高が再度表示されます。

![ステップ10](./10.png)

//

ETCへの投資や利用が成功することを祈っています。

---

** 規範は法律である **
