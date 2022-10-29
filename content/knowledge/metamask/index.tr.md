---
title: MetaMask'i ETC ile Kullanma
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: ETC göndermek ve merkezi olmayan uygulamalarla etkileşim kurmak için Ethereum Classic ile MetaMask'in nasıl kullanılacağını adım adım anlatan bir kılavuz.
info: Bu makale [Etherplan tarafından oluşturulmuştur](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Daha fazla Ethereum Classic eğitimi, teorisi ve kripto para kavramları için lütfen [etherplan.com](https://etherplan.com) adresini ziyaret edin.
contributors:
  - DonaldMcIntyre
---

**⚠️ Güncelleme**  
Artık https://chainlist.org/en/chain/61 adresinden "Connect-Wallet "a tıklayarak ETC'yi MetaMask'a kolayca ekleyebilirsiniz.

Bu bağlantıyı bu web sitesindeki her sayfanın altında da bulabilirsiniz.

---

[MetaMask](https://metamask.io) , ETC ve Token'larınızı yönetmek için bir cüzdan olarak kullanılabilir ve bunu destekleyen uygulamalarla etkileşime girebilir. Bu yazı, Ethereum Classic (ETC) ağı ile MetaMask kullanmaya nasıl başlayacağınızı açıklamaktadır.

Ayrıca, kutudan çıkar çıkmaz ETC'yi destekleyen bir MetaMask çatalı olan [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1)'u da düşünebilirsiniz.

## Adım 1: MetaMask'te Oturum Açın

İlk adım, MetaMask'inizin kilidini açmak için giriş yapmaktır.

![Adım 1](./01.png)

## Adım 2: İlk Ekranı Görüntüleyin

Normal başlangıç ekranınızı göreceksiniz. Bu durumda varsayılan ağ Ethereum'dur (ETH) ve hesabınız her zamanki gibi gösterilecektir. Diğer ağları kullandıkça, MetaMask'inizin kilidini açtığınızda, en son kullanılanlar bunlarsa varsayılan olarak gösterilirler.

Benim durumumda, ilk ağ olarak Ethereum'u gösteriyor ve ETH hesabımda sıfır bakiyem var `0x48c1...EfF3`.

![Adım 2](./02.png)

## Adım 3: Ağlar Açılır Menüsünü Açın

Bir sonraki adım ağlar açılır menüsünü açmaktır. Bunu, varsayılan ağı gördüğünüz çubuğa tıklayarak yapabilirsiniz.

Yukarıda görülebileceği gibi, varsayılan ağ listesi Ethereum ana ağı ve en popüler test ağlarıdır.

"Yerel Ana Bilgisayar 8545", makinenizde bir Ethereum düğümü çalıştırıyor olsaydınız, bir Ethereum düğümüne bağlantı olurdu.

"Özel RPC" özel ağlar ekleme seçeneğidir, bu durumda ETC.

"RPC", makinelerin programların uzak makinelerdeki diğer programları çağırması için kullandığı protokol terimi olan "uzak yordam çağrısı" anlamına gelir.

![Adım 3](./03.png)

## Adım 4: Özel RPC'yi Seçin

Bir sonraki adım "Özel RPC "ye tıklamaktır.

![Adım 4](./04.png)

## Adım 5: Yeni Ağ Formunu Görüntüleyin

"Özel RPC "yi seçtikten sonra ağ eklemek için bir form göreceksiniz. En üstte bir güvenlik mesajı ve kullanmak istediğiniz yeni ağı girmek için boş alanları olan beş seçenek vardır:

- Ağ Adı: Eklemek istediğiniz ağın adı.
- Yeni RPC URL'si: Eklemek istediğiniz ağ RPC'si için bir URL.
- Zincir Kimliği: Eklemek istediğiniz ağa işlem göndermek ve yönlendirmek için kullanılan kimlik.
- Para Birimi Sembolü (isteğe bağlı): Eklemek istediğiniz ağın para birimi sembolü. Örneğin, "ETH" Ethereum'un sembolüdür ve "ETC" Ethereum Classic'in sembolüdür.
- Blok Gezgini URL'si (isteğe bağlı): MetaMask, hesap geçmişini, gönderilen yeni işlemleri ve bunlardaki bakiyeleri kontrol etmek için ağ başına blok zinciri gezginlerine bağlantılara sahiptir, bu nedenle buraya eklemek istediğiniz ağ için bir blok gezgini eklersiniz.

![Adım 5](./05.png)

## Adım 6: Ethereum Classic Ağ Bilgilerini Girin

Bir sonraki adım, Ethereum Classic'e özgü bilgileri eklemektir. Aşağıda kullandığım ağ verileri yer almaktadır:

- Ağ Adı: `Ethereum Classic`
- Yeni RPC URL'si: `https://www.ethercluster.com/etc`
- Zincir Kimliği: `61`
- Para Birimi Sembolü (isteğe bağlı): `ETC`
- Explorer URL'sini Engelle (isteğe bağlı): `https://blockscout.com/etc/mainnet/`

"RPC URL'si" için [ETC Cooperative](https://etccooperative.org/)tarafından bu amaçla sağlanan ve [Ethercluster](https://ethercluster.com/)adında oluşturdukları bir üründen gelen URL'yi kullandım.

_[Editör Notu] Ethercluster artık [RIVET](https://rivet.cloud/)tarafından işletilmektedir. Daha fazla RPC Uç Noktasını [network](/network/endpoints) bölümünde bulabilirsiniz._

"Zincir Kimliği" "61" olmalıdır çünkü bu, cüzdanlar ve düğümler tarafından ETC işlemlerini işletim blok zincirine göndermek için Ethereum Classic ağının özel kimliğidir.

"Sembol" ve "blok gezgini URL'si" isteğe bağlı olsa da, ağın yaygın olarak bilinen piyasa sembolü olduğu için sembol olarak "ETC" ve genellikle kullandığım için blok zinciri gezgini olarak BlockScout kullanmanızı öneririm (ancak tercih ettiğiniz bir tane ekleyebilirsiniz!).

ETC'yi MetaMask'e eklemek için "kaydet "e tıklayın.

![Adım 6](./06.png)

## Adım 7: Ağlar Açılır Menüsünde Ethereum Classic'i Görüntüleyin

ETC eklendikten sonra, ağlar açılır menüsünde ağlar listesine eklendiğini göreceksiniz.

![Adım 7](./07.png)

## Adım 8: Aynı Hesabınızı ETC'de Görüntüleyebilirsiniz

Hesabınıza giderseniz, ETH hesabınızla aynı olduğunu fark edeceksiniz. Benim durumumda, aynı `0x48c1...EfF3` hesabıdır.

Bunun nedeni, hem ETH hem de ETC'nin aynı hesap formatını kullanmasıdır, bu nedenle Ethereum'daki hesaplar Ethereum Classic'te de kullanılabilir.

Aslında, ETH hesabımda sıfır bakiye olduğunu hatırlayabilirsiniz, ancak şimdi aynı hesapta, ancak Ethereum Classic'te 1 ETC bakiye görülebilir. Bunun nedeni, bu gösteri için Ethereum Classic ağındaki bu hesaba 1 ETC göndermiş olmamdır.

Ayrıca, ETC ağının artık ağlar çubuğunda gösterilen ağ olduğuna ve "ETC" sembolünün artık bakiyeyi göstermek için kullanıldığına dikkat edin.

![Adım 8](./08.png)

## Adım 9: Aynı Hesapla Ethereum'a Geri Dönebilirsiniz

Dolayısıyla, her iki ağ da aynı hesap biçimini kullandığından, Ethereum ana ağına geri dönebilir ve ETH hesabınızı yine aynı numarayla görebilirsiniz.

![Adım 9](./09.png)

## Adım 10: Aynı Hesapla Ethereum Classic'e Geri Dönebilirsiniz

ETC ağını kullanmak için, ETC bakiyelerinizi tekrar göreceğiniz ağlar açılır menüsünde Ethereum Classic'i tekrar seçmeniz yeterlidir.

![Adım 10](./10.png)

//

ETC'ye yatırım yapmanızda ve kullanmanızda başarılar dilerim!

---

** Kanun Kanundur **
