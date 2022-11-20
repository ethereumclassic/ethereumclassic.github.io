---
title: Futuro classico
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Una panoramica della futura roadmap di sviluppo e di come vengono prese le decisioni nell'ecosistema di Ethereum Classic, sulla base della sua storia e dei suoi principi.
---

A differenza di molti altri progetti blockchain, Ethereum Classic non ha un comitato organizzativo centrale che detta le regole, quindi ciò che viene implementato nel protocollo è determinato attraverso un sistema organico, meritocratico ed emergente, piuttosto che dall'alto verso il basso. Sebbene questo approccio non sia stato concepito all'inizio per produrre un'espansione esplosiva, il compromesso è stato fatto per la sostenibilità a lungo termine e la persistenza di Ethereum Classic lo ha messo in una posizione forte per la sua prossima fase di crescita, quando gli effetti di rete cominceranno a far crescere l'adozione a valanga.

In questa sezione, esamineremo questo processo, faremo una panoramica di alto livello sullo stato attuale dell'ETC e tratteremo brevemente alcuni potenziali aggiornamenti attualmente in discussione che potrebbero essere all'orizzonte per l'ETC.

## Processo di aggiornamento

Ethereum Classic, come Bitcoin, non ha una roadmap nel senso tradizionale dello sviluppo di un software, ma piuttosto un processo che consente di implementare buone funzionalità se e quando vengono proposte e approvate dalla comunità.

### ECIP

Il processo [Ethereum Classic Improvement Proposal (ECIP)](/development/ecips) è il modo in cui gli aggiornamenti di Ethereum Classic vengono discussi e rigorosamente vagliati dalla comunità degli sviluppatori. Questo processo è aperto e chiunque può contribuire alla stesura di un ECIP che un giorno potrà essere incluso in Ethereum Classic.

### Muoversi lentamente & Non rompere gli oggetti

In genere, l'implementazione di nuove funzionalità richiede un sostegno schiacciante o, almeno, nessuna opposizione significativa da parte della comunità di Ethereum Classic, rendendo ETC, come BTC, piuttosto cauto nel suo sviluppo tecnologico. Non essendoci un gruppo centrale che influenza le decisioni sugli aggiornamenti da implementare, la minaccia di una scissione della catena a causa di una significativa reazione negativa fa sì che gli Hard Fork su ETC tendano a essere sicuri, incrementali e soprattutto non conflittuali.

Piuttosto che una mentalità del tipo "muoviti velocemente e rompi le cose", che può causare danni finanziari se le cose vanno male, gli aggiornamenti significativi sono tipicamente rimuginati, raffinati e testati per lunghi periodi prima di essere implementati nel protocollo, in modo che il consenso possa essere raggiunto correttamente _prima di_ un fork.

Inoltre, ci si preoccupa di garantire che, per quanto possibile, i contratti stipulati nel 2015 possano funzionare fedelmente in perpetuo e che _Code is Law_ sia mantenuto.

Ciò non significa che l'ETC non sia in grado di innovare in modo opportunistico. Un esempio è il fork di [Thanos](/knowledge/forks#thanos), che ha sfruttato l'aumento delle dimensioni del DAG di Ethereum per aumentare la sicurezza, consentendo a una categoria altrimenti abbandonata di GPU di minare ETC, il che ha rappresentato un facile aggiornamento vantaggioso per Ethereum Classic.

### Innovazione ereditata

Ethereum Classic mantiene la compatibilità con Ethereum Virtual Machine, eredita tutte le innovazioni che avvengono su altre catene EVM, compresi i sistemi di contratti, gli strumenti per gli sviluppatori, le librerie e altri concetti generali finanziati e sviluppati principalmente per queste altre catene.

Optimistic Rollups, una promettente tecnologia Layer 2 che migliora la scalabilità attraverso le transazioni fuori catena, ne è un ottimo esempio. Grazie alla natura del software libero open source, milioni di dollari di ricerca e sviluppo sono stati spesi da progetti e team che non avevano alcun legame con Ethereum Classic. Questa innovazione, grazie alla compatibilità generalizzata con gli EVM, ha indirettamente aumentato l'utilità e il valore dell'ETC.

### Ethereum come rete di prova

Un vantaggio di questo approccio è che Ethereum Classic può stare a guardare mentre altre catene si assumono il rischio di implementare nuove funzionalità. Solo dopo aver dimostrato di essere sicure ed efficaci, le buone caratteristiche possono essere implementate con il minimo rischio e sforzo di sviluppo.

In questo modo, le altre catene EVM possono essere viste come testnet incentivate di Ethereum Classic, con test molto più rigorosi di quelli che potrebbe fornire una testnet tradizionale.

## Guardare avanti

Nel momento in cui scriviamo, il 2022 è appena arrivato e l'ETC sta iniziando l'anno con un'impennata di attività. Una litania di nuove app [](/services/apps) e gli utenti si sono organicamente aggregati, e l'ecosistema ETC sta iniziando a mostrare segni di effetti di rete, che faranno crescere l'adozione man mano che la rete diventerà più utile e preziosa.

La recente crescita è in parte dovuta a un crescente esercito di creatori di contenuti e influencer di Ethereum Classic che hanno creato video [](/videos) e meme, promuovendo l'adozione attraverso i social media.

### La fusione

La catena della mainnet Ethereum™, sebbene stia subendo alcuni piccoli ritardi, sembra sempre più vicina al completamento della migrazione dalla Proof of Work alla Proof of Stake, nota come _The Merge_. Per Ethereum Classic si tratterà di un evento estremamente rilevante, poiché sembra probabile che i minatori di GPU appena sfrattati si rivolgano ad altre catene di minatori, ed Ethereum Classic è una scelta ovvia.

La migrazione dei minatori da ETH a ETC porterà probabilmente una nuova ondata di interesse nell'ecosistema di Ethereum Classic, aumenterà la sicurezza della rete e accelererà l'adozione e il valore della rete.

Inoltre, se dovessero verificarsi problemi a breve termine durante o dopo la "fusione", magari a causa di problemi imprevisti di teoria dei giochi o di exploit del protocollo dovuti alla maggiore complessità, Ethereum Classic sarà pronto e in attesa di fornire una catena di ripiego che rimanga sul collaudato e vero protocollo Ethereum di oggi. A lungo termine, il passaggio alla Proof of Stake comporterà probabilmente un'ulteriore centralizzazione della mainnet di Ethereum™, rendendola vulnerabile ad altri tipi di attacchi sociali, da cui l'ETC rimarrà immune.

### Versione EVM

Poiché Ethereum Classic mira a mantenere _Code is Law_ per molti decenni, se non secoli a venire, una caratteristica di grande utilità sarà quella del _versioning_ dei contratti implementati. Questo offre diversi vantaggi significativi per il funzionamento e la manutenzione a lungo termine di Ethereum Classic, in particolare perché rende molto più semplice la manutenzione di _Code is Law_ pur garantendo la flessibilità necessaria per aggiornare l'esecuzione dei contratti in futuro.

Invece di preoccuparsi se una modifica del protocollo, come il riprezzamento del gas, possa rompere i vecchi contratti, il versioning significa che il codice distribuito è garantito per funzionare sempre su una versione compatibile dell'EVM in base al numero di blocco su cui è stato distribuito. Inoltre, i contratti futuri potrebbero optare per le funzionalità che altrimenti interromperebbero i vecchi contratti, il che significa che Ethereum Classic può fornire nuove tecnologie come gli schemi di firma, aggiungere o modificare il comportamento degli opcode, eccetera, senza influire sulle applicazioni esistenti.

Anche se vengono eseguiti su una versione diversa dell'EVM, i contratti futuri saranno in grado di comunicare con i vecchi contratti tramite la stessa API (o una sua traduzione) per mantenere l'interoperabilità. Il versioning non sembra avere alcun aspetto negativo, se non la complessità aggiuntiva richiesta per la sua implementazione.

### Livello 2

Sta diventando sempre più chiaro che l'unico modo ragionevole per scalare le blockchain è a strati. Con la Lightning Network di Bitcoin alla guida di questo nuovo e promettente settore, Ethereum la segue sotto forma di State Channels, Optimistic Rollups, zk-Rollups e altre tecnologie emergenti.

Il livello 2 promette di fornire adeguate garanzie di decentralizzazione e assenza di fiducia, con un throughput di transazioni molto più elevato, gestendo lo stato fuori dalla catena e utilizzando la catena di base per regolare questo stato. In teoria, in molti sistemi Layer 2 non esiste un limite massimo al numero di transazioni al secondo e può soddisfare i requisiti di utilizzo della scala di civilizzazione.

Con l'EVM di Ethereum Classic e l'impegno per la Proof of Work che alla fine dominerà il mining in ETCHash, sarà una delle poche scelte per un livello di base di grado sovrano in grado di supportare una gamma completa di soluzioni L2.
