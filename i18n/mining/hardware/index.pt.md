---
title: Guia de hardware de mineração
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: Uma breve explicação dos requisitos de hardware para mineração Ethereum Classic, cobrindo ETHash vs ETCHash, SHA3, GPUs e ASICs.
---

A mineração Ethereum Classic é quase idêntica à mineração Ethereum e suporta o mesmo hardware e software de mineração. Se você é um minerador Ethereum recentemente despejado, o Ethereum Classic ama seus mineradores e lhe dá as boas-vindas, e você pode começar a minerar ETC usando seu hardware existente simplesmente mudando para um pool de mineração [](/mining/pools) que suporta Ethereum Classic.

## ETCHash

O algoritmo ETC Mining é quase idêntico ao ETHash da Ethereum, com uma pequena atualização que o tornou mais amigável ao minerador. No final de 2020, durante a atualização [Thanos](/blog/2020-11-27-thanos-hard-fork-upgrade), a ETC implementou [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099), que ajustou o algoritmo ETHash no que ficou conhecido como ETCHash.

Basicamente, em 2020, o DAG da Ethereum ultrapassou 4 GB, o que significa que muitas GPUs com 4 GB de memória seriam incapazes de continuar minerando ETH. Em resposta, o Ethereum Classic ajustou seu algoritmo para garantir que cartões com 4 GB pudessem continuar minerando ETC até [aproximadamente em meados de 2025](https://minerstat.com/dag-size-calculator).

## Requisitos de Hardware

Existem dois tipos principais de hardware que podem ser usados para extrair lucro do Ethereum Classic.

### GPUs

Geralmente, as melhores placas gráficas para minerar Ethereum Classic são as placas mais eficientes em termos de energia com pelo menos 4 GB de memória. Antes de escolher uma GPU, procure comentários especificamente sobre a mineração ETCHash. Você pode pesquisar online pelas "Melhores GPUs para minerar Ethereum Classic em [ano atual]" para obter sugestões e visitar [WhatToMine](https://whattomine.com/coins?e4g=true) para obter mais informações.

### ASIC

ASICs, ou Application Specific Integrated Circuits, são chips especialmente fabricados que são projetados, como o nome sugere, para minerar apenas um algoritmo específico. Originalmente, devido aos requisitos de memória intensa do DAG, o ETHash era bastante resistente a ASICs, mas com o tempo, como todos os algoritmos lucrativos, houve um grande incentivo para construir ASICs para ETHash, que chegou ao mercado.

Uma variedade de mineradores ASIC Ethereum Classic está disponível e pode ser encontrada pesquisando online por "ETHash ASIC Miners" e verifique as especificações do fabricante para saber se ele suporta ETCHash.

## Apoiar

Para obter mais ajuda e orientação de outros mineradores da comunidade ETC, você pode entrar em contato no canal #mining em [Discord](https://ethereumclassic.org/discord).
