---
title: Korištenje MetaMaska s ETC-om
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Vodič korak po korak koji pokriva kako koristiti MetaMask s Ethereum Classicom za slanje ETC-a i interakciju s decentraliziranim aplikacijama.
info: Ovaj je članak [izradio Etherplan](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Za više Ethereum Classic vodiča, teorije i koncepata kriptovalute, pogledajte [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

**⚠️ Ažuriranje**  
Sada možete jednostavno dodati ETC u MetaMask tako što ćete kliknuti na "Connect-Wallet" na https://chainlist.org/en/chain/61

Također možete pronaći ovu vezu na dnu svake stranice na ovoj web stranici.

---

[MetaMask](https://metamask.io) može se koristiti kao novčanik za upravljanje vašim ETC-om i tokenima, kao i za interakciju s aplikacijama koje ga podržavaju. Ovaj post objašnjava kako početi koristiti MetaMask s mrežom Ethereum Classic (ETC).

Također možete razmisliti o [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1), forku MetaMaska koji podržava ETC odmah nakon postavljanja.

## Korak 1: Prijavite se u MetaMask

Prvi korak je prijava kako biste otključali svoju MetaMasku.

![Korak 1](./01.png)

## Korak 2: Pregledajte početni zaslon

Vidjet ćete svoj uobičajeni početni zaslon. U ovom slučaju zadana mreža je Ethereum (ETH) i vaš će račun biti prikazan kao i obično. Dok koristite druge mreže, one će se prikazati kao zadane kada otključate svoj MetaMask ako su bile zadnje korištene.

U mom slučaju, prikazuje Ethereum kao početnu mrežu, a ja imam stanje nula na svom ETH računu `0x48c1...EfF3`.

![Korak 2](./02.png)

## Korak 3: Otvorite padajući izbornik Mreže

Sljedeći korak je otvaranje padajućeg izbornika mreža. To možete učiniti klikom na traku na kojoj vidite zadanu mrežu.

Kao što se može vidjeti gore, zadani popis mreža je Ethereum mainnet i njegove najpopularnije testne mreže.

"Lokalni host 8545" bio bi veza s Ethereum čvorom ako ga pokrećete na svom računalu.

“Custom RPC” je opcija za dodavanje prilagođenih mreža, u ovom slučaju ETC.

“RPC” je kratica za “remote procedure call”, što je termin za protokol koji strojevi koriste za programe za pozivanje drugih programa na udaljenim strojevima.

![3. korak](./03.png)

## Korak 4: Odaberite prilagođeni RPC

Dakle, sljedeći korak je klik na "Custom RPC".

![Korak 4](./04.png)

## Korak 5: Pregledajte novi mrežni obrazac

Nakon odabira “Custom RPC” vidjet ćete obrazac za dodavanje mreže. Ima sigurnosnu poruku na vrhu i pet opcija s praznim poljima za unos nove mreže koju želite koristiti:

- Naziv mreže: naziv mreže koju želite dodati.
- Novi RPC URL: URL za mrežni RPC koji želite dodati.
- ID lanca: ID za slanje i usmjeravanje transakcija na mrežu koju želite dodati.
- Simbol valute (neobavezno): simbol valute mreže koju želite dodati. Na primjer, "ETH" je simbol za Ethereum, a "ETC" je simbol za Ethereum Classic.
- Block Explorer URL (izborno): MetaMask ima poveznice na blockchain explorere po mreži za provjeru povijesti računa, novih poslanih transakcija i stanja na njima, tako da biste ovdje dodali block explorer za mrežu koju želite dodati.

![Korak 5](./05.png)

## Korak 6: Unesite informacije o mreži Ethereum Classic

Sljedeći korak je dodavanje specifičnih informacija za Ethereum Classic. Ispod su mrežni podaci koje sam koristio:

- Naziv mreže: `Ethereum Classic`
- Novi RPC URL: `https://www.ethercluster.com/etc`
- ID lanca: `61`
- Simbol valute (neobavezno): `ETC`
- Block Explorer URL (izborno): `https://blockscout.com/etc/mainnet/`

Za "RPC URL" upotrijebio sam onaj koji je za ovu svrhu pružila [ETC Cooperative](https://etccooperative.org/), a koji je iz proizvoda koji su napravili pod nazivom [Ethercluster](https://ethercluster.com/)

_[Napomena urednika] Etherclusterom sada upravlja [RIVET](https://rivet.cloud/). Više RPC krajnjih točaka možete pronaći u odjeljku [mreža](/network/endpoints)._

"Chain ID" mora biti "61" jer je to specifičan ID mreže Ethereum Classic za slanje ETC transakcija novčanicima i čvorovima u operativni blockchain.

Iako su "symbol" i "block explorer URL" izborni, preporučujem korištenje "ETC" kao simbola jer je to nadaleko poznati tržišni simbol mreže, i BlockScout kao blockchain explorer jer je to onaj koji obično koristim ( ali možete dodati željeni!).

Kliknite "spremi" da dodate ETC u MetaMask.

![Korak 6](./06.png)

## Korak 7: Pogledajte Ethereum Classic u padajućem izborniku Mreže

Nakon što je ETC dodan, vidjet ćete u padajućem izborniku mreža da je dodan na popis mreža.

![Korak 7](./07.png)

## Korak 8: Možete vidjeti svoj isti račun, ali na ETC-u

Ako odete na svoj račun, primijetit ćete da je isti kao vaš ETH račun. U mom slučaju to je isti `0x48c1...EfF3` račun.

To je zato što i ETH i ETC koriste isti format računa, tako da se računi na Ethereumu također mogu koristiti u Ethereum Classic.

Zapravo, možda se sjećate da sam imao nulti saldo na svom ETH računu, ali sada se saldo od 1 ETC može vidjeti na istom računu, ali na Ethereum Classic. To je zato što sam poslao 1 ETC na ovaj račun u mreži Ethereum Classic za ovu demonstraciju.

Također imajte na umu da se ETC mreža sada prikazuje na traci mreža, a simbol "ETC" sada se koristi za prikaz stanja.

![Korak 8](./08.png)

## Korak 9: Možete se vratiti na Ethereum s istim računom

Dakle, budući da obje mreže koriste isti format računa, možete se vratiti na Ethereum mainnet i ponovno ćete moći vidjeti svoj ETH račun s istim brojem.

![Korak 9](./09.png)

## Korak 10: Možete se vratiti na Ethereum Classic s istim računom

Za korištenje ETC mreže jednostavno ponovno odaberite Ethereum Classic u padajućem izborniku mreža gdje ćete ponovno vidjeti svoja ETC stanja.

![Korak 10](./10.png)

//

Želim vam uspjeh u ulaganju i korištenju ETC-a!

---

** Kodeks je zakon **
