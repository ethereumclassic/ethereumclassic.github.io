---
title: MetaMask gebruiken met ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Een stap-voor-stap gids over hoe MetaMask te gebruiken met Ethereum Classic om ETC te versturen en te communiceren met gedecentraliseerde applicaties.
info: Dit artikel was [gemaakt door Etherplan](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Kijk voor meer Ethereum Classic tutorials, theorie en cryptocurrency concepten op [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

**⚠️ Update**  
U kunt nu gemakkelijk ETC toevoegen aan MetaMask door te klikken op "Connect-Wallet" op https://chainlist.org/en/chain/61.

U vindt deze link ook onderaan elke pagina van deze website.

---

[MetaMask](https://metamask.io) kan worden gebruikt als een portemonnee om uw ETC en tokens te beheren, maar ook om te communiceren met toepassingen die het ondersteunen. Dit bericht legt uit hoe u MetaMask kunt gaan gebruiken met het Ethereum Classic (ETC) netwerk.

U kunt ook [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1)overwegen, een fork van MetaMask die ETC out of the box ondersteunt.

## Stap 1: Aanmelden bij MetaMask

De eerste stap is inloggen om je MetaMask te ontgrendelen.

![Stap 1](./01.png)

## Stap 2: Bekijk het beginscherm

U ziet uw normale beginscherm. In dit geval is het standaardnetwerk Ethereum (ETH) en wordt uw rekening zoals gebruikelijk getoond. Als je andere netwerken gebruikt, zullen ze als standaard worden weergegeven wanneer je je MetaMask ontgrendelt, als ze de laatst gebruikte waren.

In mijn geval toont het Ethereum als het initiële netwerk, en ik heb een nulsaldo op mijn ETH-rekening `0x48c1...EfF3`.

![Stap 2](./02.png)

## Stap 3: Open het keuzemenu Netwerken

De volgende stap is het openen van het menu netwerken. U kunt dit doen door te klikken op de balk waar u het standaardnetwerk ziet.

Zoals hierboven te zien is, is de standaardlijst van netwerken het Ethereum mainnet en de populairste testnetten.

De "Local Host 8545" zou een verbinding zijn met een Ethereum-knooppunt als u er een in uw machine zou draaien.

"Aangepaste RPC" is de optie om aangepaste netwerken toe te voegen, in dit geval ETC.

"RPC" staat voor "remote procedure call", de term voor het protocol dat machines gebruiken voor programma's om andere programma's in verre machines aan te roepen.

![Stap 3](./03.png)

## Stap 4: Selecteer Aangepaste RPC

Dus, de volgende stap is te klikken op "Custom RPC".

![Stap 4](./04.png)

## Stap 5: Bekijk het nieuwe netwerkformulier

Na het selecteren van "Custom RPC" ziet u het formulier om een netwerk toe te voegen. Het heeft een beveiligingsmelding bovenaan en vijf opties met lege velden om het nieuwe netwerk in te voeren dat u wilt gebruiken:

- Netwerknaam: De naam van het netwerk dat u wilt toevoegen.
- Nieuwe RPC URL: Een URL voor de netwerk RPC die u wilt toevoegen.
- Chain ID: De ID om transacties te versturen en door te sturen naar het netwerk dat u wilt toevoegen.
- Valutasymbool (optioneel): Het valutasymbool van het netwerk dat u wilt toevoegen. Zo is "ETH" het symbool voor Ethereum, en "ETC" het symbool voor Ethereum Classic.
- Block Explorer URL (optioneel): MetaMask heeft links naar blockchain explorers per netwerk om account geschiedenis, nieuwe transacties verzonden, en saldi op hen te controleren, dus hier zou je een block explorer toevoegen voor het netwerk dat je wilt toevoegen.

![Stap 5](./05.png)

## Stap 6: Voer de Ethereum Classic netwerkinformatie in

De volgende stap is het toevoegen van de specifieke informatie van Ethereum Classic. Hieronder staan de netwerkgegevens die ik heb gebruikt:

- Netwerknaam: `Ethereum Classic`
- Nieuwe RPC URL: `https://www.ethercluster.com/etc`
- Ketting ID: `61`
- Valutasymbool (facultatief): `ETC`
- Blokkeer Explorer URL (optioneel): `https://blockscout.com/etc/mainnet/`

Voor de "RPC URL" heb ik de URL gebruikt die voor dit doel is verstrekt door de [ETC Cooperative](https://etccooperative.org/), die afkomstig is van een door hen gebouwd product dat [Ethercluster](https://ethercluster.com/)heet.

_[Redactie] Ethercluster wordt nu geëxploiteerd door [RIVET](https://rivet.cloud/). Meer RPC-eindpunten vindt u in de sectie [netwerk](/network/endpoints) ._

De "Chain ID" moet "61" zijn omdat dat de specifieke ID is van het Ethereum Classic netwerk voor het verzenden van ETC-transacties door wallets en nodes naar de werkende blockchain.

Hoewel het "symbool" en de "block explorer URL" optioneel zijn, raad ik aan "ETC" als symbool te gebruiken omdat dat het algemeen bekende marktsymbool van het netwerk is, en BlockScout als blockchain explorer omdat ik die meestal gebruik (maar u kunt uw voorkeur toevoegen!).

Klik op "opslaan" om ETC toe te voegen aan MetaMask.

![Stap 6](./06.png)

## Stap 7: Bekijk Ethereum Classic in het Networks Dropdown Menu

Zodra ETC is toegevoegd, ziet u in het keuzemenu netwerken dat het is toegevoegd aan de lijst met netwerken.

![Stap 7](./07.png)

## Stap 8: U kunt uw zelfde rekening bekijken maar op ETC

Als u naar uw rekening gaat, zult u merken dat die hetzelfde is als uw ETH-rekening. In mijn geval is het dezelfde `0x48c1...EfF3` rekening.

Dat komt omdat zowel ETH als ETC hetzelfde rekeningformaat gebruiken, zodat rekeningen op Ethereum ook in Ethereum Classic kunnen worden gebruikt.

In feite kunt u zich misschien herinneren dat ik een saldo van nul had op mijn ETH-rekening, maar nu is een saldo van 1 ETC te zien op dezelfde rekening, maar dan op Ethereum Classic. Dat komt omdat ik voor deze demonstratie 1 ETC naar deze rekening in het Ethereum Classic netwerk heb gestuurd.

Merk ook op dat het ETC-netwerk nu het netwerk is dat wordt weergegeven in de netwerkbalk, en het "ETC"-symbool wordt nu gebruikt om het saldo weer te geven.

![Stap 8](./08.png)

## Stap 9: U kunt teruggaan naar Ethereum met dezelfde rekening

Aangezien beide netwerken hetzelfde rekeningformaat gebruiken, kunt u dus teruggaan naar het Ethereum mainnet en zult u uw ETH-rekening weer met hetzelfde nummer kunnen zien.

![Stap 9](./09.png)

## Stap 10: U kunt teruggaan naar Ethereum Classic met dezelfde rekening

Om het ETC-netwerk te gebruiken, selecteert u gewoon weer Ethereum Classic in het dropdownmenu van de netwerken, waar u uw ETC-saldi weer te zien krijgt.

![Stap 10](./10.png)

//

Ik wens u succes met het investeren in en gebruiken van ETC!

---

** Code is wet **
