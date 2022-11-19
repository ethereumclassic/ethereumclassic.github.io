---
title: Hardware-Leitfaden für den Bergbau
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Eine kurze Erläuterung der Hardware-Anforderungen für das Mining von Ethereum Classic, einschließlich ETHash vs. ETCHash, SHA3, GPUs und ASICs.
---

Das Mining von Ethereum Classic ist fast identisch mit dem Mining von Ethereum und unterstützt die gleiche Hardware und Mining-Software. Wenn Sie ein Ethereum-Miner sind, der vor kurzem aus dem Verkehr gezogen wurde, liebt Ethereum Classic seine Miner und heißt Sie willkommen. Sie können mit Ihrer vorhandenen Hardware mit dem Mining von ETC beginnen, indem Sie einfach zu einem [Mining-Pool](/mining/pools) wechseln, der Ethereum Classic unterstützt.

## ETCHash

Der ETC-Mining-Algorithmus ist fast identisch mit dem ETHash von Ethereum, mit einem kleinen Upgrade, das ihn minerfreundlicher macht. Ende 2020, während des [Thanos-Upgrades](/blog/2020-11-27-thanos-hard-fork-upgrade), implementierte ETC [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), mit dem der ETHash-Algorithmus zu dem weiterentwickelt wurde, was als ETCHash bekannt wurde.

Im Jahr 2020 übersteigt die DAG von Ethereum 4 GB, was bedeutet, dass viele GPUs mit 4 GB Speicher nicht mehr in der Lage sind, ETH zu schürfen. Als Reaktion darauf hat Ethereum Classic seinen Algorithmus angepasst, um sicherzustellen, dass Karten mit 4 GB in der Lage sind, ETC bis [etwa Mitte 2025](https://minerstat.com/dag-size-calculator)zu schürfen.

## Hardware-Anforderungen

Es gibt zwei Haupttypen von Hardware, die zum gewinnbringenden Mining von Ethereum Classic verwendet werden können.

### GPUs

Im Allgemeinen sind die besten Grafikkarten zum Mining von Ethereum Classic die leistungsfähigsten Karten mit mindestens 4 GB Speicher. Bevor Sie sich für einen Grafikprozessor entscheiden, sollten Sie nach Bewertungen speziell zum Mining von ETCHash suchen. Sie können online nach "Best GPUs for mining Ethereum Classic in [current year]" suchen, um Vorschläge zu erhalten, und besuchen Sie [WhatToMine](https://whattomine.com/coins?e4g=true) für weitere Informationen.

### ASICs

ASICs (Application Specific Integrated Circuits, anwendungsspezifische integrierte Schaltungen) sind speziell hergestellte Chips, die, wie der Name schon sagt, nur für einen bestimmten Algorithmus ausgelegt sind. Ursprünglich war ETHash aufgrund der speicherintensiven Anforderungen des DAG ziemlich resistent gegen ASICs, aber mit der Zeit gab es, wie bei allen profitablen Algorithmen, einen großen Anreiz, ASICs für ETHash zu bauen, die dann auch auf den Markt kamen.

Es gibt eine Reihe von ASIC-Minern für Ethereum Classic, die Sie finden können, indem Sie online nach "ETHash ASIC Miner" suchen und in den Spezifikationen des Herstellers nachsehen, ob er ETCHash unterstützt.

## Unterstützung

Für weitere Hilfe und Anleitung durch andere Miner in der ETC-Community können Sie sich im #mining-Kanal auf [Discord](https://ethereumclassic.org/discord)melden.
