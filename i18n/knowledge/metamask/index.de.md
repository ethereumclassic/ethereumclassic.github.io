---
title: Verwendung von MetaMask mit ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Eine Schritt-für-Schritt-Anleitung für die Verwendung von MetaMask mit Ethereum Classic, um ETC zu versenden und mit dezentralen Anwendungen zu interagieren.
info: Dieser Artikel wurde [erstellt von Etherplan] (https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Weitere Anleitungen zu Ethereum Classic, Theorie und Kryptowährungskonzepten finden Sie unter [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

**⚠️ Update**  
Sie können ETC jetzt einfach zu MetaMask hinzufügen, indem Sie auf https://chainlist.org/en/chain/61 auf "Connect-Wallet" klicken.

Sie finden diesen Link auch am Ende jeder Seite dieser Website.

---

[MetaMask](https://metamask.io) kann als Wallet verwendet werden, um Ihre ETC und Token zu verwalten und mit Anwendungen zu interagieren, die dies unterstützen. In diesem Beitrag wird erklärt, wie Sie MetaMask mit dem Ethereum Classic (ETC)-Netzwerk verwenden können.

Sie können auch [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1)in Betracht ziehen, einen Fork von MetaMask, der ETC sofort unterstützt.

## Schritt 1: Bei MetaMask anmelden

Der erste Schritt besteht darin, sich anzumelden, um Ihre MetaMask zu entsperren.

![Schritt 1](./01.png)

## Schritt 2: Startbildschirm anzeigen

Sie sehen dann den normalen Startbildschirm. In diesem Fall ist das Standardnetzwerk Ethereum (ETH) und Ihr Konto wird wie üblich angezeigt. Wenn Sie andere Netze verwenden, werden diese als Standard angezeigt, wenn Sie Ihre MetaMaske entsperren, sofern es die zuletzt verwendeten Netze sind.

In meinem Fall zeigt es Ethereum als das ursprüngliche Netzwerk an, und ich habe einen Nullsaldo auf meinem ETH-Konto `0x48c1...EfF3`.

![Schritt 2](./02.png)

## Schritt 3: Öffnen Sie das Dropdown-Menü Netzwerke

Der nächste Schritt ist das Öffnen des Dropdown-Menüs Netzwerke. Klicken Sie dazu auf die Leiste, in der Sie das Standardnetz sehen.

Wie oben zu sehen ist, besteht die Standardliste der Netzwerke aus dem Ethereum-Hauptnetz und seinen beliebtesten Testnetzen.

Der "Local Host 8545" wäre eine Verbindung zu einem Ethereum-Knoten, wenn Sie einen solchen auf Ihrem Rechner betreiben würden.

"Benutzerdefinierte RPC" ist die Option zum Hinzufügen benutzerdefinierter Netze, in diesem Fall ETC.

"RPC" steht für "Remote Procedure Call", also für das Protokoll, mit dem Programme andere Programme auf entfernten Rechnern aufrufen können.

![Schritt 3](./03.png)

## Schritt 4: Benutzerdefinierte RPC auswählen

Der nächste Schritt besteht darin, auf "Custom RPC" zu klicken.

![Schritt 4](./04.png)

## Schritt 5: Anzeigen des Formulars "Neues Netzwerk

Nachdem Sie "Custom RPC" ausgewählt haben, wird das Formular zum Hinzufügen eines Netzwerks angezeigt. Oben befindet sich eine Sicherheitsmeldung und fünf Optionen mit leeren Feldern, in die Sie das neue Netzwerk eingeben können, das Sie verwenden möchten:

- Netzwerkname: Der Name des Netzwerks, das Sie hinzufügen möchten.
- Neue RPC-URL: Eine URL für die Netzwerk-RPC, die Sie hinzufügen möchten.
- Ketten-ID: Die ID zum Senden und Weiterleiten von Transaktionen an das Netzwerk, das Sie hinzufügen möchten.
- Währungssymbol (optional): Das Währungssymbol des Netzwerks, das Sie hinzufügen möchten. Zum Beispiel ist "ETH" das Symbol für Ethereum und "ETC" ist das Symbol für Ethereum Classic.
- Block Explorer URL (optional): MetaMask hat Links zu Blockchain-Explorern für jedes Netzwerk, um die Kontohistorie, neue gesendete Transaktionen und Guthaben zu prüfen. Hier würden Sie also einen Block-Explorer für das Netzwerk hinzufügen, das Sie hinzufügen möchten.

![Schritt 5](./05.png)

## Schritt 6: Geben Sie die Ethereum Classic Netzwerkinformationen ein

Der nächste Schritt besteht darin, die spezifischen Informationen von Ethereum Classic hinzuzufügen. Nachstehend finden Sie die von mir verwendeten Netzdaten:

- Name des Netzwerks: `Ethereum Classic`
- Neue RPC-URL: `https://www.ethercluster.com/etc`
- Ketten-ID: `61`
- Währungssymbol (optional): `ETC`
- Block Explorer URL (optional): `https://blockscout.com/etc/mainnet/`

Für die "RPC-URL" habe ich die von der [ETC Cooperative](https://etccooperative.org/)für diesen Zweck bereitgestellte URL verwendet, die von einem Produkt namens [Ethercluster](https://ethercluster.com/)stammt.

_[Anmerkung der Redaktion] Ethercluster wird jetzt von [RIVET](https://rivet.cloud/)betrieben. Weitere RPC-Endpunkte finden Sie im Abschnitt [network](/network/endpoints) ._

Die "Chain ID" muss "61" lauten, da dies die spezifische ID des Ethereum Classic-Netzwerks für das Senden von ETC-Transaktionen durch Wallets und Nodes an die laufende Blockchain ist.

Obwohl das "Symbol" und die "URL des Blockchain-Explorers" optional sind, empfehle ich, "ETC" als Symbol zu verwenden, da dies das weithin bekannte Marktsymbol des Netzwerks ist, und "BlockScout" als Blockchain-Explorer, da dies derjenige ist, den ich normalerweise verwende (aber Sie können Ihren bevorzugten hinzufügen!).

Klicken Sie auf "Speichern", um ETC zu MetaMask hinzuzufügen.

![Schritt 6](./06.png)

## Schritt 7: Ethereum Classic im Dropdown-Menü der Netzwerke anzeigen

Sobald ETC hinzugefügt wurde, sehen Sie im Dropdown-Menü der Netzwerke, dass es zur Liste der Netzwerke hinzugefügt wurde.

![Schritt 7](./07.png)

## Schritt 8: Sie können Ihr Konto auf ETC einsehen

Wenn Sie zu Ihrem Konto gehen, werden Sie feststellen, dass es dasselbe ist wie Ihr ETH-Konto. In meinem Fall ist es das gleiche `0x48c1...EfF3` Konto.

Dies liegt daran, dass sowohl ETH als auch ETC das gleiche Kontoformat verwenden, so dass Konten auf Ethereum auch in Ethereum Classic verwendet werden können.

Sie erinnern sich vielleicht daran, dass ich auf meinem ETH-Konto einen Kontostand von Null hatte, aber jetzt kann man auf demselben Konto einen Kontostand von 1 ETC sehen, allerdings auf Ethereum Classic. Das liegt daran, dass ich für diese Demonstration 1 ETC an dieses Konto im Ethereum Classic-Netzwerk gesendet habe.

Beachten Sie auch, dass das ETC-Netz nun dasjenige ist, das in der Netzleiste angezeigt wird, und das "ETC"-Symbol wird nun zur Anzeige des Kontostands verwendet.

![Schritt 8](./08.png)

## Schritt 9: Sie können mit demselben Konto zurück zu Ethereum wechseln

Da beide Netzwerke das gleiche Kontoformat verwenden, können Sie zurück zum Ethereum-Hauptnetz wechseln und Ihr ETH-Konto wieder mit der gleichen Nummer sehen.

![Schritt 9](./09.png)

## Schritt 10: Sie können mit demselben Konto zurück zu Ethereum Classic wechseln

Um das ETC-Netzwerk zu nutzen, wählen Sie einfach wieder Ethereum Classic im Dropdown-Menü der Netzwerke aus, wo Sie Ihre ETC-Guthaben wieder sehen.

![Schritt 10](./10.png)

//

Ich wünsche Ihnen viel Erfolg bei der Investition in und der Nutzung von ETC!

---

** Kodex ist Gesetz **
