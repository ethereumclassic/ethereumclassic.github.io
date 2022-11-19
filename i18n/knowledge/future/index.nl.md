---
title: Future Classic
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Een overzicht van de toekomstige ontwikkelingsroadmap en hoe beslissingen worden genomen in het Ethereum Classic ecosysteem, gebaseerd op zijn geschiedenis, principes.
---

In tegenstelling tot veel andere blockchainprojecten, heeft Ethereum Classic geen centraal organisatiecomité dat de lakens uitdeelt, dus wat in het protocol wordt geïmplementeerd wordt bepaald door een organisch, meritocratisch, opkomend systeem, in plaats van top-down. Hoewel deze aanpak in eerste instantie niet is ontworpen om een explosieve groei op te leveren, wordt de afweging gemaakt voor duurzaamheid op lange termijn, en de volharding van Ethereum Classic heeft het in een sterke positie gebracht voor de volgende groeifase wanneer netwerkeffecten de adoptie beginnen te sneeuwballen.

In dit deel wordt dit proces uiteengezet, wordt een overzicht gegeven van de huidige toestand van ETC en wordt kort ingegaan op enkele potentiële upgrades die momenteel worden besproken en die in het verschiet liggen voor ETC.

## Upgradeproces

Ethereum Classic heeft, net als Bitcoin, geen roadmap in de traditionele zin van softwareontwikkeling, maar eerder een proces waarbij goede functies kunnen worden geïmplementeerd als en wanneer ze zich aandienen en worden goedgekeurd door de gemeenschap.

### ECIP's

Het [Ethereum Classic Improvement Proposal (ECIP) proces](/development/ecips) is hoe upgrades voor Ethereum Classic worden besproken en rigoureus doorgelicht door de ontwikkelaarsgemeenschap. Dit proces is open, en iedereen kan bijdragen door een ECIP op te stellen die op een dag in Ethereum Classic kan worden opgenomen.

### Beweeg langzaam & Maak geen dingen kapot

Gewoonlijk vereist de implementatie van nieuwe functies overweldigende steun of tenminste geen significante tegenstand van de Ethereum Classic gemeenschap, waardoor ETC, net als BTC, vrij voorzichtig is in zijn technologische ontwikkeling. Omdat er geen centrale groep is die de beslissingen over de uit te voeren upgrades beïnvloedt, betekent de dreiging van een splitsing van de keten als gevolg van aanzienlijke tegenwerking dat Hard Forks op ETC meestal veilig, incrementeel en vooral oncontroversieel zijn.

In plaats van een "snel handelen en dingen kapot maken"-mentaliteit, die financiële schade kan veroorzaken als het fout gaat, worden belangrijke updates doorgaans over lange perioden overwogen, verfijnd en getest voordat ze in het protocol worden opgenomen, zodat er een goede consensus kan worden bereikt _voordat_ een fork tot stand komt.

Daarnaast wordt er zoveel mogelijk voor gezorgd dat contracten die al in 2015 zijn ingezet, eeuwig trouw kunnen blijven functioneren en dat _Code is Law_ wordt gehandhaafd.

Dit betekent niet dat ETC niet in staat is opportunistisch te innoveren. Een van die voorbeelden is de [Thanos fork](/knowledge/forks#thanos), die profiteerde van de toenemende DAG-omvang van Ethereum door de beveiliging op te vegen door een anders verlaten categorie GPU's in staat te stellen ETC te delven, wat een gemakkelijke win-win upgrade was voor Ethereum Classic.

### Geërfde innovatie

Ethereum Classic handhaaft de compatibiliteit met Ethereum Virtual Machine, het erft alle innovaties die op andere EVM-ketens plaatsvinden, waaronder contractsystemen, tooling voor ontwikkelaars, bibliotheken en andere algemene concepten die gefinancierd zijn door en voornamelijk ontwikkeld zijn voor deze andere ketens.

Optimistic Rollups, een veelbelovende Layer 2-technologie die de schaalbaarheid verhoogt via off-chain transacties, is hiervan een uitstekend voorbeeld. Dankzij de aard van Vrije Open Source Software werden miljoenen dollars aan onderzoek en ontwikkeling besteed door projecten en teams die geen band hadden met Ethereum Classic. Deze innovatie, dankzij veralgemeende EVM-compatibiliteit, heeft het nut en de waarde van ETC indirect vergroot.

### Ethereum als testnet

Een voordeel van deze aanpak is dat Ethereum Classic kan toekijken hoe andere ketens het risico nemen om nieuwe functies te implementeren. Pas nadat is gebleken dat zij veilig en doeltreffend zijn, kunnen goede voorzieningen worden ingevoerd met minimale risico's en ontwikkelingsinspanningen.

Op deze manier kunnen andere EVM-ketens worden gezien als gestimuleerde testnetten van Ethereum Classic, met veel rigoureuzere tests dan een traditioneel testnet zou kunnen bieden.

## Vooruitblik

Het jaar 2022 is nog maar net begonnen en ETC begint het jaar met een golf van activiteit. Een litanie van nieuwe [apps](/services/apps) en gebruikers zijn organisch samengekomen, en het ETC-ecosysteem begint tekenen van netwerkeffecten te vertonen, die de adoptie zullen doen toenemen naarmate het netwerk nuttiger en waardevoller wordt.

De recente groei is deels te danken aan een groeiend leger van Ethereum Classic content creators en influencers die [video's](/videos) en memes hebben gemaakt en de adoptie via sociale media hebben gestimuleerd.

### De samenvoeging

Ethereum™ mainnet keten, hoewel het enkele kleine vertragingen ondervindt, lijkt steeds dichter bij het voltooien van een migratie van Proof of Work naar Proof of Stake, bekend als _The Merge_. Voor Ethereum Classic zal dit een uiterst relevante gebeurtenis zijn, omdat het waarschijnlijk is dat nieuw weggejaagde GPU-miners naar andere ketens zullen kijken om te mijnen, en Ethereum Classic is een voor de hand liggende keuze.

De migratie van miners van ETH naar ETC zal waarschijnlijk een nieuwe golf van interesse naar het Ethereum Classic ecosysteem brengen, de veiligheid van het netwerk verhogen en de adoptie en netwerkwaarde versnellen.

Bovendien, als er op korte termijn problemen zijn tijdens of na "The Merge", misschien als gevolg van onvoorziene speltheoretische problemen of protocol exploits door extra complexiteit, zal Ethereum Classic klaar staan om een fallback keten te bieden die op het beproefde Ethereum protocol van vandaag blijft. Op lange termijn zal de overgang naar Proof of Stake waarschijnlijk resulteren in een verdere centralisatie van Ethereum™ mainnet, wat het kwetsbaar maakt voor andere soorten sociale aanvallen, waar ETC weer immuun voor blijft.

### EVM-versie

Aangezien Ethereum Classic ernaar streeft _Code is Law_ nog vele decennia, zo niet eeuwen, te behouden, zal een functie van groot nut die van _versioning_ van ingezette contracten zijn. Dit biedt verschillende belangrijke voordelen voor de werking en het onderhoud op lange termijn van Ethereum Classic, met name dat het veel gemakkelijker is om de code _te onderhouden Wet_ , terwijl er toch flexibiliteit is om de uitvoering van contracten in de toekomst te upgraden.

In plaats van zich zorgen te maken over de vraag of een protocolwijziging, zoals het opnieuw prijzen van gas, oude contracten zou breken, zou versiebeheer betekenen dat de ingezette code gegarandeerd altijd draait op een compatibele versie van de EVM op basis van het bloknummer waarop zij is ingezet. Bovendien zouden toekomstige contracten kunnen kiezen voor functionaliteit die anders oude contracten zou breken, wat betekent dat Ethereum Classic nieuwe technologie zoals handtekeningschema's kan aanbieden, opcodegedrag kan toevoegen of wijzigen, enzovoort, zonder bestaande toepassingen te beïnvloeden.

Ook al draaien ze op een andere versie van de EVM, toekomstige contracten zouden nog steeds kunnen communiceren met oude contracten via dezelfde (of vertaalde) API om de interoperabiliteit te behouden. Er lijkt geen duidelijk nadeel aan versiebeheer te kleven, behalve de extra complexiteit die nodig is om het uit te voeren.

### Laag 2

Het wordt steeds duidelijker dat de enige redelijke manier om blockchains te schalen is in lagen. Het Lightning Network van Bitcoin voert dit veelbelovende nieuwe domein aan, Ethereum volgt in de vorm van State Channels, Optimistic Rollups, zk-Rollups en andere opkomende technologieën.

Laag 2 belooft voldoende waarborgen te bieden voor decentralisatie en vertrouwelijkheid, met een veel grotere transactiedoorvoer door de toestand buiten de keten te beheren en de basisketen te gebruiken voor de afwikkeling van deze toestand. In theorie is er geen bovengrens aan het aantal transacties per seconde in veel Layer 2-systemen, en kan worden voldaan aan de eisen inzake gebruik op beschavingsschaal.

Met Ethereum Classic's EVM en inzet voor Proof of Work die uiteindelijk de mijnbouw in ETCHash zal domineren, zal het een van de weinige keuzes zijn voor een Sovereign Grade basislaag die een volledige reeks L2-oplossingen kan ondersteunen.
