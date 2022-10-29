---
title: Guide du matériel minier
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Une brève explication des exigences matérielles pour le minage d'Ethereum Classic, couvrant ETHash vs ETCHash, SHA3, GPUs et ASICs.
---

L'extraction d'Ethereum Classic est presque identique à l'extraction d'Ethereum, et prend en charge le même matériel et le même logiciel d'extraction. Si vous êtes un mineur d'Ethereum récemment expulsé, Ethereum Classic aime ses mineurs et vous accueille, et vous pouvez commencer à miner de l'ETC en utilisant votre matériel existant en passant simplement à un pool minier [](/mining/pools) qui prend en charge Ethereum Classic.

## ETCHash

L'algorithme d'ETC Mining est presque identique à celui d'ETHash d'Ethereum, avec une petite mise à niveau qui le rend plus convivial pour les mineurs. À la fin de 2020, pendant la mise à niveau de Thanos [](/blog/2020-11-27-thanos-hard-fork-upgrade), ETC a mis en œuvre [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), qui a modifié l'algorithme ETHash pour le rendre connu sous le nom d'ETCHash.

En gros, en 2020, le DAG d'Ethereum a dépassé 4 Go, ce qui signifie que de nombreux GPU dotés de 4 Go de mémoire seraient incapables de continuer à extraire de l'ETH. En réponse, Ethereum Classic a modifié son algorithme afin de garantir que les cartes de 4 Go puissent continuer à extraire de l'ETC jusqu'à [, vers la mi-2025](https://minerstat.com/dag-size-calculator).

## Exigences matérielles

Il existe deux principaux types de matériel qui peuvent être utilisés pour exploiter de manière rentable Ethereum Classic.

### GPUs

En général, les meilleures cartes graphiques pour miner Ethereum Classic sont les cartes les plus économes en énergie et dotées d'au moins 4 Go de mémoire. Avant de choisir un GPU, recherchez les avis concernant spécifiquement le minage de ETCHash. Vous pouvez rechercher en ligne les "meilleurs GPU pour le minage d'Ethereum Classic en [année en cours]" pour obtenir des suggestions, et visiter le site [WhatToMine](https://whattomine.com/coins?e4g=true) pour plus d'informations.

### ASICs

Les ASIC (Application Specific Integrated Circuits) sont des puces spécialement fabriquées qui sont conçues, comme leur nom l'indique, pour exploiter un seul algorithme spécifique. À l'origine, en raison des exigences de mémoire du DAG, ETHash était assez résistant aux ASICs, mais avec le temps, comme pour tous les algorithmes rentables, il y a eu une forte incitation à construire des ASICs pour ETHash, qui sont arrivés sur le marché.

Une gamme de mineurs ASIC Ethereum Classic est disponible et peut être trouvée en recherchant en ligne "ETHash ASIC Miners", et vérifiez les spécifications du fabricant pour savoir s'il supporte ETCHash.

## Soutien

Pour obtenir l'aide et les conseils d'autres mineurs de la communauté ETC, vous pouvez vous adresser au canal #mining sur le Discord [](https://ethereumclassic.org/discord).
