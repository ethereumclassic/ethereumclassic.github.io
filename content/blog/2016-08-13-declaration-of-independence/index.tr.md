---
title: Ethereum Klasik Bağımsızlık Bildirgesi
date: 2016-08-13
author: Ethereum Classic
tags:
  - "announcement"
  - "development"
  - "teams"
  - "hardfork"
  - "education"
---

20 Temmuz 2016'da 1.920.000 blokta, bağımsız bireylerden oluşan bir topluluk olarak, sansür, dolandırıcılık veya üçüncü şahıslardan gerçekten *bağımsız orijinal Ethereum blok zincirini sürdürmek için ortak bir vizyonda birleştiğimizi tüm dünya bilsin. müdahale*. Blok zincirinin mutlak gerçeği temsil ettiğini fark ederek, değişmezliğini ve geleceğini destekleyerek onun yanında yer alırız. Bu beyanı kolay kolay veya eylemlerimizin sonuçlarını önceden düşünmeden yapmıyoruz.

## Geriye bakmak

Ethereum Vakfı ve kurucu geliştiricileri tarafından Ethereum blockchain platformunun oluşturulmasını kabul ettiğimizi büyük bir minnetle belirtmeliyiz. Onların sıkı çalışması ve özverisi olmasaydı, bir topluluk olarak bugün bulunduğumuz yerde olmayacağımız kesinlikle itirazsız söylenebilir.

Başlangıcından itibaren Ethereum blok zinciri, "hiçbir dolandırıcılık, sansür veya üçüncü taraf müdahalesi şansı olmadan tam olarak programlandığı gibi çalışan uygulamalar" için merkezi olmayan bir platform olarak sunuldu [1]. Aynı zamanda takma ad sağlarken, ayrımcılık korkusu olmadan dünyanın dört bir yanından fikirlerin ve uygulamaların özgürce çağrıştırılmasına bir yer sağladı. Bu merkezi olmayan platformda çoğumuz büyük umutlar gördük.

## Şikayet Listesi

Bununla birlikte, derin bir üzüntüyle, bir topluluk olarak, özellikle Ethereum Vakfı'nın liderliği tarafından uzun bir suistimal zinciri nedeniyle, Ethereum blok zinciri platformunu kurucu üyelerinden ve organizasyonundan korumak için kendiliğinden [2] organize etmek zorunda kaldık. Bu şikayetler şu şekildedir:

- Yalnızca bir kara liste oluşturmak ve işlemleri sansürlemek amacıyla Ethereum blok zinciri kodunda küçük bir değişiklikten oluşan bir "yumuşak çatal" oluşturulmasını hızlandırmak için, normalde buna izin verilirdi.
- Ethereum blok zinciri tarafından "yumuşak çatal"ın tüm etkilerini, burada kodlanan ilke ve değerleri ihlal ettiklerine dair bir uyarı olarak ihmal etmek için [3]
- Hard fork'a karar vermeden bir gün önce bu ifadelerle çelişmek için başlangıçta "gayri resmi" [4] olduğunu belirttikleri "karbon oylaması" adı verilen temsili olmayan bir oylama mekanizması oluşturmak için [5]
- Ethereum blok zinciri kodunda değişmezlik, takas edilebilirlik ve defterin kutsallığı özelliklerini ihlal eden düzensiz bir durum değişikliğinden oluşan bir "hard fork" oluşturulmasını aceleye getirdiği için
- Yeniden oynatma korumasını "hard fork"a dahil etmemeye isteyerek karar verdiği için, bu eylem gereksiz yere borsalara ve binlerce kullanıcıya Ether tokenlerinin yasal mülkiyetine mal oldu [6]

## Blok Zincirleri İçin Temel Değerlere Saygı

Mantıksız bir soru olmayan, Ethereum blok zincirinin kodunu değiştirmenin ve [7] "DAO" token sahibini kurtarmanın ne zararı olabileceği sorulabilir. Birçoğumuzun doğuştan gelen bir doğru ve yanlış duygusu var, bu yüzden ilk bakışta "DAO" yu kurtarmak doğru geldi. Bununla birlikte, eşler arası nakit [8] ve akıllı sözleşme tabanlı sistemlere değer veren iki temel yönü ihlal etti: değiştirilebilirlik ve değişmezlik.

*Değişmezlik* , blok zincirinin dokunulmaz olduğu anlamına gelir. Ağ tarafından yalnızca matematik tarafından belirlenen bir kriptografik protokol aracılığıyla üzerinde anlaşmaya varılan geçerli işlemlerin kabul edilmesi. Bu olmadan, tüm işlemlerin geçerliliği sorgulanabilir, çünkü blok zinciri değişken ise herhangi bir işlem değiştirilebilir. Bu, işlemleri yalnızca dolandırıcılığa açık bırakmakla kalmaz, aynı zamanda platformun üzerinde çalışan herhangi bir dağıtılmış uygulama (Dapps) için felaket anlamına gelebilir.

*Değiştirilebilirlik* paranın bir birimin başka bir birime eşit olduğu özelliğidir. Örneğin, bir Bitcoin'in başka bir Bitcoin'e eşit olması gibi, bir Euro da başka bir Euro'ya eşittir. Ne yazık ki, bir ETH artık başka bir ETH'ye eşit değil. Saldırganın olduğu iddia edilen ETH'si artık sizin ETH'niz kadar iyi değildi ve sözde çoğunluk tarafından gerekli görülen sansürü hak ediyordu.

Nihayetinde, değiştirilebilirlik ve değişmezlikteki bu ihlaller, sözde saldırganı adalete teslim etmek için yakıcı bir istek duyanların öznel ahlaki yargılarıyla mümkün kılındı.

Ancak bunu yaparken, sadece "daha büyük iyilik" için düşündüklerini yapmak için Ethereum'un temel bir sütunundan taviz verdiler. Her bireyin kendi yasalarının, geleneklerinin ve inançlarının olduğu küresel bir toplumda neyin doğru neyin yanlış olduğunu kim söyleyecek? Bu temel ilkelerin Vakfın birçok geliştiricisi ve Ethereum katılımcılarının önemli bir kısmı tarafından göz ardı edilmesinden derinden endişe duyduk, biz topluluk olarak Ethereum Classic zinciri için izlenecek bir ilkeler kodu düzenledik ve oluşturduk.

## Ethereum Klasik İlkeler Kodu

*merkezi olmayan, sansüre dayanıklı, izinsiz* blok zincirine inanıyoruz. Ethereum'un kapatılamayan, geri dönüşü olmayan akıllı sözleşmeler yürüten bir dünya bilgisayarı olarak orijinal vizyonuna inanıyoruz. Kod tabanının sistem çatallarının yalnızca protokol düzeyindeki güvenlik açıklarını, hataları düzeltirken veya işlevsellik yükseltmeleri sağlarken mümkün olduğu durumlarda, endişelerin güçlü bir şekilde ayrılmasına inanıyoruz. *sansüre dayanıklı, güvenilir ve değişmez bir* geliştirme platformu oluşturmanın ve sürdürmenin asıl amacına inanıyoruz.

Burada, Ethereum Classic topluluğundaki katılımcıların kabul ettiği beyan edilen değerler yazılmıştır. Bu ilkelerin, bunu yapmak için güç, otorite veya güvenilirlik kullandığını iddia eden herhangi bir kişi veya grup tarafından ferman yoluyla değiştirilmemesini teşvik ediyoruz.

Topluluk olarak şu konuda hemfikiriz:

- Ethereum Classic'in amacı, *bir kesinti, sansür, dolandırıcılık veya üçüncü taraf müdahalesi olasılığı olmadan tam olarak programlandığı gibi çalışan merkezi olmayan uygulamaları çalıştıran merkezi olmayan bir platform sağlamaktır*
- kod yasadır; defteri kebirin *değişmezlik, değiştirilebilirlik veya kutsallık* özelliklerini ihlal eden Ethereum Classic kodunda herhangi bir değişiklik olmayacaktır; işlemler veya defter geçmişi hiçbir nedenle geri alınamaz veya değiştirilemez
- Çatallara ve/veya temel protokoldeki değişikliklere yalnızca Ethereum Classic'in üzerinde çalıştığı teknolojinin güncellenmesi veya yükseltilmesi için izin verilir.
- Dahili proje geliştirme, proje bazında ve şeffaf, açık ve merkezi olmayan bir kitle fonlaması protokolü izlenerek, kendi seçtikleri güvenilir bir üçüncü taraf aracılığıyla veya doğrudan, kendi seçtikleri para birimi kullanılarak herkes tarafından finanse edilebilir.
- herhangi bir birey veya birey grubu, mevcut veya önerilen Ethereum Classic varlıklarında iyileştirmeler, geliştirmeler veya yükseltmeler önerebilir
- herhangi bir kişi veya grup, Ethereum Classic merkezi olmayan platformunu merkezi olmayan uygulamalar oluşturmak, toplu satışlar düzenlemek, özerk kuruluşlar / şirketler oluşturmak veya uygun gördükleri başka herhangi bir amaç için kullanabilir.

## İleriye dönük

Yukarıda listelenen birçok nedenden dolayı, topluluğun ve diğer tüm katılımcıların orijinal, çatallanmamış ve değişmez blok zinciri platformunu tanımlayabilmesi için orijinal blok zincirini "ETC" kısaltma sembolüyle "Ethereum Classic" olarak yeniden adlandırmayı seçtik.

En içten şükranlarımızı, Ethereum blok zinciri defterine müdahale edilmesine karşı çıkan ve Ethereum Classic zincirinin hayatta kalmasını ve yaşamasını sağlayan Vakıf içindeki ve dışındaki geliştiricilere gönderiyoruz.

Birçoğunuz olduğunu biliyoruz ve merkezi olmayan topluluğumuza istediğiniz zaman katılmanızı bekliyoruz.

Ethereum Classic blok zinciri için merkezi olmayan yönetişim vizyonunu sürdüreceğiz ve özellikle Ethereum Classic zincirini artık geliştirmeyeceklerini defalarca ifade eden geliştiricilerin yanı sıra Ethereum Vakfı tarafından herhangi bir merkezi liderliğin devralınmasına karşı muhalefetimizi sürdüreceğiz.

Aynı şekilde “çoğunluğun zulmüne” de açıkça karşı koyacağız ve sistemin değerlerinden taviz verilmesine izin vermeyeceğiz. Birlik olmuş bir topluluk olarak, bu büyük deneyin devamı ve güvencesi için gerektiği şekilde savunma ve ilerleme için örgütlenmeye devam edeceğiz. Ethereum Classic platformu, kodu ve teknolojisi artık Açık Kaynak yazılımı [9]olarak dünyaya açıktır. Artık geliştirmek ve üzerine inşa etmek isteyen herkes için ücretsiz olarak kullanılabilir: Bir topluluk olarak birlikte kanıtladığımız ve kanıtlamaya devam edeceğimiz gerçekten özgür ve güvenilir bir dünya bilgisayarı, kırılmaz [10].

~ Ethereum Klasik Topluluğu

---

### Referanslar

1. https://ethereum.org/
2. https://www.reddit.com/r/EthereumClassic/comments/4u4o61/call_for_action_what_can_i_do_to_help_ethereum/
3. https://blog.ethereum.org/2016/06/28/security-alert-dos-vulnerability-in-the-soft-fork/
4. https://www.reddit.com/r/ethereum/comments/4s0rz6/a_vote_that_nobody_knows_about_is_not_a_vote/d55nye3/
5. https://blog.ethereum.org/2016/07/15/-to-fork-or-not-to-fork/
6. https://pbs.twimg.com/media/CopwJVHXEAABEKd.jpg
7. https://dictionary.cambridge.org/us/dictionary/english/bailout
8. https://bitcoin.org/bitcoin.pdf
9. https://github.com/ethereumclassic
10. Kırılgan Olmayan: Nassim Nicholas Taleb'in “Düzensizlikten Kazandıran Şeyler”

---

**PDF Sürümü:**

-[İngilizce](/ETC_Declaration_of_Independence.pdf) -[中文](/ETC_Declaration_of_Independence_chinese.pdf) -[русский](/ETC_Declaration_of_Independence_russian.pdf) -[Tiếng Việt](/ETC_Declaration_of_Independence_vietnamese.pdf) -[Deutsche](/ETC_Declaration_of_Independence_german.pdf) -[Italiano](/ETC_Declaration_of_Independence_italian.pdf)