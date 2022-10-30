---
title: Gids voor mijnbouwhardware
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Een korte uitleg over de hardwarevereisten voor het delven van Ethereum Classic, met aandacht voor ETHash vs ETCHash, SHA3, GPU's en ASIC's.
---

Het delven van Ethereum Classic is bijna identiek aan het delven van Ethereum, en ondersteunt dezelfde hardware en mijnsoftware. Als u een onlangs uitgezette Ethereum-miner bent, houdt Ethereum Classic van zijn miners en heet u welkom, en u kunt beginnen met het delven van ETC met uw bestaande hardware door gewoon over te schakelen naar een [mining pool](/mining/pools) die Ethereum Classic ondersteunt.

## ETCHash

Het ETC Mining-algoritme is bijna identiek aan ETHash van Ethereum, met een kleine upgrade die het meer miner-vriendelijk maakt. Eind 2020, tijdens de [Thanos-upgrade](/blog/2020-11-27-thanos-hard-fork-upgrade), implementeerde ETC [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), waarbij het ETHash-algoritme werd getweakt tot wat bekend werd als ETCHash.

Het komt erop neer dat de DAG van Ethereum in 2020 meer dan 4 GB bedraagt, wat betekent dat veel GPU's met 4 GB geheugen niet meer in staat zijn om ETH te delven. In reactie daarop heeft Ethereum Classic zijn algoritme aangepast om ervoor te zorgen dat kaarten met 4 GB in staat zouden zijn om ETC te blijven delven tot [ongeveer medio 2025](https://minerstat.com/dag-size-calculator).

## Hardwarevereisten

Er zijn twee belangrijke soorten hardware die kunnen worden gebruikt om Ethereum Classic met winst te delven.

### GPU's

Over het algemeen zijn de beste grafische kaarten om Ethereum Classic te mijnen de meest energie-efficiënte kaarten met minstens 4 GB geheugen. Zoek, voordat u een GPU kiest, naar recensies die specifiek gaan over het delven van ETCHash. U kunt online zoeken naar de "Beste GPU's voor het delven van Ethereum Classic in [huidig jaar]" voor suggesties, en bezoek [WhatToMine](https://whattomine.com/coins?e4g=true) voor meer info.

### ASIC's

ASIC's, of Application Specific Integrated Circuits, zijn speciaal vervaardigde chips die, zoals de naam al aangeeft, zijn ontworpen om slechts één specifiek algoritme te ontginnen. Oorspronkelijk was ETHash, door de geheugenintensieve vereisten van de DAG, redelijk bestand tegen ASIC's, maar mettertijd was er, zoals bij alle winstgevende algoritmen, een grote stimulans om ASIC's te bouwen voor ETHash, die wel op de markt kwamen.

Een reeks ASIC-miners Ethereum Classic zijn beschikbaar en kunnen worden gevonden door online te zoeken naar "ETHash ASIC Miners", en controleer de specificatie van de fabrikant of deze ETCHash ondersteunt.

## Steun

Voor verdere hulp en begeleiding van andere mijnwerkers in de ETC-gemeenschap kun je terecht in het #mining-kanaal op [Discord](https://ethereumclassic.org/discord).
