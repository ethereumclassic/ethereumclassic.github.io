---
title: Madencilik Donanım Kılavuzu
contributors:
  - "IstoraMandiri"
  - "wpwrak"
updated: 2022-02-22
contribute: true
seo: ETHash vs ETCHash, SHA3, GPU'lar ve ASIC'leri kapsayan Ethereum Classic Madenciliği için Donanım Gereksinimlerinin kısa bir açıklaması.
---

Ethereum Classic madenciliği, Ethereum madenciliği ile neredeyse aynıdır ve aynı donanım ve madencilik yazılımını destekler. Yakın zamanda tahliye edilmiş bir Ethereum madencisiyseniz, Ethereum Classic madencilerini sever ve sizi memnuniyetle karşılar ve sadece Ethereum Classic'i destekleyen bir [madencilik havuzuna](/mining/pools) geçerek mevcut donanımınızı kullanarak ETC madenciliğine başlayabilirsiniz.

## ETCHash

ETC Madencilik algoritması, Ethereum'un ETHash algoritmasıyla neredeyse aynıdır ve küçük bir yükseltmeyle daha madenci dostu hale getirilmiştir. 2020'nin sonlarında, [Thanos yükseltmesi](/blog/2020-11-27-thanos-hard-fork-upgrade)sırasında ETC, ETHash algoritmasını ETCHash olarak bilinen algoritmaya dönüştüren [ECIP-1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099)uygulamıştır.

Temel olarak, 2020'de Ethereum'un DAG'ı 4 GB'ı aştı, bu da 4 GB belleğe sahip birçok GPU'nun ETH madenciliğine devam edemeyeceği anlamına geliyor. Buna karşılık Ethereum Classic, 4 GB'lık kartların [yaklaşık 2025 ortalarına](https://minerstat.com/dag-size-calculator)kadar ETC madenciliğine devam edebilmesini sağlamak için algoritmasını değiştirdi.

## Donanım Gereksinimleri

Karlı bir şekilde Ethereum Classic madenciliği yapmak için kullanılabilecek iki ana donanım türü vardır.

### GPU'lar

Genel olarak, Ethereum Classic madenciliği için en iyi grafik kartları, en az 4 GB belleğe sahip, güç açısından en verimli kartlardır. Bir GPU seçmeden önce, özellikle ETCHash madenciliği hakkındaki incelemelere bakın. Öneriler için "Ethereum Classic madenciliği için [mevcut yıl] en iyi GPU'lar" için çevrimiçi arama yapabilir ve daha fazla bilgi için [WhatToMine](https://whattomine.com/coins?e4g=true) adresini ziyaret edebilirsiniz.

### ASIC'ler

ASIC'ler veya Uygulamaya Özel Entegre Devreler, adından da anlaşılacağı üzere, yalnızca belirli bir algoritmayı çıkarmak için tasarlanmış özel olarak üretilmiş çiplerdir. Başlangıçta, DAG'ın bellek yoğun gereksinimleri nedeniyle ETHash, ASIC'lere karşı oldukça dirençliydi, ancak zamanla, tüm karlı algoritmalar gibi, ETHash için ASIC'ler inşa etmek için büyük bir teşvik vardı ve bu da piyasaya çıktı.

Bir dizi ASIC madencisi Ethereum Classic mevcuttur ve "ETHash ASIC Madencileri" için çevrimiçi arama yaparak bulunabilir ve ETCHash'i destekleyip desteklemediğine dair üreticinin özelliklerini kontrol edin.

## Destek

ETC topluluğundaki diğer madencilerden daha fazla yardım ve rehberlik almak için [Discord](https://ethereumclassic.org/discord)adresindeki #mining kanalından ulaşabilirsiniz.
