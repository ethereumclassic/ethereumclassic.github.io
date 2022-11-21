---
title: Future Classic
contribute: true
contributors:
  - pyskell
  - IstoraMandiri
updated: 2022-08-25
disclaimer: opinion
seo: Un aperçu de la future feuille de route du développement et de la manière dont les décisions sont prises dans l'écosystème Ethereum Classic, sur la base de son histoire, de ses principes.
---

Contrairement à de nombreux autres projets de blockchain, Ethereum Classic ne dispose pas d'un comité d'organisation central qui prend les décisions, de sorte que ce qui est mis en œuvre dans le protocole est déterminé par un système organique, méritocratique et émergent, plutôt que par le haut. Bien que cette approche ne soit pas conçue au départ pour produire une expansion explosive, le compromis est fait pour la durabilité à long terme, et la persistance d'Ethereum Classic l'a mis dans une position forte pour sa prochaine étape de croissance lorsque les effets de réseau commencent à faire boule de neige de l'adoption.

Cette section présente ce processus, donne un aperçu général de l'état actuel du CTE et aborde brièvement certaines améliorations potentielles en cours de discussion qui pourraient être envisagées pour le CTE.

## Processus de mise à niveau

Ethereum Classic, comme Bitcoin, n'a pas de feuille de route au sens traditionnel du développement de logiciels, mais plutôt un processus qui permet de mettre en œuvre de bonnes fonctionnalités si et quand elles se présentent et sont approuvées par la communauté.

### ECIPs

[Le processus de proposition d'amélioration d'Ethereum Classic (ECIP)](/development/ecips) est la façon dont les mises à niveau d'Ethereum Classic sont discutées et rigoureusement approuvées par sa communauté de développeurs. Ce processus est ouvert, et tout le monde peut contribuer en rédigeant un ECIP qui pourrait un jour être inclus dans Ethereum Classic.

### Bougez lentement & Ne cassez pas les choses

Généralement, la mise en œuvre de nouvelles fonctionnalités nécessite un soutien écrasant ou, du moins, aucune opposition significative de la part de la communauté Ethereum Classic, ce qui rend ETC, comme BTC, assez prudent dans son développement technologique. Comme aucun groupe central n'influence les décisions relatives aux mises à niveau, la menace d'une scission de la chaîne en raison d'une réaction importante signifie que les Hard Forks sur ETC ont tendance à être sûrs, progressifs et surtout non controversés.

Plutôt que d'adopter la mentalité du "tout va vite et tout casse", qui peut causer des dommages financiers si les choses tournent mal, les mises à jour importantes sont généralement mûries, affinées et testées sur de longues périodes avant d'être intégrées au protocole, de sorte qu'un consensus puisse être atteint de manière appropriée _avant_ .

En outre, on veille à ce que, dans la mesure du possible, les contrats qui ont été déployés dès 2015 puissent fonctionner fidèlement à perpétuité et à ce que _Code is Law_ soit maintenu.

Cela ne signifie pas que l'ETC est incapable d'innover de manière opportuniste. Un tel exemple est le fork [Thanos](/knowledge/forks#thanos), qui a profité de l'augmentation de la taille du DAG d'Ethereum pour balayer la sécurité en permettant à une catégorie de GPU autrement abandonnée de miner de l'ETC, ce qui a été une mise à niveau facile gagnant-gagnant pour Ethereum Classic.

### L'innovation héritée

Ethereum Classic maintient la compatibilité avec la machine virtuelle Ethereum, il hérite de toutes les innovations qui se produisent sur d'autres chaînes EVM, y compris les systèmes de contrats, les outils de développement, les bibliothèques et autres concepts généraux financés par et développés principalement pour ces autres chaînes.

Les rollups optimistes, une technologie prometteuse de niveau 2 qui améliore l'évolutivité grâce à des transactions hors chaîne, en sont un excellent exemple. Grâce à la nature des logiciels libres, des millions de dollars de recherche et de développement ont été dépensés par des projets et des équipes qui n'avaient aucun lien avec Ethereum Classic. Cette innovation, grâce à la compatibilité généralisée des EVM, a indirectement augmenté l'utilité et la valeur du CTE.

### L'Ethereum comme filet d'essai

L'un des avantages de cette approche est qu'Ethereum Classic peut se contenter de regarder les autres chaînes prendre le risque de mettre en œuvre de nouvelles fonctionnalités. Ce n'est qu'après avoir démontré leur sécurité et leur efficacité que les bonnes fonctionnalités peuvent être mises en œuvre avec un minimum de risques et d'efforts de développement.

De cette façon, les autres chaînes EVM peuvent être considérées comme des réseaux d'essai incités d'Ethereum Classic, avec des tests beaucoup plus rigoureux que ceux qu'un réseau d'essai traditionnel pourrait fournir.

## L'avenir

À l'heure où nous écrivons ces lignes, 2022 vient d'arriver, et l'ETC commence l'année en connaissant un regain d'activité. Une multitude de nouvelles applications [](/services/apps) et d'utilisateurs se sont organiquement regroupés, et l'écosystème ETC commence à montrer des signes d'effets de réseau, qui feront boule de neige au fur et à mesure que le réseau deviendra plus utile et précieux.

La croissance récente est en partie due à une armée croissante de créateurs de contenu et d'influenceurs d'Ethereum Classic qui ont créé des vidéos [](/videos) et des mèmes, favorisant l'adoption par les médias sociaux.

### La fusion

La chaîne Ethereum™ mainnet, bien que connaissant quelques retards mineurs, semble de plus en plus proche de l'achèvement de la migration de la preuve de travail vers la preuve d'enjeu, connue sous le nom de _The Merge_. Pour Ethereum Classic, il s'agira d'un événement extrêmement pertinent, car il semble probable que les mineurs GPU nouvellement évincés se tournent vers d'autres chaînes pour miner, et Ethereum Classic est un choix évident.

La migration des mineurs de l'ETH vers l'ETC va probablement susciter une nouvelle vague d'intérêt pour l'écosystème Ethereum Classic, renforcer la sécurité du réseau et accélérer l'adoption et la valeur du réseau.

En outre, s'il y a des problèmes à court terme pendant ou après la "fusion", peut-être en raison de problèmes imprévus de théorie des jeux ou d'exploitation du protocole en raison de la complexité supplémentaire, Ethereum Classic sera prêt et attendra pour fournir une chaîne de secours qui reste sur le protocole Ethereum éprouvé et vrai d'aujourd'hui. À long terme, le passage à la Proof of Stake entraînera probablement une centralisation accrue du mainnet d'Ethereum™, ce qui le rendra vulnérable à d'autres types d'attaques sociales, contre lesquelles, là encore, l'ETC restera immunisé.

### Version de l'EVM

Ethereum Classic ayant pour objectif de maintenir _Code is Law_ pendant de nombreuses décennies, voire des siècles, une fonctionnalité d'utilité majeure sera celle de _versioning_ des contrats déployés. Cela présente plusieurs avantages significatifs pour l'exploitation et la maintenance à long terme d'Ethereum Classic, notamment le fait qu'il est beaucoup plus facile de maintenir _Code is Law_ tout en offrant la flexibilité nécessaire pour mettre à niveau l'exécution des contrats à l'avenir.

Plutôt que de s'inquiéter de savoir si un changement de protocole, tel que la refonte de la tarification du gaz, rompt les anciens contrats, la gestion des versions permettrait de garantir que le code déployé fonctionne toujours sur une version compatible de l'EVM en fonction du numéro de bloc sur lequel il a été déployé. En outre, les futurs contrats pourraient opter pour des fonctionnalités qui, autrement, briseraient les anciens contrats, ce qui signifie qu'Ethereum Classic peut fournir de nouvelles technologies telles que des schémas de signature, ajouter ou modifier le comportement des opcodes, et ainsi de suite, sans affecter les applications existantes.

Même s'ils sont exécutés sur une version différente de l'EVM, les futurs contrats pourront toujours communiquer avec les anciens contrats via la même API (ou une traduction) afin de maintenir l'interopérabilité. Il ne semble pas y avoir d'inconvénient apparent au versioning, si ce n'est la complexité supplémentaire requise pour le mettre en œuvre.

### Couche 2

Il est de plus en plus clair que la seule façon raisonnable de faire évoluer les blockchains est par couches. Le Lightning Network du Bitcoin est le fer de lance de ce nouveau domaine prometteur, suivi par Ethereum sous la forme de State Channels, de Rollups optimistes, de zk-Rollups et d'autres technologies émergentes.

La couche 2 promet de fournir des garanties adéquates de décentralisation et de fiabilité, avec un débit de transaction beaucoup plus élevé en gérant l'état hors chaîne et en utilisant la chaîne de base pour régler cet état. En théorie, il n'y a pas de limite supérieure au nombre de transactions par seconde dans de nombreux systèmes de couche 2, et peut satisfaire les exigences d'utilisation à l'échelle de la civilisation.

Avec l'EVM d'Ethereum Classic et son engagement envers la preuve de travail qui finira par dominer l'exploitation minière dans ETCHash, ce sera l'un des rares choix pour une couche de base de qualité souveraine qui peut supporter une gamme complète de solutions L2.
