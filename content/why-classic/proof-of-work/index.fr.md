---
title: Preuve de travail
updated: 2022-02-22
disclaimer: opinion
seo: Un argumentaire expliquant pourquoi Proof of Stake n'est pas une solution adaptée aux blockchains qui souhaitent apporter des changements monumentaux, et pourquoi Proof of Work est le seul mécanisme de consensus connu qui le peut.
---

## Points clés

- Ethereum Classic s'engage à rester indéfiniment sur Proof of Work dans la poursuite de _décentralisation maximalisme_.
- La preuve de travail est un mécanisme de consensus éprouvé, le seul connu pour fournir _Résistance à la censure de niveau souverain_.
- La preuve d'enjeu s'accompagne de compromis connus en matière de sécurité, notamment : une complexité supplémentaire, 33 % d'attaques, la vulnérabilité aux manipulations financières, la centralisation de la garde des jalons, la course aux armements de l'APR, l'absence d'enjeu, la suppression des contrôles et des équilibres, et l'enrichissement des riches.
- En toute franchise, la décision d'utiliser la preuve d'enjeu est probablement motivée par des raisons financières, plutôt que par la raison invoquée de la préoccupation environnementale.

## Introduction

Sur le plan technique, l'un des plus grands différentiateurs entre Ethereum Classic et sa fratrie Ethereum™ est l'engagement d'ETC à rester sur Proof of Work. Certains pourraient penser que cela est dû à un manque de développement, d'ambition ou de capacité à passer à un système Proof of Stake "plus avancé", mais cette section vise à dissiper ce mythe en expliquant le raisonnement derrière la décision très intentionnelle d'Ethereum Classic de rester avec Proof of Work au nom de la décentralisation et de la sécurité.

## Le moteur du futur

Le mécanisme de consensus d'une blockchain est son moteur. Il s'agit de la pièce la plus critique de l'infrastructure technologique, dont dépendent toute la sécurité, la valeur et l'utilité. Comme un moteur, s'il cesse de fonctionner correctement, tous les autres systèmes qui dépendent de son fonctionnement deviennent inutiles, ou pire, constituent un danger pour ses utilisateurs.

Comme pour les moteurs automobiles, différents types de mécanismes de consensus sont à la disposition des architectes de blockchain lors de la conception d'un protocole. Le choix de l'une d'entre elles en dit long sur les attributs considérés comme prioritaires dans le compromis [Blockchain](/why-classic/decentralism#the-blockchain-trilemma) . L'importance du mécanisme de consensus d'une chaîne est telle que, pour les systèmes _Sovereign Grade_ , c'est la toute dernière chose qui doit être mise sur le billot lorsqu'il s'agit de contraintes de conception et de compromis en matière de sécurité.

La première blockchain populaire, le bitcoin, utilise la preuve de travail, un mécanisme de consensus relativement simple et éprouvé qui convertit essentiellement l'électricité en sécurité. L'application de la preuve de travail comme mécanisme de consensus pour l'exécution de la blockchain a été la clé de voûte de la conception géniale de Bitcoin. Son application a résolu le problème des généraux byzantins [](https://en.wikipedia.org/wiki/Byzantine_fault) et a ainsi fourni une solution décentralisée à la double dépense, une découverte qui a rendu viable la technologie blockchain telle que nous la connaissons.

La preuve de travail est à la fois empiriquement et théoriquement sûre du point de vue de la théorie des jeux économiques, et les chaînes qui l'utilisent fonctionnent fidèlement depuis plus d'une décennie. Avec un débit suffisant, les chaînes de PoW se sont révélées inarrêtables, même par des États-nations puissants. À l'heure actuelle, aucune partie de la planète ne peut conventionnellement rassembler l'électricité et le matériel nécessaires pour lancer une attaque soutenue contre le mécanisme de consensus du bitcoin, qui le rend souverain.

La preuve de travail n'est pas conçue pour être "parfaite" à 100 % et, comme tous les systèmes, elle comporte un ensemble limité de garanties. Les chaînes Proof of Work sont notamment sujettes à des attaques de type *51%*, dont Ethereum Classic a été victime à de multiples reprises, mais qui persistent néanmoins. Dans les systèmes de PoW, les attaques à 51% sont une caractéristique, pas un bug, et les accepter est le compromis nécessaire pour permettre des règles objectives vérifiables par ordinateur sur la version d'une chaîne qui devrait être considérée comme "correcte" ; celle qui a le plus de hashrate contribué, indépendamment de qui contribue ce hashrate.

La sagesse intemporelle de _if it ain't broke, don't fix it_ vient à l'esprit, et il doit y avoir une raison sérieusement importante de changer cet état de choses.

## Un consensus compromis

Un mécanisme de consensus alternatif à la preuve de travail qui est devenu populaire est la preuve d'enjeu (Proof of Stake), qui est devenue une caractéristique indispensable pour de nombreux projets de blockchain de deuxième génération. Au lieu de convertir l'électricité en hashrate et en sécurité, la Proof of Stake a été décrite comme un "minage virtuel", où les déposants bloquent le capital en échange de la capacité de créer des blocs, et réclament une récompense de bloc en faisant cela.

La justification principale de la PoS est l'environnementalisme ; on espérait que la PoS serait capable de fournir des garanties de sécurité identiques ou meilleures que la PoW sans consommer de grandes quantités d'énergie.

</em> D'emblée, l'idée que la preuve d'enjeu puisse fournir non seulement les mêmes garanties de sécurité que la preuve de travail, mais aussi _de meilleures garanties de sécurité que la preuve de travail, avec non seulement la même dépense énergétique, mais _de moins_ , aurait dû sonner l'alarme pour ceux qui comprennent que _il n'y a pas de repas gratuit_. Mais pour beaucoup, cette vérité essentielle a pu être balayée d'un revers de main, car les circonvolutions interdisciplinaires des différents systèmes de preuve d'enjeu ont créé une sorte de galop technologique [gish gallop](https://en.wikipedia.org/wiki/Gish_gallop), où les corrections successives ont rendu les protocoles PoS de plus en plus complexes et les cibles mouvantes obscures difficiles à démêler, et le mythe du _free lunch_ a été transmis en douce.</p>

Rien n'incarne mieux la nature subtile et insidieuse de la centralisation que le mythe de la preuve d'enjeu. En surface, il s'agit d'une noble tentative pour corriger les pires aspects de la technologie blockchain et la rendre compatible avec un avenir durable, mais à y regarder de plus près, cette idée dangereuse sacrifie les qualités les plus libératrices de la technologie en échange d'objectifs moins nobles.

En réalité, la popularité de Proof of Stake risque non seulement de faire perdre du temps et des ressources, mais si son adoption se poursuit sans être contestée, Proof of Stake pourrait condamner l'avenir à un système qui fonctionne sur des systèmes capturés se faisant passer pour neutres ; où les développements dans l'espace des crypto-monnaies ne contribuent pas à l'épanouissement de l'homme mais au pouvoir toujours plus grand d'une ultra-élite, au détriment de l'utilité ouverte pour tous.

En bref, la preuve de travail est un mécanisme de consensus solide et éprouvé qui donne la priorité à la fourniture des qualités critiques qui donnent naissance à l'utilité et à la proposition de valeur d'une blockchain. La preuve d'enjeu, en revanche, sacrifie ces éléments en échange de la priorité accordée à des idéaux secondaires non critiques, tels que la réduction des émissions de carbone ou, plus honnêtement, la maximisation des bénéfices pour les grandes baleines.

## Les compromis en matière de sécurité

L'affirmation selon laquelle " Proof of Stake est plus sûr que Proof of Work ", est une déclaration "[même pas fausse](https://en.wikipedia.org/wiki/Not_even_wrong)", en raison de la nuance dans la définition de " sûr ", et de la façon de mettre cela en parallèle avec la pluralité des systèmes Proof of Stake qui ont leurs propres compromis économiques, sociaux et techniques.

Une feuille de calcul Google ne peut être attaquée à 51 %, mais cela la rend-elle "plus sûre" que le bitcoin ? La réponse à cette question est "cela dépend de ce que vous entendez par _sécuriser_". Dans le cas des systèmes Blockchain, comme [l'a exploré](/why-classic/decentralism), tout dépend de la nécessité de disposer d'un système robuste, décentralisé, sans permission, capable de résister à l'épreuve du temps et d'obtenir une résistance à la censure de niveau souverain __. Pour _ce type de sécurité_ , une feuille de calcul Google est beaucoup, beaucoup _moins_ "sécurisée" que le bitcoin, car elle peut être prise en charge par une seule partie, Google, sans aucun effort.

En ce sens, Proof of Stake ressemble beaucoup à une feuille de calcul Google. En raison du manque de clarté des garanties de sécurité et de la difficulté à les mesurer, il est impossible, même pour les utilisateurs les plus techniques, d'aller au-delà des déclarations commerciales faites par de nombreux projets de PdS. Par conséquent, la véritable nature de ces systèmes et leurs modes de défaillance potentiels sont obscurcis, par rapport aux garanties explicites, bien comprises et moins compliquées des systèmes de preuve de travail.

Comme chaque système de PdS a ses propres défauts, il est impossible de les évaluer individuellement. Néanmoins, certains problèmes généraux sont plus ou moins applicables à tous les systèmes de Proof of Stake par rapport à la Proof of Work, qui seront explorés ci-dessous pour démontrer que les chaînes font implicitement des compromis en matière de sécurité lorsqu'elles décident d'utiliser PoS plutôt que PoW.

### Sécurité auto-référentielle

La preuve de travail est unique en ce qu'elle peut objectivement combler le fossé entre le "monde réel" et le "monde numérique" en utilisant le langage commun des cycles de calcul, qui, une fois traduits en hashrate, peuvent être vérifiés de manière fiable par un logiciel. Les blockchains qui utilisent la preuve de travail s'appuient sur des mesures infalsifiables provenant de l'extérieur de leur système pour parvenir à un consensus sur leur état interne, convertissant l'énergie en sécurité de la manière la plus directe et la plus efficace, tout en déchargeant la responsabilité de la génération de ces mesures sur le monde extérieur.

La preuve de travail ressemble beaucoup à un moteur à combustion qui consomme de l'énergie et la convertit en un travail de valeur sous la forme de la sécurité de la chaîne, en encourageant l'extraction honnête et en veillant à ce que les attaques à 51 % soient coûteuses.

![Moteur de preuve de travail](./engine.jpg)

Au lieu de chercher la sécurité à l'extérieur de leur système, les blockchains Proof of Stake sont sécurisées par l'autoréférencement de leur propre état et, en tant que tels, ces protocoles embarquent des responsabilités, une complexité et une surface d'attaque supplémentaires qui peuvent compromettre la façon dont cette sécurité est générée.

Cette autoréférence de la sécurité peut être décrite comme une sorte de machine à mouvement perpétuel qui enfreint les lois de la thermodynamique. En surface, le voile de la complexité peut tromper les observateurs en leur faisant croire qu'il peut s'autosuffire pendant une longue période, mais en réalité, une contrainte passée inaperçue signifie qu'il est condamné à s'arrêter dans un avenir pas trop lointain.

![Machine à mouvement perpétuel (Proof of Stake)](./overbalance.jpg)

### Complexité et surface d'attaque

Comme pour tous les systèmes logiciels, une complexité accrue crée une surface d'attaque plus grande dont les acteurs malveillants peuvent tirer parti et exploiter, avec des résultats potentiellement catastrophiques. Dans le contexte des blockchains, qui sont des systèmes économiques aussi bien que logiciels, ce problème est aggravé, et bon nombre d'exploits potentiels qui dorment dans de tels systèmes peuvent ne pas apparaître avant qu'une valeur économique importante soit en danger.

Les bogues et les exploits subtils de la théorie des jeux dans les blockchains sont extrêmement difficiles, voire impossibles à identifier, à tester et à éliminer avant la mise en production. L'une des principales défenses consiste à adhérer au principe technique sain de [Keep It Simple, Stupid](https://en.wikipedia.org/wiki/KISS_principle), une approche abandonnée par les projets Proof of Stake lorsqu'ils rejettent l'élégance simple de Proof of Work et adoptent des alternatives plus complexes et exploitables qui offrent peu ou pas d'avantages pragmatiques au réseau.

### Déséquilibre du pouvoir

Comme [l'a exploré plus tôt](/why-classic/decentralism/#balancing-power), en retirant les mineurs du modèle socio-économique d'une blockchain, on supprime une importante force de régulation qui empêcherait autrement la capture ; on garde les autres parties honnêtes par la menace d'un veto sur les mauvaises décisions prises par le minage sélectif des chaînes. Sur les chaînes Proof of Stake, les investisseurs et les "mineurs" (stakers) constituent le même groupe, de sorte que tout abus de pouvoir de la part de ce groupe reste relativement incontrôlé, et la chaîne aura probablement tendance à bifurquer de manière à bénéficier à ce groupe au détriment des autres, par exemple en augmentant les récompenses de staking.

### L'argent n'est pas le pouvoir

La source ultime de sécurité sur les réseaux Proof of Work est une combinaison de distribution d'électricité et de fabrication de matériel. Ces deux types de services sont répartis géographiquement, et de nouveaux fournisseurs peuvent émerger de manière organique. Dans le cas des grands réseaux de preuve de travail comme le bitcoin, les ressources nécessaires pour lancer une attaque contre le réseau sont hors de portée de toute organisation mondiale, y compris des États-nations, qui n'ont pas assez d'électricité abordable ou qui ne peuvent pas sécuriser le matériel nécessaire pour monter une attaque.

C'est pourquoi la forte consommation d'énergie des réseaux de preuve de travail n'est pas "gaspillée". Au contraire, la forte consommation d'énergie est ce qui permet de sécuriser le réseau contre les attaques en rendant ces dernières prohibitives et peu pratiques sur le plan logistique. Il est important de noter que les sources d'électricité sont distribuées à l'échelle mondiale et que, contrairement aux ressources financières, elles ne sont pas faciles à transporter et impossibles à centraliser dans un monde d'États nations concurrents qui revendiquent des frontières géographiques.

Les chaînes Proof of Stake sont vulnérables à toute une série d'attaques économiques grâce aux armes financières modernes et au fait que la valeur du réseau est directement liée à la sécurité par le biais du jalonnement. Contrairement au matériel minier et à l'électricité, le capital peut être imprimé à partir de rien dans les systèmes fiat et les ressources peuvent être rassemblées dans le monde entier en appuyant sur un bouton. Les leviers économiques dont disposent les banques centrales et les autres organisations susceptibles d'être menacées par la technologie blockchain sont vastes et sophistiqués. La valeur de tous les réseaux Proof of Stake combinés est une goutte d'eau minuscule comparée à l'économie au sens large, qui dispose d'énormes quantités de capitaux liquides qui peuvent être empruntés, exploités et utilisés par une seule entreprise avec une puce sur son épaule.

Les institutions financières modernes menacées par la technologie blockchain vont certainement mener une guerre économique contre les Proof of Stake, qui ne peuvent pas se contenter de jouer avec le prix, mais qui, ce faisant, peuvent potentiellement provoquer une défaillance totale du système. Grâce à la création de marchés dérivés et à la manipulation des prix, les attaquants sont en mesure d'acheter des droits de vote sur le réseau et d'entraver ou de détruire la capacité à atteindre un consensus par le biais d'attaques par piquetage.

### L'attrition des mineurs et l'enrichissement des riches

Dans les systèmes de preuve de travail, outre les coûts d'électricité courants, les mineurs doivent continuellement mettre à niveau leur matériel, en dépensant des ressources supplémentaires pour rester compétitifs. Il en résulte que le nombre d'individus pouvant exploiter une mine de manière rentable est en constante évolution. Si un mineur est mauvais dans l'exploitation minière, il finira par perdre sa capacité à gagner sa vie, car il sera dépassé par d'autres mineurs.

C'est une bonne chose pour la décentralisation, car un pool de mineurs en constante évolution signifie qu'aucun mineur ne peut s'accrocher à une partie importante d'un réseau pendant une période significative, à moins qu'il ne travaille activement dans l'intérêt du réseau en fournissant des quantités toujours croissantes de hashrate. Pour y parvenir, les mineurs doivent investir dans la recherche et le développement, l'infrastructure et le développement des opérations, tout en prêtant une attention particulière aux événements de la couche sociale, en décidant de l'équilibre du pouvoir et des fourches à exploiter.

Ce rôle vital et multiforme est lobotomisé des systèmes Proof of Stake. Au lieu de cela, il s'agit de remplacer cette lutte constante par une distribution relativement statique de la quantité d'enjeu à laquelle un acteur donné a accès, avec très peu à gagner en investissant dans l'innovation ou d'autres externalités. Le montant des gains ou des pertes d'un staker est entièrement sous son contrôle et, en ne faisant rien, il peut augmenter continuellement son stack sans risque d'être surpassé par la concurrence.

De plus, en raison des économies d'échelle, des frais d'essence et de la proportion des fonds qui doivent être misés par rapport aux fonds qui doivent servir à payer les frais de la vie quotidienne, dans les systèmes Proof of Stake, _les riches s'enrichissent_ à un rythme _plus rapide_, ce qui centralise la distribution de la valeur d'un réseau vers les plus riches metteurs en jeu au fil du temps.

En l'absence d'attrition pour corriger cette tendance, le manque de rotation dans l'écosystème de jalonnement signifie qu'un bloc de pouvoir de méga-baleines accumule une portion toujours plus grande de tous les réseaux de preuve d'enjeu, les rendant de plus en plus susceptibles d'être pris en charge à mesure que le coefficient Nakamoto approche de 0. Il n'y a aucune raison pour que les dynasties de jalonneurs de Preuve d'Enjeu à la recherche de rente ne se poursuivent pas pendant des générations, les gros jalonneurs transmettant leurs sacs de plus en plus grands à la génération suivante, ce qui fait que ce n'est qu'une question de temps avant que les réseaux de Preuve d'Enjeu soient explicitement capturés comme la valeur dans le réseau et le pouvoir de décider des fourchettes gagnantes est attiré vers le haut.

### Pas sans permission

L'absence de permission, sans surprise, est une propriété qui permet à de nouveaux utilisateurs de s'intégrer dans un système sans la permission d'une personne déjà présente dans ce système. Toutes choses égales par ailleurs, les systèmes sans permission peuvent être plus décentralisés au fil du temps que les systèmes avec permission, car ils sont ouverts sans distinction à de nouveaux participants.

L'exploitation minière, et par conséquent la preuve de travail, est sans permission, car n'importe qui (ou n'importe quoi) peut contribuer au réseau en fournissant du hashrate et avoir une chance égale de pouvoir exploiter un bloc en fonction du hashrate qu'il fournit. Chaque hachage est comme un billet de loterie, et plus le nombre de billets achetés est élevé, plus les chances de trouver un bloc et d'obtenir cette douce récompense sont grandes.

Parce qu'il n'y a pas de gardiens, les mécanismes de consensus des preuves de travail _ne peuvent pas se préoccuper_ _de la façon dont_ hashrate est créé, ou _de qui_ a contribué. Il s'agit d'une qualité essentielle pour qu'une chaîne reste neutre et non capturée, car si des gardiens existaient, ils seraient en mesure de rejeter des travaux sur la base de l'identité ou de l'emplacement d'un contributeur, les excluant ainsi et, ce faisant, centralisant et capturant le réseau.

Les systèmes Proof of Stake sont _et non_ sans permission. La seule façon d'acquérir la monnaie nécessaire aux transactions et aux mises est d'acheter __ à quelqu'un qui possède déjà ladite monnaie ; il faut obtenir _l'autorisation_ d'une personne à l'intérieur du réseau pour utiliser le réseau, les détenteurs existants étant les gardiens.

En un sens, tous les réseaux Proof of Stake sont déjà _soft captured_, car les détenteurs de pièces PoS pourraient décider collectivement (ou être contraints) de ne plus commercer avec les utilisateurs d'une certaine catégorie ou juridiction, et ces utilisateurs n'ont aucun moyen d'effectuer des transactions sur le réseau, quel que soit le prix qu'ils sont prêts à payer.

Prenons l'exemple d'une personne issue d'une nation moins développée ou isolée, qui n'a que peu ou pas de possibilités d'effectuer des transactions en dollars ; sans accès au système bancaire, et donc à l'embarquement sur les bourses, et sans personne prêt à effectuer une transaction de gré à gré en espèces dans sa région, elle peut toujours acquérir des devises Proof of Work en achetant simplement du matériel pour les miner. Ce même utilisateur est exclu des blockchains Proof of Stake, ce qui rend ces réseaux moins accessibles, moins utiles et moins précieux.

### Centralisation du jalonnement sur les marchés boursiers

</em> La barrière technique élevée et la peur de se tromper ( _) lors de l'exécution d'un nœud et du jalonnement manuel rendent l'opération hors de portée de la grande majorité des détenteurs occasionnels de crypto-monnaies, de sorte que presque tous sont susceptibles d'utiliser des services tiers, généralement des bourses, pour jalonner.</p>

Le jalonnement sur les échanges est strictement meilleur du point de vue de l'expérience utilisateur. Elle présente l'avantage supplémentaire de permettre aux utilisateurs de débloquer instantanément des fonds sans pénalité, car un important excédent de liquidités permet aux bourses d'arbitrer la période de blocage que la plupart des chaînes Proof of Stake imposent, au nom des utilisateurs.

Il en résulte que pour la plupart des blockchains Proof of Stake, les bourses d'échange géreront, et gèrent probablement déjà, la grande majorité des activités de jalonnement. Cela sape sérieusement l'illusion de décentralisation de ces projets et rend la capture de la chaîne beaucoup plus probable.

À titre d'illustration, considérons le scénario plausible suivant :

Si une application "indésirable" fonctionne sur une grande chaîne de Proof of Stake, un gouvernement ou une puissante organisation multinationale pourrait obliger toutes les bourses sous leur autorité à geler simultanément les fonds de cette chaîne. En supposant qu'ils détiennent un certain seuil d'actifs mis en jeu entre eux, cette partie de l'enjeu pourrait être utilisée pour arrêter le réseau ou forcer les futurs hard forks, rançonner la chaîne et censurer les applications qu'ils souhaitent.

Dans le cadre de la preuve de travail, ce type d'attaque est impossible grâce à la séparation des préoccupations et à la nature géographiquement décentralisée des sources d'électricité.

### La course aux armements de l'APR

Les chaînes de Proof of Stake sont en concurrence les unes avec les autres pour le capital de jalonnement liquide qui, contrairement au matériel de minage lié à des algorithmes spécifiques, peut librement circuler entre _toutes_ les chaînes de PoS en négociant sur des marchés ouverts. Cela signifie qu'au fil du temps, toutes les chaînes Proof of Stake seront sous pression pour augmenter les récompenses de jalonnement, et à leur tour les taux d'inflation, afin d'attirer suffisamment de jalonneurs pour jalonner sur leur chaîne. En conséquence, une "course vers le bas" risque d'engloutir toutes les chaînes Proof of Stake, car elles s'engagent dans une course aux armements APR de plus en plus importante __.

Par exemple, si la chaîne A offre une récompense de 12 %, pourquoi les parieurs miseraient-ils sur la récompense de 3 % de la chaîne B, alors qu'ils pourraient simplement miser sur A et vendre ces récompenses pour B, ce qui leur permettrait d'obtenir plus de B qu'en misant directement sur B ? Cela oblige la chaîne B à augmenter sa récompense, ce qui incite ensuite A à faire de même, et ainsi de suite.

Cette situation est une excellente nouvelle pour les grands jalons, mais elle est terrible pour les utilisateurs qui ont une part relativement plus importante de leurs fonds non jalonnés pour utiliser le réseau, et qui seront taxés de frais exorbitants pour le simple fait de ne pas jalonner. Il est impossible de savoir comment cela va se passer à long terme, mais cela risque de nuire à l'utilité et à la valeur de tous les réseaux de PdS, entraînant une spirale fatale de dévalorisation croissante.

### 33% d'attaques

Les chaînes Proof of Stake peuvent être définitivement interrompues si un attaquant acquiert 33 % des actifs mis en jeu, nécessairement moins de 33 % de toutes les pièces.

> Ainsi, si le protocole PoS moyen a plus de 70 % de ses jetons mis en jeu, il faut acquérir environ 25 % du total des jetons en circulation du protocole pour lancer une attaque. Bien que chaque PoS soit différent, 33 % est généralement suffisant pour arrêter la chaîne afin qu'elle ne puisse pas parvenir à un consensus et produire de nouveaux blocs, et non pour effectuer une double dépense. Pour cela, il faut un énorme 66%.
> 
> - [Viktor Bunin](https://viktorbunin.medium.com/proof-of-stakes-security-model-is-being-dramatically-misunderstood-4ed7b19ca419)

Certains affirment qu'il n'y a pas d'incitation économique directe __ à provoquer une telle attaque parce que l'attaquant risque de dévaluer ses avoirs, ce qui est peut-être vrai, mais c'est aussi une admission que les chaînes Proof of Stake sont susceptibles d'être arrêtées par le biais d'incitations économiques indirectes __ telles que la vente à découvert. Plus important encore, les chaînes de PdS sont susceptibles d'être attaquées à 33 % par des acteurs tels que des États-nations, où les incitations financières ne sont pas la motivation première, ce qui laisse penser que _Résistance à la censure de grade souverain_ n'est pas un objet de préoccupation.

### Perpetually Pure Pwnage

L'attaque de Proof of Stake _33%_ est un problème beaucoup plus important que l'attaque de Proof of Work _51%_, cette dernière n'est pas permanente car elle a un coût d'électricité externe permanent, ce qui rend leur exécution peu pratique pendant des périodes prolongées. De plus, comme les attaques à 51 % ont un coût initial et que, contrairement aux attaques à 33 %, leur succès n'est pas garanti, il y a moins d'intérêt à les réaliser, sans parler du coût de leur persistance.

Si les attaques à 51 % dans les systèmes de preuve de travail peuvent être dommageables, elles ne touchent directement que ceux qui sont exposés aux doubles dépenses, c'est-à-dire principalement les échanges, et non les détenteurs à long terme qui n'effectuent pas de transactions fréquentes. En revanche, 33% des attaques peuvent arrêter la chaîne à perpétuité sur les réseaux PoS.

Sur les chaînes PoS, une fois qu'un attaquant atteint un certain seuil de mise, la chaîne ne peut jamais se rétablir ; comme l'attaquant n'a pas besoin d'engager des ressources externes, il ne peut pas être délogé. La seule solution à cet état d'échec est le hard-forking qui éloigne l'attaquant, ce qui brise _Code is Law_, va à l'encontre de l'objectif d'avoir une blockchain, ajoute de la subjectivité et centralise davantage la chaîne.

### Rien en jeu

Dans Proof of Work, si une bifurcation se produit, les mineurs doivent décider de quel côté de la bifurcation ils veulent exploiter, car il y a un coût externe d'électricité associé à la création de blocs. _Si les mineurs exploitent la "mauvaise" fourchette, leur récompense sera sans valeur et ils auront gaspillé l'électricité dépensée pour l'exploiter. Ils doivent donc choisir judicieusement ce qu'ils exploitent ; le coût de l'électricité_ est en jeu.

En revanche, avec Proof of Stake, si un fork se produit, les ressources mises en jeu, qui font partie de l'état interne du système, sont réparties sur le fork et sont doublées. Les Stakers ont des actifs égaux des deux côtés d'un fork et sont incités à valider les deux côtés, car ils ne sont pas sûrs du côté qui l'emportera. C'est ce qu'on appelle le problème de l'absence d'enjeu [](https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027). Elle est susceptible d'encourager les forks en rendant les forks moins chers et moins risqués, en facilitant l'attaque des chaînes par des manigances basées sur les forks, et en compliquant l'obtention d'un consensus sur le côté d'un split qui est la "vraie" version.

Il est communément admis que le concept de _slashing_ est une solution au problème de l'absence d'enjeu, une technique qui utilise des preuves cryptographiques pour punir les stakers qui valident le "mauvais" côté d'un split. C'est bien beau, mais le slashing ne fonctionne que lorsque les forks utilisent des protocoles qui peuvent valider les preuves de chacun.

Un attaquant pourrait faire pression en faveur d'un hard fork controversé qui rendrait intentionnellement invalide la preuve du fork sur l'ancienne version de la chaîne, rendant éventuellement l'inverse faux, et réintroduisant le problème du rien en jeu tout en encourageant les validateurs à valider les deux chaînes, semant le chaos et divisant la valeur du réseau.

Contrairement à un fork de Proof of Work malveillant où les mineurs gaspilleraient de l'électricité pour miner le nouveau fork, les validateurs de ce nouveau fork de Proof of Stake non seulement pourraient aussi bien le valider, puisqu'il n'y a pas d'enjeu, mais sont incités à le faire car il pourrait bien finir par être la chaîne gagnante - le seul côté qui a de la valeur à l'avenir.

### Résolution perturbée des litiges

Alternativement, en supposant que les deux parties d'un split _reconnaissent_ les preuves de l'autre, la chaîne a alors un problème différent : la résolution des différences légitimes d'opinion qui résulteraient d'un split de la chaîne sur les réseaux Proof of Work.

Ethereum Classic est lui-même un excellent exemple du "mécanisme ultime de résolution des litiges" des chaînes Proof of Work, comme l'explique parfaitement le site [Ethereum.org](https://ethereum.org/en/governance/#dao-fork).

Bien qu'elle dépende fortement des détails de mise en œuvre du protocole, en général, la preuve d'enjeu modifie la dynamique de la bifurcation dure en faveur de la majorité des bailleurs de fonds sur les outsiders, et dans de nombreux cas, détruit tout simplement la chaîne outsider, les forçant à bifurquer dure vers un nouveau protocole s'ils sont en désaccord avec une bifurcation controversée.

Contrairement à la Proof of Work, où la chaîne classique bénéficie de l'avantage de maintenir le statu quo et où les mineurs doivent activement passer à un nouveau fork, sur les chaînes Proof of Stake, la majorité des forkers ont l'avantage, car le côté hérité d'un fork controversé doit mettre en œuvre ses propres hard forks défensifs pour éviter d'être coupé par la majorité. Les nouvelles forks ont la possibilité de supprimer ou non les validateurs de l'ancienne chaîne, d'optimiser la punition des retardataires pour obtenir le résultat souhaité et de manipuler l'économie d'une décision de hard fork.

_Note : Les trois critiques suivantes concernant la Proof of Stake sont une courtoisie de [etherplan.com](https://etherplan.com/2019/10/07/why-proof-of-stake-is-less-secure-than-proof-of-work/9077/)_

### Choix subjectif de la fourchette

Le choix de la bifurcation est la règle de décision que les participants au réseau doivent utiliser lorsqu'on leur présente plus d'une chaîne au moment de la bifurcation, lorsqu'ils adhèrent pour la première fois ou lorsqu'ils quittent et adhèrent à nouveau. En tant que signal physique externe, le PoW permet un choix de fork objectif clair sous la forme de la "plus longue chaîne de preuve de travail". Elle est objective car ce n'est qu'avec la puissance de calcul de l'ensemble du réseau que la plus longue chaîne peut être établie.

Comme les systèmes de PdS ne disposent pas d'une telle quantité objective pour décider de la bonne chaîne, ils doivent recourir à un processus de décision subjectif de la part des participants. Cela signifie qu'ils doivent consulter hors chaîne des explorateurs de blocs, des développeurs, des mineurs ou d'autres sources pour pouvoir décider de la chaîne à suivre. Cela s'applique, en cas de scission, aux nœuds participants du réseau, aux nouveaux entrants et aux nœuds qui quittent et rejoignent à nouveau le réseau.

### Coûts irrécupérables

L'une des caractéristiques physiques fondamentales de la monnaie saine est qu'elle est très coûteuse à produire afin de garantir qu'elle ne puisse pas être falsifiée. Le PoW est à l'origine du coût des jetons, car les mineurs engagent des dépenses considérables, en centres de données et en électricité, pour pouvoir construire des blocs. Cela rend les jetons PoW, comme $ETC et $BTC, infalsifiables en pratique.

Il est simple de vérifier objectivement que les BTC ou ETC d'un détenteur ne sont pas contrefaits grâce à une mesure objective externe intégrée dans l'en-tête de chaque bloc, mais cette preuve n'existe pas dans les systèmes Proof of Stake. Dans les systèmes de points de vente, comme la base de données contenant les comptes et les soldes est facile à écrire par les nœuds et les dépositaires du système, il n'y a pas de coût objectif, et la vérification de l'authenticité des avoirs est beaucoup plus complexe, sujette aux erreurs, et nécessite potentiellement du matériel coûteux.

### Travail accumulé

Comme les mineurs des blockchains PoW travaillent bloc par bloc, ce travail ne constitue pas seulement une barrière pour les nœuds malhonnêtes qui voudraient altérer les blocs actuels ou les derniers blocs, mais ce travail s'accumule au fur et à mesure que la chaîne se construit. Cela signifie que les blocs qui sont enfouis plus loin dans la chaîne deviennent exponentiellement plus difficiles à modifier ou à falsifier pour les attaquants. Par exemple, à l'heure où nous écrivons ces lignes, il faudrait 340 jours avec 100 % de la puissance de hachage actuelle du réseau Bitcoin pour pouvoir inverser toute la chaîne.

Dans les grands livres distribués PoS, parce qu'ils n'utilisent pas le PoW, l'inversion de la chaîne entière est triviale en termes de travail de calcul, et peut donc être réalisée en quelques minutes.

## Serviettes d'hôtel

Même si l'argument écologiste en faveur de Proof of Stake est pris au pied de la lettre, il est clair que PoS exige des chaînes qu'elles sacrifient de nombreuses garanties de sécurité autrement fournies par Proof of Work. Les chaînes de preuve des pieux troquent la résistance à la censure contre la promesse d'une moindre consommation d'énergie. Mis à part les gadgets marketing, ce compromis semble avoir peu de sens lorsqu'on évalue de manière pragmatique la responsabilité et l'utilité des blockchains par rapport aux autres technologies disponibles. Il n'y a pas de repas gratuit, après tout.

Mais lorsque l'affirmation des écologistes est _et non_ prise au pied de la lettre, le choix d'utiliser la preuve d'enjeu commence à avoir du sens. À l'instar d'un hôtel qui demande à ses clients de réutiliser leurs serviettes pour "sauver la planète", la position écologiste de la PoS est opportunément une position qui se trouve également enrichir les détenteurs de ces monnaies, qui peuvent générer des revenus passifs en jalonnant. À leurs yeux, le jalonnement leur permet de récolter les fruits de la prestation du même service que les mineurs, à savoir le "minage virtuel", sans pratiquement aucune dépense autre que le coût d'opportunité du blocage de la mise.

Qu'elle soit bien intentionnée ou non, cette incitation économique massive explique pourquoi, malgré les dégradations de la sécurité évoquées ci-dessus, il n'est pas étonnant que le PoS soit devenu un choix si populaire parmi les détenteurs de crypto-monnaies et qu'il ait réussi à recruter de nombreux promoteurs avides.

> La preuve de l'enjeu, c'est comme l'hôtel qui vous demande de réutiliser les serviettes pour sauver la planète. En apparence, les intentions sont nobles, mais en réalité, cela leur permet de gagner de l'argent et de vous offrir un service de moindre qualité.

Malgré tous les inconvénients connus, les projets qui optent néanmoins pour la preuve d'enjeu doivent soit être _extrêmement_ préoccupés par l'utilisation de l'énergie, soit, ce qui est peut-être plus crédible, être principalement préoccupés par le fait que l'enjeu profitera économiquement aux investisseurs. Cependant, cette préoccupation est en elle-même malavisée, car un projet ne peut avoir de valeur à long terme que s'il est utile, ce qui est compromis par la centralisation et les compromis rendus nécessaires par Proof of Stake.

Il se peut que les détenteurs de ces pièces pensent qu'ils fournissent un service comparable à l'exploitation minière, mais ils ne convertissent pas une dépense externe du monde réel en un avantage en termes de sécurité, comme dans le cas de l'exploitation minière. Au lieu de cela, ils sont _en train de mélanger les chaises longues sur le Titanic_ en redistribuant la valeur d'autres parties du réseau vers eux-mêmes en taxant les non-acteurs par le biais de l'inflation.

Quoi qu'il en soit, en raison des compromis inhérents requis dans les systèmes Proof of Stake, c'est un autre signe que _Résistance à la censure de niveau souverain_ n'est pas une priorité sur ces chaînes. En tant que tels, ils ne peuvent être recommandés pour des déploiements susceptibles de perturber des institutions puissantes.
