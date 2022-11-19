---
title: Budući klasik
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Pregled budućeg razvojnog plana i načina na koji se donose odluke u ekosustavu Ethereum Classic, na temelju njegove povijesti i načela.
---

Za razliku od mnogih drugih blockchain projekata, Ethereum Classic nema središnji organizacijski odbor koji odlučuje, tako da se ono što će se implementirati u protokol određuje putem organskog, meritokratskog, pojavnog sustava, a ne od vrha prema dolje. Iako ovaj pristup isprva nije osmišljen kako bi donio eksplozivno širenje, kompromis je napravljen za dugoročnu održivost, a upornost Ethereum Classica stavila ga je u snažnu poziciju za njegovu sljedeću fazu rasta kada mrežni učinci počnu usvajati grudvu snijega.

U ovom ćemo odjeljku raspakirati ovaj proces, dati pregled na visokoj razini trenutnog stanja ETC-a i ukratko pokriti neke potencijalne nadogradnje o kojima se trenutno raspravlja, a koje bi mogle biti na pomolu za ETC.

## Proces nadogradnje

Ethereum Classic, poput Bitcoina, nema plan puta u tradicionalnom smislu razvoja softvera, već proces koji omogućuje implementaciju dobrih značajki ako i kada se pojave i odobri ih zajednica.

### ECIP-ovi

Proces [Ethereum Classic Improvement Proposal (ECIP)](/development/ecips) način je na koji se raspravlja o nadogradnjama na Ethereum Classic i rigorozno ih provjerava zajednica programera. Ovaj je proces otvoren i svatko može doprinijeti izradom nacrta ECIP-a koji bi jednog dana mogao biti uključen u Ethereum Classic.

### Krećite se polako & Ne lomite stvari

Tipično, implementacija novih značajki zahtijeva ogromnu podršku ili, barem, nikakvo značajno protivljenje zajednice Ethereum Classic, što ETC, kao i BTC, čini prilično opreznim u svom tehnološkom razvoju. Bez središnjih grupnih odluka o tome koje se nadogradnje implementiraju, prijetnja od razdvajanja lanca zbog značajnog odbijanja znači da su Hard Forkovi na ETC-u skloni biti sigurni, inkrementalni i iznad svega nesporni.

Umjesto mentaliteta "kreni brzo i slomi stvari", koji može prouzročiti financijsku štetu ako stvari krenu po zlu, značajna ažuriranja obično se razmatraju, dorađuju i testiraju tijekom dugih razdoblja prije nego što se implementiraju u protokol kako bi se ispravno postigao konsenzus _prije_ . vilica.

Osim toga, vodi se računa da se osigura da, koliko god je to moguće, ugovori koji su implementirani još 2015. mogu vjerno i trajno funkcionirati i da se _Kod je Zakon_ održava.

To ne znači da ETC nije u stanju oportunistički inovirati. Jedan takav primjer je [Thanos fork](/knowledge/forks#thanos), koji je iskoristio Ethereumovu sigurnost povećanja veličine DAG-a dopuštajući inače napuštenoj kategoriji GPU-a rudarenje ETC-a, što je bila laka obostrana nadogradnja za Ethereum Classic.

### Naslijeđena inovacija

Ethereum Classic održava kompatibilnost s Ethereum Virtual Machine, nasljeđuje sve inovacije koje se događaju na drugim EVM lancima, uključujući ugovorne sustave, alate za razvojne programere, biblioteke i druge općenite koncepte financirane od strane i razvijene prvenstveno za te druge lance.

Optimistic Rollups, obećavajuća Layer 2 tehnologija koja poboljšava skalabilnost putem transakcija izvan lanca, izvrstan je primjer za to. Zahvaljujući prirodi besplatnog softvera otvorenog koda, milijuni dolara za istraživanje i razvoj potrošeni su na projekte i timove koji nisu bili povezani s Ethereum Classic. Ova je inovacija, zahvaljujući generaliziranoj EVM kompatibilnosti, neizravno povećala korisnost i vrijednost ETC-a.

### Ethereum kao Testnet

Jedna od prednosti ovog pristupa je da Ethereum Classic može stajati po strani dok gleda kako drugi lanci preuzimaju rizik implementacije novih značajki. Tek nakon što se pokažu kao sigurne i učinkovite, dobre značajke mogu se implementirati uz minimalan rizik i razvojni napor.

Na taj se način drugi lanci EVM-a mogu promatrati kao potaknute testne mreže Ethereum Classica, s mnogo rigoroznijim testiranjem nego što to može pružiti tradicionalna testna mreža.

## Pogled naprijed

Od pisanja, 2022. je tek stigla, a ETC počinje godinu doživljavajući val aktivnosti. Litanija novih [aplikacija](/services/apps) i korisnika organski su se spojili, a ETC ekosustav počinje pokazivati znakove mrežnih učinaka, što će usvajanje kao snježna gruda postati sve korisnije i vrjednije.

Nedavni rast djelomično je zahvaljujući rastućoj vojsci kreatora sadržaja Ethereum Classic i utjecajnih osoba koji su stvarali [videozapise](/videos) i memeove, potičući usvajanje putem društvenih medija.

### Spajanje

Ethereum™ mainnet lanac, iako ima neka manja kašnjenja, izgleda sve bliže dovršetku migracije s Proof of Work na Proof of Stake, poznat kao _The Merge_. Za Ethereum Classic ovo će biti izuzetno relevantan događaj, jer se čini da će novoizbačeni GPU rudari tražiti druge lance za rudarenje, a Ethereum Classic je očit izbor.

Migracija rudara s ETH na ETC vjerojatno će donijeti novi val interesa za ekosustav Ethereum Classic, povećati sigurnost mreže i ubrzati usvajanje i vrijednost mreže.

Dodatno, ako dođe do bilo kakvih kratkoročnih problema tijekom ili nakon "The Merge", možda zbog nepredviđenih problema s teorijom igara ili iskorištavanja protokola zbog dodatne složenosti, Ethereum Classic će biti spreman i čekati da pruži rezervni lanac koji ostaje na isprobanom i pravi Ethereum protokol današnjice. Dugoročno gledano, prelazak na Proof of Stake vjerojatno će rezultirati daljnjom centralizacijom Ethereum™ mainneta, što ga čini ranjivim na druge vrste društvenih napada, na koje će opet ETC ostati imun.

### Versioniranje EVM-a

Uz Ethereum Classic koji ima za cilj održati _Code is Law_ kroz mnoga desetljeća, ako ne i stoljeća koja dolaze, značajka velike koristi bit će _verzija_ raspoređenih ugovora. Ovo pruža nekoliko značajnih prednosti dugoročnom radu i održavanju Ethereum Classica, posebice to što čini daleko lakšim održavanje _Kod je zakon_ , dok još uvijek pruža fleksibilnost za nadogradnju izvršenja ugovora u budućnosti.

Umjesto brige o tome hoće li promjena protokola, kao što je ponovno određivanje cijena plina, prekinuti stare ugovore, verzija bi značila da će implementirani kod zajamčeno uvijek raditi na kompatibilnoj verziji EVM-a na temelju broja bloka na koji je implementiran. Osim toga, budući ugovori mogu uključiti funkcionalnost koja bi inače raskinula stare ugovore, što znači da Ethereum Classic može pružiti novu tehnologiju kao što su sheme potpisa, dodati ili izmijeniti ponašanje operacijskog koda itd., bez utjecaja na postojeće aplikacije.

Iako rade na drugoj verziji EVM-a, budući ugovori bi i dalje mogli komunicirati sa starim ugovorima preko istog (ili prevedenog) API-ja kako bi održali interoperabilnost. Čini se da nema očitih nedostataka verzije osim dodatne složenosti potrebne za njegovu implementaciju.

### Sloj 2

Postaje sve jasnije da su jedini razumni načini skaliranja blockchaina u slojevima. Uz Bitcoinovu Lightning Network predvodnicu ove obećavajuće nove domene, Ethereum slijedi u obliku državnih kanala, Optimistic Rollups, zk-Rollups i drugih novih tehnologija.

Sloj 2 obećava da će pružiti odgovarajuća jamstva decentralizacije i nepovjerljivosti, s mnogo većom propusnošću transakcija upravljanjem stanjem izvan lanca i korištenjem osnovnog lanca za rješavanje ovog stanja. U teoriji, ne postoji gornja granica broja transakcija u sekundi u mnogim sustavima Sloja 2 i može zadovoljiti zahtjeve korištenja na razini civilizacije.

S Ethereum Classic EVM-om i predanošću Proof of Work koji će na kraju dominirati rudarenjem u ETCHash-u, to će biti jedan od rijetkih izbora za osnovni sloj Sovereign Grade koji može podržati cijeli niz L2 rješenja.
