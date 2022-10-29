---
title: Çalışma Kanıtı
updated: 2022-02-22
disclaimer: opinion
seo: Proof of Stake'in devasa değişimler gerçekleştirmek isteyen blok zincirleri için neden uygun bir çözüm olmadığına ve Proof of Work'ün neden bunu yapabilecek bilinen tek mutabakat mekanizması olduğuna dair bir argüman.
---

## Önemli Noktalar

- Ethereum Classic, _ademi merkeziyetçilik maksimalizminin peşinde süresiz olarak Proof of Work üzerinde kalmaya kararlıdır_.
- Proof of Work, denenmiş ve gerçek bir fikir birliği mekanizması olup, _Egemen Sınıf Sansür Direnci_sağladığı bilinen tek mekanizmadır.
- Proof of Stake, ek karmaşıklık, %33 saldırı, finansal manipülasyona karşı savunmasızlık, staking gözetiminin merkezileştirilmesi, APR silahlanma yarışı, tehlikede olan hiçbir şey olmaması, kontrol ve dengelerin kaldırılması ve zenginlerin daha da zenginleşmesi gibi bilinen güvenlik ödünleriyle birlikte gelir.
- Açıkçası, Proof of Stake kullanma kararı, çevresel kaygılardan ziyade büyük olasılıkla finansal motivasyonla alınmıştır.

## Giriş

Teknik düzeyde, Ethereum Classic ile kardeşi Ethereum™ arasındaki en büyük farklardan biri, ETC'nin Proof of Work üzerinde kalma taahhüdüdür. Bazıları bunun "daha gelişmiş" bir Proof of Stake sistemine geçme konusunda gelişme, hırs veya yetenek eksikliğinden kaynaklandığını varsayabilir, ancak bu bölüm Ethereum Classic'in merkeziyetsizlik ve güvenlik adına Proof of Work ile kalma kararının arkasındaki mantığı açıklayarak bu efsaneyi ortadan kaldırmayı amaçlamaktadır.

## Geleceğin Motoru

Bir blok zincirinin mutabakat mekanizması onun motorudur. Tüm güvenlik, değer ve faydaların bağlı olduğu teknolojik altyapının en kritik parçasıdır. Bir motor gibi, düzgün çalışmayı durdurursa, çalışmasına bağlı olan diğer tüm sistemler işe yaramaz hale gelir veya daha kötüsü, kullanıcıları için tehlike oluşturur.

Otomobil motorlarında olduğu gibi, bir protokol tasarlarken blok zinciri mimarları için farklı türde mutabakat mekanizmaları mevcuttur. Hangisinin kullanılacağının seçimi, [Blockchain Trilemma](/why-classic/decentralism#the-blockchain-trilemma) değiş tokuşunda hangi özelliklerin öncelikli olarak kabul edildiği hakkında çok şey ortaya koymaktadır. Bir zincirin mutabakat mekanizması çok önemli olduğundan, _Sovereign Grade_ sistemleri için, tasarım kısıtlamaları ve güvenlik ödünleri söz konusu olduğunda doğrama bloğunda olması gereken en son şeydir.

İlk popüler blok zinciri olan Bitcoin, esasen elektriği güvenliğe dönüştüren nispeten basit, denenmiş ve gerçek bir mutabakat mekanizması olan Proof of Work'ü kullanmaktadır. Blok zincirinin yürütülmesi için bir mutabakat mekanizması olarak Proof of Work uygulaması, Bitcoin'in dahiyane tasarımındaki kilit taşı taçlandıran başarıydı. Uygulaması [Byzantine Generals Problemini](https://en.wikipedia.org/wiki/Byzantine_fault) çözdü ve böylece çifte harcamaya merkezi olmayan bir çözüm sağladı, bu da bildiğimiz şekliyle blok zinciri teknolojisini uygulanabilir kılan bir keşif oldu.

Proof of Work, ekonomik oyun teorisi perspektifinden hem ampirik hem de teorik olarak güvenlidir ve bunu kullanan zincirler on yılı aşkın bir süredir sadakatle çalışmaktadır. Yeterli hashrate ile PoW zincirlerinin güçlü ulus devletler tarafından bile durdurulamaz olduğu görülmüştür. Şu anda gezegendeki hiçbir taraf, Bitcoin'i egemen kılan mutabakat mekanizmasına karşı sürekli bir saldırı başlatmak için gereken elektrik ve donanımı geleneksel olarak toplayamaz.

Proof of Work %100 "mükemmel" olacak şekilde tasarlanmamıştır ve tüm sistemlerde olduğu gibi sınırlı sayıda garantiye sahiptir. En ünlüsü olan Proof of Work zincirleri, Ethereum Classic'in birçok kez kurbanı olduğu ancak yine de devam eden *%51*saldırılarına maruz kalmaktadır. PoW sistemlerinde, %51 saldırıları bir hata değil bir özelliktir ve bunları kabul etmek, bir zincirin hangi versiyonunun "doğru" olarak kabul edilmesi gerektiğine dair objektif bilgisayar tarafından doğrulanabilir kurallara izin vermek için gereken bir değiş tokuştur; bu hashrate'e kimin katkıda bulunduğuna bakılmaksızın, hangisine en fazla hashrate katkıda bulunulmuşsa.

Aklıma _bozulmadıysa tamir etme_ şeklindeki zamansız bilgelik geliyor ve bu durumu değiştirmek için gerçekten önemli bir neden olmalı.

## Uzlaşılmış Konsensüs

Popüler hale gelen Proof of Work'e alternatif bir mutabakat mekanizması, birçok ikinci nesil blok zinciri projesi için "sahip olunması gereken bir özellik" haline gelen Proof of Stake'tir. Proof of Stake, elektriği hashrate ve güvenliğe dönüştürmek yerine, stake sahiplerinin blok oluşturma yeteneği karşılığında sermayeyi kilitlediği ve bunu yaparak bir blok ödülü talep ettiği "sanal madencilik" olarak tanımlanmıştır.

PoS için birincil gerekçe çevreciliktir; PoS'un büyük miktarda enerji tüketmeden PoW ile aynı veya daha iyi güvenlik garantileri sağlayabileceği umuluyordu.

Proof of Stake'in Proof of Work'e kıyasla sadece aynı değil _daha iyi_ güvenlik garantilerini _sadece aynı değil_ daha az enerji harcamasıyla sağlayabileceği fikri _bedava öğle yemeği diye bir şey olmadığını_anlayanlar için alarm zillerini çaldırmış olmalıdır. Ancak, farklı Proof of Stake sistemlerinin disiplinler arası kıvrımları bir tür teknolojik [gish gallop](https://en.wikipedia.org/wiki/Gish_gallop)yarattığından, düzeltme üzerine düzeltmeler PoS protokollerini giderek daha karmaşık ve belirsiz hareketli hedefler haline getirdiğinden ve _free lunch_ efsanesi kaçırıldığından, birçokları için bu temel gerçek el sallayarak geçiştirilebildi.

Hiçbir şey merkezileşmenin ince ve sinsi doğasını Kanıt Delili efsanesi kadar iyi özetleyemez. Görünüşte, blok zinciri teknolojisinin en kötü yönlerini düzeltmek ve onu sürdürülebilir bir gelecekle uyumlu hale getirmek için asil bir girişimdir, ancak daha yakından incelendiğinde, bu tehlikeli fikir, asil hedeflerden daha azı karşılığında teknolojinin en özgürleştirici niteliklerini feda etmektedir.

Gerçekte, Proof of Stake'in popülaritesi sadece zaman ve kaynakların boşa harcanması riskini taşımakla kalmaz, aynı zamanda benimsenmesi tartışmasız bir şekilde devam ederse, Proof of Stake geleceği tarafsız gibi görünen ele geçirilmiş sistemler üzerinde çalışan bir geleceğe mahkum edebilir; kripto para alanındaki gelişmeler insanlığın gelişmesine değil, herkes için açık fayda pahasına ultra elit bir kesimin sürekli artan gücüne katkıda bulunur.

Kısacası, Proof of Work, bir blok zincirinin faydasını ve değer önerisini ortaya çıkaran kritik niteliklerin sunulmasına doğru bir şekilde öncelik veren sağlam, savaşta test edilmiş bir mutabakat mekanizmasıdır. Proof of Stake ise karbon emisyonlarının azaltılması ya da daha doğru bir ifadeyle büyük balinalar için getirilerin maksimize edilmesi gibi kritik olmayan ikincil ideallere öncelik verilmesi karşılığında bu unsurları feda etmektedir.

## Güvenlik Ödünleşimleri

"Proof of Stake, Proof of Work'ten daha güvenlidir" iddiası, "güvenli" tanımındaki nüans ve bunun kendi ekonomik, sosyal ve teknik ödünleşimlerine sahip çok sayıda Proof of Stake sistemiyle nasıl dengeleneceği nedeniyle "[yanlış bile değil](https://en.wikipedia.org/wiki/Not_even_wrong)" bir ifadedir.

Bir Google elektronik tablosu %51 saldırıya uğrayamaz, ancak bu onu Bitcoin'den "daha güvenli" yapar mı? Bunun cevabı " _güvenli_ile ne kastettiğinize bağlı" olacaktır. Blockchain sistemleri söz konusu olduğunda, ['un](/why-classic/decentralism)'u araştırdığı gibi, zaman testine dayanabilecek ve _Egemen Sınıf Sansür Direnci_ elde edebilecek sağlam, merkezi olmayan, izinsiz bir sisteme ihtiyaç olup olmadığına bağlıdır. _için bu_ tür bir güvenlik, bir Google elektronik tablosu Bitcoin'den çok çok _daha az_ "güvenli", çünkü tek bir taraf, Google tarafından sıfır çabayla ele geçirilebilir.

Bu anlamda, Proof of Stake bir Google elektronik tablosuna çok benzer. Güvenlik garantileri konusunda netlik olmaması ve bunları ölçmenin zorluğu, son derece teknik kullanıcıların bile birçok PoS projesi tarafından ortaya atılan pazarlama iddialarının ötesini görmesini imkansız hale getirmektedir. Sonuç olarak, Proof of Work sistemlerinin açık, iyi anlaşılmış ve daha az karmaşık garantileriyle karşılaştırıldığında, bu sistemlerin gerçek doğası ve potansiyel başarısızlık modları gizlenmektedir.

Her bir PoS sisteminin kendine özgü kusurları olduğundan, bunları ayrı ayrı değerlendirmek pratik değildir. Yine de bazı genel sorunlar, İş İspatına kıyasla tüm Pay İspatı sistemleri için az çok geçerlidir ve bu sorunlar, zincirlerin PoW yerine PoS kullanmaya karar verdiklerinde dolaylı olarak güvenlik ödünleşmeleri yaptıklarını göstermek için aşağıda incelenecektir.

### Özerk Güvenlik

Proof of Work, hashrate'e çevrildiğinde yazılım tarafından güvenilir bir şekilde doğrulanabilen işlem döngülerinin ortak dilini kullanarak "gerçek dünya" ile "dijital dünya" arasındaki boşluğu objektif bir şekilde kapatabilmesi açısından benzersizdir. Proof of Work kullanan blok zincirleri, iç durumları hakkında fikir birliğine varmak için sistemlerinin dışından gelen taklit edilemez ölçümlere güvenerek enerjiyi en doğrudan ve verimli şekilde güvenliğe dönüştürürken, bu ölçümleri üretme sorumluluğunu dış dünyaya yükler.

Proof of Work, enerji tüketen ve bunu zincir için güvenlik şeklinde değerli bir işe dönüştüren, dürüst madenciliği teşvik eden ve %51 saldırıların maliyetli olmasını sağlayan bir yanmalı motor gibidir.

![İş Kanıtı Motoru](./engine.jpg)

Proof of Stake blok zincirleri, güvenliği sistemlerinin dışından sağlamak yerine kendi durumlarına kendi kendilerine referans vererek güvence altına alır ve bu nedenle bu protokoller, bu güvenliğin nasıl oluşturulduğunu tehlikeye atabilecek ek sorumluluklar, karmaşıklık ve saldırı yüzeyi içerir.

Güvenliğin bu şekilde kendi kendini referans alması, termodinamik yasalarını çiğneyen bir tür sürekli hareket makinesi olarak tanımlanabilir. Yüzeyde, karmaşıklık perdesi gözlemcileri uzun bir süre boyunca kendi kendini sürdürebileceği varsayımıyla kandırabilir, ancak gerçekte, fark edilmeyen bir kısıtlama, çok uzak olmayan bir gelecekte durmaya mahkum olduğu anlamına gelir.

![Hisseli Sürekli Hareket Makinesinin Kanıtı](./overbalance.jpg)

### Karmaşıklık ve Saldırı Yüzeyi

Tüm yazılım sistemlerinde olduğu gibi, ek karmaşıklık, kötü niyetli aktörlerin yararlanabileceği ve potansiyel olarak yıkıcı sonuçlar doğurabilecek daha büyük bir saldırı yüzeyi oluşturur. Yazılım sistemleri olduğu kadar ekonomik sistemler de olan blok zincirleri bağlamında bu sorun daha da artmakta ve bu tür sistemlerde uykuda olan potansiyel istismarların çoğu, önemli bir ekonomik değer riske girene kadar ortaya çıkmayabilmektedir.

Blok zincirlerindeki ince oyun teorisi hatalarını ve açıklarını tespit etmek, test etmek ve üretime geçmeden önce ortadan kaldırmak son derece zordur, hatta bazı durumlarda imkansızdır. En önemli savunmalardan biri [Keep It Simple, Stupid](https://en.wikipedia.org/wiki/KISS_principle)şeklindeki sağlam teknik ilkeye bağlı kalmaktır; bu yaklaşım, Proof of Stake projeleri tarafından basit zarafet Proof of Work'ü reddedip ağa çok az pragmatik fayda sağlayan ya da hiç sağlamayan daha karmaşık ve istismara açık alternatifleri benimsediklerinde terk edilmiştir.

### Güç Dengesizliği

['un daha önce incelediği gibi](/why-classic/decentralism/#balancing-power), madencileri bir blok zincirinin sosyoekonomik modelinden çıkarmak, aksi takdirde ele geçirmeyi önleyecek önemli bir düzenleyici gücü ortadan kaldırır; zincirlerin seçici madenciliği tarafından kötü kararları veto etme tehdidi yoluyla diğer tarafları dürüst tutmak. Proof of Stake zincirlerinde yatırımcılar ve "madenciler" (stakerlar) aynı gruptur, bu nedenle bu grubun gücünü kötüye kullanması nispeten kontrolsüz kalır ve zincir, staking ödüllerini artırmak gibi diğerlerinin zararına bu gruba fayda sağlayacak şekilde çatallanma eğiliminde olabilir.

### Para Güç Değildir

Proof of Work ağlarındaki nihai güvenlik kaynağı, elektrik ve donanım üretim dağıtımının bir kombinasyonudur. Bunların her ikisi de coğrafi olarak dağılmıştır ve yeni sağlayıcılar organik olarak ortaya çıkabilir. Bitcoin gibi büyük Proof of Work ağları için, ağa karşı bir saldırı düzenlemek için gereken kaynaklar, ya yeterince uygun fiyatlı elektriğe sahip olmayan ya da bir saldırı düzenlemek için gereken donanımı güvence altına alamayan ulus devletler de dahil olmak üzere herhangi bir dünyevi kuruluşun imkanlarının dışındadır.

Bu nedenle Proof of Work ağlarının yüksek enerji kullanımı "boşa harcanmamaktadır". Bunun yerine, yüksek enerji kullanımı, bu tür saldırıları engelleyici derecede pahalı ve lojistik olarak pratik olmayan hale getirerek ağı saldırılara karşı koruyan şeydir. Daha da önemlisi, elektrik kaynakları küresel olarak dağılmıştır ve finansal kaynakların aksine, coğrafi sınırlar üzerinde hak iddia eden rakip ulus devletlerin olduğu bir dünyada taşınması kolay değildir ve merkezileştirilmesi imkansızdır.

Proof of Stake zincirleri, modern finansal silahlar ve ağın değerinin stake etme yoluyla doğrudan güvenliğe bağlı olması sayesinde bir dizi ekonomik saldırıya karşı savunmasızdır. Madencilik donanımı ve elektriğin aksine, fiat sistemlerinde sermaye havadan basılabilir ve kaynaklar bir düğmeye basılarak dünyanın her yerinden bir araya getirilebilir. Merkez bankaları ve blok zinciri teknolojisi tarafından tehdit edilebilecek diğer kuruluşlar için mevcut olan ekonomik kaldıraçlar çok geniş ve karmaşıktır. Tüm Proof of Stake ağlarının toplam değeri, omzunda bir çip bulunan tek bir şirket tarafından ödünç alınabilecek, kaldıraçlanabilecek ve kullanılabilecek devasa likit sermaye yığınlarına sahip olan daha geniş ekonomiyle karşılaştırıldığında küçük bir düşüştür.

Blok zinciri teknolojisi tarafından tehdit edilen modern finans kurumları, sadece fiyatla oynayamayan, ancak bunu yaparak potansiyel olarak toplam sistem arızasına neden olan Proof of Stake'e karşı ekonomik savaş açacaklarından eminler. Türev piyasaların oluşturulması ve fiyat manipülasyonu yoluyla saldırganlar ağdaki oy haklarını satın alabilir ve stake saldırıları yoluyla fikir birliğine varma yeteneğini engelleyebilir veya yok edebilirler.

### Madenci Yıpranması vs Zengin Daha Zengin Oluyor

Proof of Work sistemlerinde, devam eden elektrik maliyetlerinin ötesinde, madenciler rekabetçi kalabilmek için ek kaynaklar harcayarak donanımı sürekli olarak yükseltmelidir. Bunun etkisi, karlı bir şekilde madencilik yapabilecek birey havuzunun sürekli olarak değişmesidir. Eğer bir madenci madencilikte kötüyse, diğer madenciler tarafından rekabet edilemeyeceği için eninde sonunda geçimini sağlama yeteneğini kaybedecektir.

Sürekli değişen bir madenci havuzu, sürekli artan miktarlarda hashrate sağlayarak ağın çıkarları için aktif olarak çalışmadıkları sürece hiçbir madencinin bir ağın önemli bir bölümünü önemli bir süre boyunca elinde tutamayacağı anlamına geldiğinden, bu ademi merkeziyetçilik için iyidir. Bunu başarmak için madenciler araştırma ve geliştirmeye, altyapıya ve operasyonlarını büyütmeye yatırım yapmalı, bir yandan da sosyal katmanda olup bitenleri yakından takip etmeli, gücü nasıl dengeleyeceklerine ve hangi çatallardan maden çıkaracaklarına karar vermelidir.

Bu hayati ve çok yönlü rol, Proof of Stake sistemlerinden lobotomize edilmiştir. Bunun yerine, bu sürekli mücadelenin yerine, inovasyona veya diğer dışsallıklara yatırım yaparak kazanılacak çok az şeyle, belirli bir pay sahibinin ne kadar hisseye erişebileceğinin nispeten statik dağılımını koymak. Bir stakerın ne kadar kar ya da zarar edeceği tamamen kendi kontrolündedir ve hiçbir şey yapmayarak, rekabette geride kalma riski olmadan yığınlarını sürekli olarak artırabilirler.

Bunun da ötesinde, ölçek ekonomileri, gaz ücretleri ve günlük yaşam maliyetleri için gereken fonlara kıyasla stake edilmesi gereken fonların oranı nedeniyle, Proof of Stake sistemlerinde _zengin daha zengin olur_ daha hızlı bir oranda __, bu da bir ağın değerinin zaman içinde en zengin stake edenlere doğru dağılımını merkezileştirir.

Bu eğilimi düzeltecek bir yıpranma olmadığından, stake ekosistemindeki ciro eksikliği, mega balinalardan oluşan bir güç bloğunun tüm Proof of Stake ağlarının giderek artan bir bölümünü biriktirmesi ve Nakamoto katsayısı 0'a yaklaştıkça bunları ele geçirilmeye giderek daha açık hale getirmesi anlamına gelir. Rant peşinde koşan Proof of Stake stake hanedanlarının nesiller boyu devam etmemesi için hiçbir neden yoktur, zira büyük stake sahipleri giderek artan büyüklükteki çantalarını bir sonraki nesle devrederek Proof of Stake ağlarının ağdaki değer olarak açıkça ele geçirilmesini ve kazanan çatallara karar verme gücünün en tepeye çekilmesini sadece bir zaman meselesi haline getirmektedir.

### İzinsiz Değil

İzinsizlik, şaşırtıcı olmayan bir şekilde, yeni kullanıcıların halihazırda sistemde bulunan birinin izni olmadan bir sisteme girmesine izin veren bir özelliktir. Diğer her şey eşit olduğunda, izinsiz sistemler, yeni katılımcılara ayrım gözetmeksizin açık olduklarından, zaman içinde izinli sistemlere göre daha merkezsiz hale gelebilir.

Madencilik ve dolayısıyla Proof of Work izne tabi değildir, çünkü herkes (veya herhangi bir şey) ağa hashrate katkısında bulunabilir ve katkıda bulundukları hashrate'e bağlı olarak bir blok madenciliği yapabilme şansına eşit olarak sahip olabilir. Her hash bir piyango bileti gibidir ve ne kadar çok bilet satın alınırsa bir blok bulma ve o tatlı mı tatlı blok ödülünü alma şansı o kadar yüksek olur.

Bekçi olmadığından, İş İspatı mutabakat mekanizmaları __ __ hashrate'in nasıl oluşturulduğunu veya _kimin_ katkıda bulunduğunu önemsemez. Bu, bir zincirin tarafsız ve ele geçirilmemiş kalması için gerekli bir niteliktir çünkü kapı bekçileri var olsaydı, bir katılımcının kimliğine veya konumuna dayalı olarak çalışmayı reddedebilir, onları dışarıda bırakabilir ve bunu yaparak ağı merkezileştirebilir ve ele geçirebilirlerdi.

Proof of Stake sistemleri _değil_ izinsizdir. İşlem yapmak ve bahis oynamak için gereken para birimini elde etmenin tek yolu _söz konusu para birimine zaten sahip olan birinden_ satın almaktır; ağı kullanmak için ağ içindeki birinden _izin_ almaları gerekir ve mevcut sahipler kapı bekçileridir.

Bir anlamda, tüm Proof of Stake ağları halihazırda _yumuşak ele geçirilmiş_durumdadır, çünkü PoS coin sahipleri toplu olarak belirli bir sınıftan veya yetki alanından kullanıcılarla işlem yapmayı durdurmaya karar verebilir (veya buna zorlanabilir) ve bu kullanıcıların ödemeye razı oldukları fiyat ne olursa olsun ağ üzerinde işlem yapmalarının bir yolu yoktur.

Daha az gelişmiş ya da izole bir ülkeden gelen ve dolar cinsinden işlem yapma kabiliyeti çok az olan ya da hiç olmayan bir kişi örneğini ele alalım; bankacılık sistemine erişimi olmayan ve dolayısıyla borsalar üzerinden işlem yapamayan ve bulundukları bölgede nakit olarak OTC anlaşması yapmaya istekli kimse bulunmayan bu kişiler, sadece madencilik yapmak için bir donanım satın alarak her zaman Proof of Work para birimlerini elde edebilirler. Aynı kullanıcı Proof of Stake blok zincirlerinin dışında bırakılarak bu ağları daha az erişilebilir, daha az kullanışlı ve daha az değerli hale getirir.

### Borsalarda Staking'in Merkezileştirilmesi

Yüksek teknik bariyer ve _bir node çalıştırırken ve manuel olarak stake ederken_ 'u karıştırma korkusu, kripto alanındaki sıradan sahiplerin büyük çoğunluğu için bunu erişilemez kılmaktadır, bu nedenle neredeyse hepsi stake etmek için genellikle borsalar olmak üzere üçüncü taraf hizmetlerini kullanacaktır.

Borsalarda stake etmek, kullanıcı deneyimi açısından kesinlikle daha iyidir. Büyük bir likidite fazlası, borsaların çoğu Proof of Stake zincirinin kullanıcılar adına uyguladığı kilitleme süresini arbitraj etmesini sağladığından, kullanıcıların hiçbir ceza ödemeden anında fonlarını geri çekmelerine olanak tanıma gibi ek bir faydası vardır.

Sonuç olarak, çoğu Proof of Stake blok zinciri için, borsalar bir stake etme faaliyetinin büyük çoğunluğunu gerçekleştirecektir ve muhtemelen zaten gerçekleştirmektedir. Bu durum, bu projelerde ademi merkeziyetçilik yanılsamasını ciddi şekilde zayıflatmakta ve zincirin ele geçirilmesini çok daha olası hale getirmektedir.

Örnek olarak aşağıdaki makul senaryoyu ele alalım:

"İstenmeyen" bir uygulama büyük bir Proof of Stake zincirinde faaliyet gösteriyorsa, bir hükümet veya güçlü bir çok uluslu kuruluş, yetkisi altındaki tüm borsaları aynı anda bu zincirin fonlarını dondurmaya zorlayabilir. Aralarında belirli bir bahisli varlık eşiğine sahip olduklarını varsayarsak, hissenin bu kısmı ya ağı durdurmak ya da gelecekteki hard fork'ları zorlamak, zinciri fidye için tutmak ve istedikleri uygulamaları sansürlemek için kullanılabilir.

Proof of Work'te, endişelerin ayrılması ve elektrik kaynaklarının coğrafi olarak merkezi olmayan yapısı sayesinde bu tür bir saldırı imkansızdır.

### APR Silahlanma Yarışı

Proof of Stake zincirleri, belirli algoritmalara bağlı madencilik donanımlarının aksine, açık piyasalarda işlem yaparak _all_ PoS zincirleri arasında serbestçe hareket edebilen likit staking sermayesi için birbirleriyle rekabet eder. Bu da zaman içinde tüm Proof of Stake zincirlerinin, yeterli sayıda stake sahibini kendi zincirlerinde stake etmeye ikna etmek için stake ödüllerini ve dolayısıyla enflasyon oranlarını artırma baskısı altında kalacağı anlamına geliyor. Sonuç olarak, giderek artan bir _APR silahlanma yarışı_içine girdiklerinden, "dibe doğru bir yarışın" tüm Kanıt Kasa zincirlerini yutması muhtemeldir.

Örneğin, eğer Zincir A %12 stake ödülü sunuyorsa, stake yapanlar neden Zincir B'nin %3 ödülünü stake etsinler ki, A'yı stake edip bu ödülleri B karşılığında satarak doğrudan B'yi stake ederek elde edeceklerinden daha fazla B'ye sahip olabilirler? Bu da B zincirini ödülünü artırmaya zorlar, bu da A'yı aynı şeyi yapmaya teşvik eder ve bu böyle devam eder.

Bu durum büyük stake sahipleri için harika bir haber, ancak fonlarının nispeten daha büyük bir kısmını ağı kullanmak için stake etmeyen ve sadece stake etmedikleri için fahiş ücretlerle vergilendirilecek olan kullanıcılar için korkunç. Bunun uzun vadede nasıl sonuçlanacağı bilinmez, ancak tüm PoS ağlarının faydasına ve değerine zarar verme riski taşıyor ve giderek artan bir değersizleşme ölüm sarmalına yol açıyor.

### 33% Saldırılar

Proof of Stake zincirleri, bir saldırganın stake edilen varlıkların %33'ünü, yani tüm coinlerin %33'ünden daha azını elde etmesi durumunda kalıcı olarak bozulabilir.

> Yani ortalama bir PoS protokolünün tokenlarının %70'inden fazlası stake edilmişse, bir saldırı başlatmak için protokolün toplam ödenmemiş tokenlarının ~%25'ini elde etmeniz gerekir. Her PoS farklı olsa da, %33 genellikle zinciri durdurmak için yeterlidir, böylece mutabakata varamaz ve yeni bloklar üretemez, aslında çift harcama yapmaz. Bunun için %66'lık bir orana ihtiyacınız var.
> 
> - [Viktor Bunin](https://viktorbunin.medium.com/proof-of-stakes-security-model-is-being-dramatically-misunderstood-4ed7b19ca419)

Bazıları böyle bir saldırıya neden olmak için _doğrudan_ ekonomik teşvik olmadığını, çünkü saldırganın elindeki varlıkların değerini düşürme riski taşıdığını savunmaktadır ki bu doğru olabilir, ancak bu aynı zamanda Proof of Stake zincirlerinin açığa satış gibi _dolaylı_ ekonomik teşvikler yoluyla %33 oranında durdurulmaya açık olduğunun da bir itirafıdır. Daha da önemlisi, PoS zincirleri, finansal teşviklerin birincil motivasyon olmadığı ulus devletler gibi aktörlerin %33'lük saldırılarına karşı hassastır; bu da _Egemen Sınıf Sansür Direnci_ 'un bir endişe konusu olmadığını göstermektedir.

### Sürekli Saf Pwnage

Proof of Stake'in _%33 saldırısı_ , Proof of Work'ün _%51 saldırısından_çok daha büyük bir sorundur; ikincisi, devam eden harici bir elektrik maliyetine sahip olduğu için kalıcı değildir, bu da onları sürekli süreler boyunca gerçekleştirmek için pratik olarak pahalı hale getirir. Dahası, %51'lik saldırıların ön maliyeti olduğundan ve %33'lük saldırıların aksine başarılı olmaları garanti olmadığından, bu saldırıları sürdürme maliyetini karşılamak bir yana, bunları gerçekleştirmek için teşvik azalmaktadır.

Proof of Work sistemlerindeki %51 saldırıları zarar verici olsa da, yalnızca çifte harcamaya maruz kalanları doğrudan etkiler; çoğunlukla borsalar ve sık işlem yapmayan uzun vadeli sahipleri değil. Buna karşılık, %33 saldırıları PoS ağlarında zinciri sürekli olarak durdurabilir.

PoS zincirlerinde, bir saldırgan belirli bir hisse eşiğine ulaştığında, zincir asla toparlanamaz; saldırganın harici kaynaklar taahhüt etmesine gerek olmadığından, zincir çözülemez. Bu başarısızlık durumuna tek çözüm, saldırganı uzaklaştırmaktır; bu da _Code is Law_adresini bozar, blok zincirine sahip olma amacını ortadan kaldırır, öznellik ekler ve zinciri daha da merkezileştirir.

### Tehlikede Bir Şey Yok

Proof of Work'te, bir çatallanma meydana gelirse, blokların oluşturulmasıyla ilişkili harici bir elektrik maliyeti olduğu için madenciler çatallanmanın hangi tarafında madencilik yapacaklarına karar vermek zorundadır. Madenciler "yanlış" çatalı çıkarırlarsa, ödülleri değersiz hale gelecek ve onu çıkarmak için harcadıkları elektriği boşa harcamış olacaklardır, bu nedenle neyi çıkaracaklarını akıllıca seçmeleri gerekir; söz konusu olan _elektrik maliyeti_ .

Buna karşılık, Proof of Stake'te, bir çatallanma meydana gelirse, sistemin iç durumunun bir parçası olan stake edilmiş kaynaklar çatallanma boyunca bölünür ve iki katına çıkarılır. Stakerlar bir çatalın her iki tarafında da eşit varlığa sahiptir ve hangi tarafın üstün geleceğinden emin olmadıkları için her iki tarafı da doğrulamaya teşvik edilirler. Bu durum [tehlikede olan hiçbir şey yok sorunu](https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027)olarak bilinir. Çatallanmayı daha ucuz ve daha az riskli hale getirerek, çatal tabanlı hilelerle zincirlere saldırmayı kolaylaştırarak ve bir bölünmenin hangi tarafının "gerçek" sürüm olduğu konusunda fikir birliğine varmayı zorlaştırarak çatallanmaları teşvik etmesi muhtemeldir.

Genel olarak _slashing_ kavramının, bir bölünmenin "yanlış" tarafını doğrulayan paydaşları cezalandırmak için kriptografik kanıtları kullanan bir teknik olan tehlikede olan hiçbir şey sorununa bir çözüm olduğu iddia edilmektedir. Bu iyi ve güzel bir şeydir ancak kesme işlemi yalnızca çatallar birbirlerinin kanıtlarını doğrulayabilen protokoller çalıştırdığında işe yarar.

Bir saldırgan, çatalın kesme kanıtını zincirin eski versiyonunda kasıtlı olarak geçersiz kılan, isteğe bağlı olarak tersini doğru olmayan hale getiren ve doğrulayıcıları her iki zinciri de doğrulamaya teşvik ederken, kaos tohumları eken ve ağın değerini bölen tartışmalı bir hard fork için bastırabilir.

Madencilerin yeni çatalı kazmak için elektrik harcayacağı kötü niyetli bir Proof of Work çatalının aksine, bu yeni Proof of Stake çatalındaki doğrulayıcılar, tehlikede olan hiçbir şey olmadığı için sadece doğrulamakla kalmaz, aynı zamanda kazanan zincir - gelecekte değeri olan tek taraf - olabileceği için bunu yapmaya teşvik edilirler.

### Uyuşmazlık Çözümünün Aksaması

Alternatif olarak, bölünmüş bir _'un her iki tarafının da_ birbirlerinin kesme kanıtlarını tanıdığını varsayarsak, zincirin farklı bir sorunu vardır: İş İspatı ağlarında zincir bölünmesine neden olabilecek meşru görüş farklılıklarının çözümü.

Ethereum Classic'in kendisi, [Ethereum.org web sitesi](https://ethereum.org/en/governance/#dao-fork)adresinden daha iyi açıklanamayacağı üzere, İş İspatı zincirlerinin "nihai uyuşmazlık çözüm mekanizmasının" mükemmel bir örneğidir.

Protokolün uygulama ayrıntılarına büyük ölçüde bağlı olmakla birlikte, genel olarak, Proof of Stake hard forking dinamiğini çoğunluğu elinde tutanların zayıf olanlara karşı lehine değiştirir ve çoğu durumda zayıf olan zinciri basitçe yok eder ve tartışmalı bir fork'a katılmadıkları takdirde onları yeni bir protokole hard fork yapmaya zorlar.

Klasik zincirin statükoyu koruma avantajına sahip olduğu ve madencilerin aktif olarak yeni bir çatala geçiş yapmak zorunda kaldığı Proof of Work'ün aksine, Proof of Stake zincirlerinde, tartışmalı bir çatalın eski tarafı çoğunluk tarafından kesilmekten kaçınmak için kendi savunma amaçlı sert çatallarını uygulamak zorunda olduğundan, çatalcıların çoğunluğu avantaja sahiptir. Yeni çatallanmalar, eski zincirdeki doğrulayıcıları kesme ya da kesmeme, istedikleri sonucu elde etmek için gecikenlerin cezalandırılmasını optimize etme ve sert çatallanma kararının ekonomisini manipüle etme seçeneğine sahiptir.

_Not: Aşağıdaki üç Proof of Stake eleştirisi [etherplan.com](https://etherplan.com/2019/10/07/why-proof-of-stake-is-less-secure-than-proof-of-work/9077/)adresinden alınmıştır._

### Öznel çatal seçimi

Çatal seçimi, ağ katılımcılarının bölündüğünde, ilk kez katıldıklarında veya ayrılıp tekrar katıldıklarında birden fazla zincir sunulduğunda kullanmaları gereken karar kuralıdır. Harici bir fiziksel sinyal olarak PoW, "en uzun iş kanıtı zinciri" şeklinde net bir objektif çatal seçimi sağlar. Objektiftir çünkü sadece tüm ağın hesaplama gücü ile en uzun zincir oluşturulabilir.

PoS sistemleri, doğru zincire karar vermek için böyle nesnel bir niceliğe sahip olmadığından, katılımcılar tarafından öznel bir karar verme süreci kullanmak zorundadır. Bu, hangi zinciri takip edeceklerine karar verebilmek için blok kaşiflerine, geliştiricilere, madencilere veya diğer kaynaklara zincir dışında danışmaları gerektiği anlamına gelir. Bu, bölünme durumunda, ağa katılan düğümler, yeni girenler ve ayrılıp tekrar katılan düğümler için geçerlidir.

### Affedilemez Pahalılık

Sağlam paranın temel fiziksel özelliklerinden biri, taklit edilemeyeceğini garanti etmek için üretilmesinin çok maliyetli olmasıdır. PoW, madencilerin blok oluşturabilmek için veri merkezleri ve elektrik gibi büyük maliyetlere katlanmaları nedeniyle tokenlerin bu maliyetliliğini sağlar. Bu da $ETC ve $BTCgibi PoW tokenlerini pratikte taklit edilemez hale getirir.

Her blok başlığına gömülü harici bir objektif ölçüm nedeniyle bir sahibin BTC veya ETC'sinin sahte olmadığını objektif olarak doğrulamak kolaydır, ancak bu kanıt Proof of Stake sistemlerinde mevcut değildir. PoS sistemlerinde, hesapların ve bakiyelerin bulunduğu veritabanının sistemdeki düğümler ve paydaşlar tarafından yazılması önemsiz olduğundan, nesnel bir maliyet söz konusu değildir ve özgünlük varlıklarının doğrulanması çok daha karmaşık, hataya açık ve potansiyel olarak pahalı donanım gerektirir.

### Birikmiş İş

PoW blok zincirlerindeki madenciler blok bazında çalıştığından, bu çalışma yalnızca dürüst olmayan düğümlerin mevcut veya en son blokları kurcalaması için bir engel oluşturmakla kalmaz, aynı zamanda zincir inşa edildikçe bu çalışma aslında birikir. Bu, zincirde daha uzakta gömülü olan blokların saldırganlar tarafından değiştirilmesinin veya taklit edilmesinin katlanarak daha zor hale geldiği anlamına gelir. Örneğin, bu yazının yazıldığı sırada, Bitcoin ağındaki mevcut hash gücünün %100'ü ile tüm zinciri tersine çevirmek 340 gün sürecektir.

PoS dağıtılmış defterlerde, PoW kullanmadıkları için, tüm zinciri tersine çevirmek hesaplama işi açısından önemsizdir, bu nedenle birkaç dakika içinde yapılabilir.

## Otel Havluları

Proof of Stake'in çevreci argümanı kabul edilse bile, PoS'un zincirlerin Proof of Work tarafından sağlanan birçok güvenlik garantisinden feragat etmesini gerektirdiği açıktır. Proof of Stake zincirleri, daha az enerji tüketimi vaadi karşılığında sansüre karşı dirençten vazgeçiyor. Pazarlama hileleri bir yana, blok zincirlerinin sorumluluğu ve faydası mevcut diğer teknolojilere kıyasla pragmatik olarak değerlendirildiğinde bu değiş tokuşun pek bir anlamı yok gibi görünüyor. Ne de olsa bedava öğle yemeği yok.

Ancak çevrecilerin iddiası _değil_ gerçek değeriyle kabul edildiğinde, İspat Kanıtı kullanma tercihi mantıklı olmaya başlar. Tıpkı bir otelin "gezegeni kurtarmak" için misafirlerinden havluları yeniden kullanmalarını istemesi gibi, PoS çevreci pozisyonu da söz konusu para birimlerinin sahiplerini zenginleştiren bir pozisyondur ve bu kişiler stake ederek pasif gelir elde edebilir. Onların gözünde, stake etmek, madencilerin aksi takdirde sağlayacağı hizmetin aynısını sağlamanın ödüllerini almalarına olanak tanır; hisseyi kilitlemenin fırsat maliyeti dışında neredeyse hiçbir masraf olmadan "sanal madencilik".

İyi niyetli ya da değil, bu büyük ekonomik teşvik, yukarıda incelenen güvenlik düşüşlerine rağmen, PoS'un kripto para sahipleri arasında neden bu kadar popüler bir seçim haline geldiğini ve birçok hevesli destekçiyi işe almayı başardığını açıklıyor.

> Stake'in kanıtı, otelin sizden gezegeni kurtarmak için havluları yeniden kullanmanızı istemesi gibidir. Görünüşte asil niyetlerle hareket ediyorlar, ancak gerçekte bu onlara para kazandırıyor ve size daha kötü bir hizmet sunuyor.

Bilinen tüm olumsuzluklara rağmen yine de Proof of Stake'i tercih eden projeler ya _son derece_ enerji kullanımı konusunda endişeli olmalı ya da muhtemelen daha inandırıcı bir şekilde, öncelikle stake etmenin ekonomik olarak stake edenlere fayda sağlayacağı konusunda endişeli olmalıdır. Ancak bu kaygının kendisi yanlış yönlendirilmiştir, zira bir proje ancak fayda sağlıyorsa uzun vadeli bir değere sahip olabilir ki bu da Proof of Stake'in gerektirdiği merkezileşme ve ödünleşmeler nedeniyle zayıflamaktadır.

Bu tür coinlerin sahipleri madencilikle karşılaştırılabilir bir hizmet sunduklarına inanıyor olabilirler, ancak madencilikte olduğu gibi harici bir gerçek dünya masrafını bir güvenlik faydasına dönüştürmüyorlar. Bunun yerine, _ağın başka yerlerindeki değeri enflasyon yoluyla vergi dışı bırakarak kendilerine yeniden dağıtmak suretiyle Titanik'teki_ güverte sandalyelerini karıştırmaktadırlar.

Her halükarda, Proof of Stake sistemlerinde gerekli olan doğal ödünleşimler nedeniyle, _Sovereign Grade Censorship Resistance_ bu zincirlerde bir öncelik olmadığının bir başka işaretidir. Bu nedenle, güçlü kurumları sekteye uğratma potansiyeli olan konuşlandırmalar için tavsiye edilemezler.
