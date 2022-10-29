---
title: 채굴 하드웨어 가이드
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: ETHash 대 ETCHash, SHA3, GPU 및 ASIC을 다루는 Ethereum Classic 채굴을 위한 하드웨어 요구 사항에 대한 간략한 설명입니다.
---

이더리움 클래식 채굴은 이더리움 채굴과 거의 동일하며 동일한 하드웨어 및 채굴 소프트웨어를 지원합니다. 최근 퇴거된 이더리움 채굴자라면 이더리움 클래식은 채굴자를 사랑하고 환영하며, 이더리움 클래식을 지원하는 [채굴 풀](/mining/pools) 로 간단히 전환하여 기존 하드웨어를 사용하여 ETC 채굴을 시작할 수 있습니다.

## ETC해시

ETC Mining 알고리즘은 이더리움의 ETHash와 거의 동일하지만 약간의 업그레이드로 채굴자에게 더 친숙합니다. 2020년 말, [Thanos 업그레이드](/blog/2020-11-27-thanos-hard-fork-upgrade)동안 ETC는 [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099)을 구현하여 ETHash 알고리즘을 ETCHash로 알려진 것으로 조정했습니다.

기본적으로 2020년에는 이더리움의 DAG가 4GB를 초과했는데, 이는 4GB의 메모리를 가진 많은 GPU가 ETH를 계속 채굴할 수 없다는 것을 의미합니다. 이에 대한 응답으로 Ethereum Classic은 4GB의 카드가 대략 2025중반

까지 ETC를 계속 채굴할 수 있도록 알고리즘을 조정했습니다. 



## 하드웨어 요구 사항

이더리움 클래식을 수익성 있게 채굴하는 데 사용할 수 있는 두 가지 주요 하드웨어 유형이 있습니다.



### GPU

일반적으로 Ethereum Classic을 채굴하는 데 가장 좋은 그래픽 카드는 최소 4GB의 메모리가 있는 가장 전력 효율적인 카드입니다. GPU를 선택하기 전에 특히 ETCHash 채굴에 대한 리뷰를 찾으십시오. 제안을 위해 "[현재 연도]에 Ethereum Classic을 채굴하기 위한 최고의 GPU"를 온라인으로 검색하고 자세한 정보는 [WhatToMine](https://whattomine.com/coins?e4g=true) 을 방문하십시오.



### ASIC

ASICs 또는 Application Specific Integrated Circuits는 이름에서 알 수 있듯이 단 하나의 특정 알고리즘만 채굴하도록 설계된 특수 제조된 칩입니다. 원래 DAG의 메모리 집약적 요구 사항으로 인해 ETHash는 ASIC에 상당히 저항했지만 시간이 지남에 따라 모든 수익성 있는 알고리즘과 마찬가지로 시장에 출시된 ETHash용 ASIC을 구축하려는 큰 동기가 생겼습니다.

다양한 ASIC 채굴기 Ethereum Classic을 사용할 수 있으며 온라인에서 "ETHash ASIC Miners"를 검색하여 찾을 수 있으며 제조업체의 사양에서 ETCHash를 지원하는지 확인하십시오.



## 지원하다

ETC 커뮤니티의 다른 채굴자들로부터 더 많은 도움과 안내를 받으려면 [Discord](https://ethereumclassic.org/discord)의 #mining 채널에 연락할 수 있습니다.
