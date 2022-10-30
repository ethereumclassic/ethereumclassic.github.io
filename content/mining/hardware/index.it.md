---
title: Guida all'hardware per l'estrazione mineraria
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Una breve spiegazione dei requisiti hardware per il mining di Ethereum Classic, che comprende ETHash vs ETCHash, SHA3, GPU e ASIC.
---

Il mining di Ethereum Classic è quasi identico a quello di Ethereum e supporta lo stesso hardware e lo stesso software di mining. Se siete un minatore di Ethereum recentemente sfrattato, Ethereum Classic ama i suoi minatori e vi dà il benvenuto, e potete iniziare a minare ETC utilizzando il vostro hardware esistente semplicemente passando a un mining pool [](/mining/pools) che supporta Ethereum Classic.

## ETCHash

L'algoritmo di mining dell'ETC è quasi identico a quello dell'ETHash di Ethereum, con un piccolo aggiornamento che lo ha reso più adatto ai minatori. Alla fine del 2020, durante l'aggiornamento di [Thanos](/blog/2020-11-27-thanos-hard-fork-upgrade), ETC ha implementato [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), che ha modificato l'algoritmo ETHash in quello che è diventato noto come ETCHash.

In pratica, nel 2020 il DAG di Ethereum ha superato i 4 GB, il che significa che molte GPU con 4 GB di memoria non sarebbero in grado di continuare a estrarre ETH. In risposta, Ethereum Classic ha modificato il suo algoritmo per garantire che le schede con 4 GB siano in grado di continuare il mining di ETC fino a [circa la metà del 2025](https://minerstat.com/dag-size-calculator).

## Requisiti hardware

Esistono due tipi principali di hardware che possono essere utilizzati per estrarre con profitto Ethereum Classic.

### GPU

In generale, le migliori schede grafiche per il mining di Ethereum Classic sono quelle più efficienti dal punto di vista energetico e con almeno 4 GB di memoria. Prima di scegliere una GPU, cercate recensioni specifiche sul mining di ETCHash. È possibile cercare online le "Migliori GPU per il mining di Ethereum Classic in [anno corrente]" per ottenere suggerimenti e visitare [WhatToMine](https://whattomine.com/coins?e4g=true) per ulteriori informazioni.

### ASIC

Gli ASIC, o Application Specific Integrated Circuits, sono chip realizzati appositamente e progettati, come suggerisce il nome, per estrarre un algoritmo specifico. In origine, a causa dei requisiti di memoria del DAG, ETHash era piuttosto resistente agli ASIC, ma col tempo, come tutti gli algoritmi redditizi, c'è stato un grande incentivo a costruire ASIC per ETHash, che sono arrivati sul mercato.

È disponibile una serie di minatori ASIC Ethereum Classic che possono essere trovati cercando online "ETHash ASIC Miners" e verificando le specifiche del produttore per sapere se supporta ETCHash.

## Supporto

Per ulteriori aiuti e indicazioni da parte di altri minatori della comunità ETC, potete contattare il canale #mining su [Discord](https://ethereumclassic.org/discord).
