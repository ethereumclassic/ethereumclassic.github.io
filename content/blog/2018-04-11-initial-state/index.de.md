---
title: "Die Ethereum Classic-Blockchain ist UNVOLLSTÄNDIG und warum ist das in Ordnung"
date: 2018-04-11
author: Christian Seberino
---
![](./1*TCmOW4bfexB2Ns21MBDDCw.jpeg)

Die Ethereum Classic (ETC) Blockchain enthält nicht alle Informationen, die für den Betrieb des ETC-Systemes erforderlich sind. Es enthält *implizit* alles, was benötigt wird! Ich möchte erläutern und diskutieren, wie damit umgegangen wird.

## Der Stand

![](./1*ZHk1y55a8LIXrBXyPQh6sw.jpeg)

Der Status des ETC-Systemes enthält alle Salden, Programme, Nonces und anderen Werte im Speicher. Diese Daten sind in *Konten* organisiert. Daher ist der Stand die Menge aller Kontowerte.

Blöcke enthalten Transaktionen, die Stand-*Änderungen * angeben. Wenn der Zustand zu irgendeinem Zeitpunkt bekannt ist, kann der Zustand für alle zukünftigen Zeiten bestimmt werden, indem die Transaktionen in den folgenden Blöcken analysiert werden. Die Blockchain gibt jedoch den Status für keine Zeit *vollständig* an! Zugegeben, alle Blöcke enthalten Status-Hashes. Aber diese Hashes sind *irreversibel*!

Der Anfangsstand für den ersten Block enthält Konten mit einem Saldo ungleich Null. Mit anderen Worten, nicht alle Gelder stammten aus dem Mining. Fragen Sie sich, wie die Miners den Kontostand kennen, wenn sie Kontotransfers mit diesen ursprünglich finanzierten Konten abwickeln? Die Antwort betrifft die ETC-Knotendatenbanken.

## Die Datenbank

![](./1*doVsSfjjDVsy5Sy9M7m2Xg.jpeg)

ETC-Knoten enthalten in der Regel Datenbanken, in denen die Blockchain sowie zusätzliche Informationen gespeichert sind. Beispielsweise verwenden Linux Parity ETC-Knotendatenbanken normalerweise das folgende Verzeichnis:

    $HOME/.local/share/io.parity.ethereum/chains/classic/db

Linux Geth ETC-Knotendatenbanken verwenden normalerweise das folgende Verzeichnis:

    $HOME/.ethereum-classic/mainnet/chaindata

Aus Leistungsgründen verwenden Parity und Geth nicht relationale (NoSQL) Schlüsselwertdatenbanken. Auf diese Datenbanken kann direkt zugegriffen werden. Sie können daher über die Web 3-Bibliothek aufgerufen werden.

## Die Lösung

![](./1*gGGUr4Xhyzo6Amcmzqc4ww.jpeg)

Alle ETC-Knoten müssen eine vollständige Spezifikation des Anfangsstandes für den ersten Block enthalten. Dies ist *zusätzlich* zur Blockchain erforderlich. Auf Geth ETC-Knoten befindet sich dieser Anfangszustand beispielsweise in der Datenbank und kann mit dem folgenden Befehl angezeigt werden:

    geth dump 0

## Das Fazit

![](./1*mfEpuxoLMi8OZwFXK7kYQw.png)

ETC-Knoten erfordern eine vollständige Angabe des Anfangszustandes für den ersten Block sowie der Blockchain. ETC-Knoten speichern diese Informationen normalerweise in Datenbanken. Nur mit diesen Informationen kann das ETC-System betrieben werden.

## Die Feedback

Sie können mich kontaktieren, indem Sie auf eines der folgenden Symbole klicken:

![](./0*eoFC6QOWZ--bCngK.png)

![](./0*i3CwTFEKUnKYHMf0.png)

![](./0*HQj6HSHxE7pkIBjk.png)

## Die Danksagung

Ich möchte IOHK (Input Output Hong Kong) für die Finanzierung dieser Bemühungen danken.

## Die Lizenz

![](./0*hocpUZXBcjzNJeQ2.png)