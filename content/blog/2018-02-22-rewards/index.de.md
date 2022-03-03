---
title: "Über die Ethereum Classic-Mining-Belohnungen (mining rewards) mit der neuen Geldpolitik (Monetory Policy)"
date: 2018-02-22
author: Christian Seberino
contributors: ["cseberino"]
---

![](./1vFht2pfMD7lijWCGDpNEJA.png)

Die Miningprämien von Ethereum Classic (ETC) haben sich mit der neuen Geldpolitik geändert. Ich werde diese Änderungen und ihre Auswirkungen diskutieren.

### Die neue Formel

![](./194Fy4Fxt6Vtn24QMT78WrQ.jpeg)

ETC-Miners werden dafür belohnt, dass sie der ETC-Blockchain gültige Blöcke hinzugefügt haben. Diese Belohnungen bestehen aus drei Teilen:

**Base Rewards (Grund-Belohnung)** - Dieser Teil hängt von den Blocknummern ab. Es wird mit neu geschaffenen Mitteln bezahlt. Alle fünf Millionen Blöcke (ca. 2,5 Jahre) verringert sich dieser Anteil um 20%. Anfangs war es 5 ETC. Es wurde nach Blocknummer fünf Millionen in 4 ETC geändert. Nach Blocknummer zehn Millionen um April 2020 wird es wieder auf 3.2 ETC geändert.

Definieren Sie die Blockära _E_ in Abhängigkeit von der Blocknummer _N_ wie folgt (_//_ steht für Integer Division):

_E_ = (_N_ - 1)//5000000

Dann ist die Grundbelohnung wie folgt:

5 ⋅ 0.8*ᴱ*

**Uncle Rewards (Uncle-Belohnung)** - Dieser Teil hängt von der Anzahl der enthaltenen Uncle-Blöcke sowie von den Blocknummern ab. Es wird auch mit neu geschaffenen Mitteln bezahlt. Jeder Block kann höchstens zwei Uncle-Blöcke enthalten. Die Belohnung für jeden Uncle-Block beträgt zusätzlich 3,125% der Grundbelohnung. Es ist jetzt 0,125 ETC pro Uncle-Block und wird nach Blocknummer zehn Millionen in 0,1 ETC geändert.

Für die Blockära _E_ und die Anzahl der Uncle _U_ lautet die Gesamtbelohnung für den Uncle wie folgt:

0,03125 ⋅ _ U _ ⋅ (5 ⋅ 0,8 _ ᴱ _)

Nach Block Nummer fünf Millionen erhalten Miners, die die Uncle-Blöcke schaffen, dieselbe Belohnung pro Uncle-Block.

** Gas Rewards (Gas-Belohnung)** - Dieser Teil hängt von den enthaltenen Transaktionen ab. Es wird von den Ursprungskonten bezahlt. Die Miners führen die Transaktionen durch und erhalten Zahlungen für das benötigte Gas. Bei jeder Transaktion wird ein Preis pro Gaseinheit angegeben.

Für die Gasanforderungen *G*₁, *G*₂,*G*₃ ... und die Gaspreise *P*₁, *P₂, *P\*₃, ... ist die Gesamtgasbelohnung wie folgt:

*G*₁ ⋅ *P*₁ + *G*₂ ⋅ *P*₂ + *G*₃ ⋅ *P*₃ +…

Daher lautet die Gesamtbelohnung für das Erstellen eines Blocks wie folgt:

(1 + 0.03125 ⋅ _U_ ) ⋅ (5 ⋅ 0.8*ᴱ* ) + *G*₁ ⋅ *P*₁ + *G*₂ ⋅ *P*₂ + *G*₃ ⋅
*P*₃ + …

### Die Berechnungsbeispiele

![](./1CBy2Wk7IbkpmUgDkOwAceg.jpeg)

Hier ist ein Python-Skript, das diese Mining-Belohnungsformel verwendet, um Mining-Belohnungen zu berechnen:

    #!/usr/bin/env python3

    BASE_INITIAL  = 5
    BASE_PERCENT  = 0.8
    UNCLE_PERCENT = 0.03125
    N_ERA_BLOCKS  = 5e6

    def mining_reward(block_number, num_uncles, gas_reqs, gas_prices):
            """
            Calculates mining rewards from block information.  The gas
            information must be provided in lists or tuples.  The gas
            prices must be in ETC.
            """

            era           = (block_number + 1) // N_ERA_BLOCKS
            base_reward   = (BASE_PERCENT ** era) * BASE_INITIAL
            uncle_reward  = UNCLE_PERCENT * base_reward
            uncle_rewards = num_uncles * uncle_reward
            gas_rewards   = 0
            for (gas_req, gas_price) in zip(gas_reqs, gas_prices):
                    gas_rewards += gas_req * gas_price

            return base_reward + uncle_rewards + gas_rewards

Hier sind einige Beispielberechnungen für echte ETC-Blockchain-Daten:

    >>> mining_reward(5425392, 0, [], [])
    4.0

    >>> mining_reward(5423326, 1, [], [])
    4.125

    >>> mining_reward(5424471, 0, [36163, 36163] , [2e-8, 2e-8])
    4.00144652

    >>> mining_reward(5421363, 1, [21000, 21000, 21000, 21000, 21000], [5.5e-8, 2e-8, 2e-8, 1.6e-8, 1e-8])
    4.127541

### Das Gesamtangebot (Total Supply)

![](./1CI_LeLWUYbgI4AuYp3mj6A.png)

Die neue Geldpolitik begrenzt das Angebot von ETC. Beachten Sie, dass nur die Belohnungen der Base und des Uncle-Rewards das Angebot erhöhen, da die Gasbelohnungen nur vorhandene Gelder übertragen. Da die Uncle-Rewards unterschiedlich sind, kann das mögliche Gesamtangebot an ETC nur annähernd angegeben werden.

Die Formel für die zukünftige Erhöhung des Angebots pro Epoche unter der Annahme einer konstanten Anzahl von Onkelblöcken lautet wie folgt:

5000000 ⋅ (1 + 2 ⋅ 0.03125 ⋅ _U_ ) ⋅ (5 ⋅ 0.8*ᴱ* )

Der Faktor von 2 ist erforderlich, um die Rewards des Erstellers des Uncle-Blockes einzuschließen. Das Gesamtangebot kann aus dieser Formel geschätzt werden, indem die Beiträge für die verbleibenden Epochen addiert werden. Die Ära 192, die in etwa 456 Jahren eintreten wird, ist die letzte Ära, die das Angebot erhöht.

Unter der Annahme, dass keine Uncle-Blöcke mehr vorhanden sind, ergibt sich eine Untergrenze von etwa 198,3 Millionen ETC. Unter der Annahme der maximalen Anzahl von Uncleblöcken ergibt sich eine Obergrenze von etwa 210,6 Millionen ETC.

### Das Fazit

![](./18EYoI0_aQoGf6OCPsLK_GQ.jpeg)

Die neue Geldpolitik verändert die Mining-Rewards und begrenzt das Gesamtangebot an ETC. Hoffentlich sind jetzt alle Details klarer.

### Die Feedback

Sie können mich kontaktieren, indem Sie auf eines der folgenden Symbole klicken:

![](./0*eoFC6QOWZ--bCngK.png)

![](./0*i3CwTFEKUnKYHMf0.png)

![](./0*HQj6HSHxE7pkIBjk.png)

### Die Danksagung

Ich möchte IOHK (Input Output Hong Kong) für die Finanzierung dieser Bemühungen danken.

### Lizenz

![](./0*hocpUZXBcjzNJeQ2.png)

Diese Arbeit unterliegt der Creative Commons Attribution ShareAlike 4.0 International-Lizenz.
