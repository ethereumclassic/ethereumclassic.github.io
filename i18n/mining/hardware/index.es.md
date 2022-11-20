---
title: Guía de hardware para la minería
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Una breve explicación de los requisitos de hardware para el minado de Ethereum Classic, cubriendo ETHash vs ETCHash, SHA3, GPUs y ASICs.
---

La minería de Ethereum Classic es casi idéntica a la minería de Ethereum, y soporta el mismo hardware y software de minería. Si eres un minero de Ethereum recientemente desahuciado, Ethereum Classic ama a sus mineros y te da la bienvenida, y puedes empezar a minar ETC usando tu hardware existente simplemente cambiando a un pool de minería [](/mining/pools) que soporte Ethereum Classic.

## ETCHash

El algoritmo de minería de ETC es casi idéntico al de ETHash de Ethereum, con una pequeña actualización que lo hace más amigable para los mineros. A finales de 2020, durante la actualización de [Thanos](/blog/2020-11-27-thanos-hard-fork-upgrade), ETC implementó [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), que retocó el algoritmo de ETHash en lo que se conoció como ETCHash.

Básicamente, en 2020, el DAG de Ethereum superó los 4 GB, lo que significa que muchas GPU con 4 GB de memoria no podrían seguir minando ETH. En respuesta, Ethereum Classic ajustó su algoritmo para garantizar que las tarjetas con 4 GB pudieran seguir minando ETC hasta [aproximadamente a mediados de 2025](https://minerstat.com/dag-size-calculator).

## Requisitos de hardware

Hay dos tipos principales de hardware que pueden utilizarse para minar Ethereum Classic de forma rentable.

### GPUs

Por lo general, las mejores tarjetas gráficas para minar Ethereum Classic son las de mayor eficiencia energética y con al menos 4 GB de memoria. Antes de elegir una GPU, busque reseñas específicas sobre el minado de ETCHash. Puedes buscar en Internet las "Mejores GPU para minar Ethereum Classic en [año actual]" para obtener sugerencias, y visitar [WhatToMine](https://whattomine.com/coins?e4g=true) para obtener más información.

### ASICs

Los ASIC, o Circuitos Integrados para Aplicaciones Específicas, son chips especialmente fabricados que están diseñados, como su nombre indica, para minar sólo un algoritmo específico. Al principio, debido a los intensos requisitos de memoria del DAG, ETHash era bastante resistente a los ASICs, pero con el tiempo, como todos los algoritmos rentables, hubo un gran incentivo para construir ASICs para ETHash, que llegaron al mercado.

Una gama de mineros ASIC Ethereum Classic están disponibles y se puede encontrar mediante la búsqueda en línea para "ETHash ASIC Miners", y comprobar la especificación del fabricante para saber si es compatible con ETCHash.

## Soporte

Para obtener más ayuda y orientación de otros mineros de la comunidad ETC, puedes contactar con el canal #mining en [Discord](https://ethereumclassic.org/discord).
