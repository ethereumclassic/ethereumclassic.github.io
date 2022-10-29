---
title: Utilisation de MetaMask avec ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Un guide étape par étape couvrant l'utilisation de MetaMask avec Ethereum Classic pour envoyer des ETC et interagir avec des applications décentralisées.
info: Cet article a été [créé par Etherplan] (https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Pour plus de tutoriels sur Ethereum Classic, la théorie et les concepts de crypto-monnaie, veuillez consulter le site [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

**⚠️ Mise à jour**  
Vous pouvez maintenant facilement ajouter l'ETC à MetaMask en cliquant sur "Connect-Wallet" sur https://chainlist.org/en/chain/61.

Vous pouvez également trouver ce lien au bas de chaque page de ce site.

---

[MetaMask](https://metamask.io) peut être utilisé comme un portefeuille pour gérer vos ETC et jetons, ainsi que pour interagir avec les applications qui le supportent. Ce post explique comment commencer à utiliser MetaMask avec le réseau Ethereum Classic (ETC).

Vous pouvez également envisager de consulter [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1), une version dérivée de MetaMask qui prend en charge les ETC dès le départ.

## Étape 1 : Se connecter à MetaMask

La première étape consiste à vous connecter pour déverrouiller votre MetaMask.

![Étape 1](./01.png)

## Étape 2 : Affichage de l'écran initial

Vous verrez votre écran initial normal. Dans ce cas, le réseau par défaut est Ethereum (ETH) et votre compte sera affiché comme d'habitude. Si vous utilisez d'autres réseaux, ils apparaîtront par défaut lorsque vous déverrouillerez votre MetaMask s'ils ont été les derniers utilisés.

Dans mon cas, il montre Ethereum comme réseau initial, et j'ai un solde nul sur mon compte ETH `0x48c1...EfF3`.

![Étape 2](./02.png)

## Étape 3 : Ouvrez le menu déroulant des réseaux

L'étape suivante consiste à ouvrir le menu déroulant des réseaux. Vous pouvez le faire en cliquant sur la barre où vous voyez le réseau par défaut.

Comme on peut le voir ci-dessus, la liste des réseaux par défaut est le mainnet Ethereum et ses testnets les plus populaires.

Le "Local Host 8545" serait une connexion à un nœud Ethereum si vous en exécutez un sur votre machine.

"Custom RPC" est l'option permettant d'ajouter des réseaux personnalisés, dans ce cas-ci ETC.

"RPC est l'abréviation de "remote procedure call" (appel de procédure à distance), qui désigne le protocole utilisé par les machines pour que les programmes appellent d'autres programmes sur des machines distantes.

![Étape 3](./03.png)

## Étape 4 : Sélectionnez RPC personnalisé

L'étape suivante consiste donc à cliquer sur "Custom RPC".

![Étape 4](./04.png)

## Étape 5 : Visualiser le formulaire du nouveau réseau

Après avoir sélectionné "Custom RPC", vous verrez le formulaire pour ajouter un réseau. Il comporte un message de sécurité en haut et cinq options avec des champs vides pour entrer le nouveau réseau que vous voulez utiliser :

- Nom du réseau : Le nom du réseau que vous voulez ajouter.
- Nouvelle URL RPC : Une URL pour le RPC réseau que vous voulez ajouter.
- ID de la chaîne : L'ID pour envoyer et diriger les transactions vers le réseau que vous voulez ajouter.
- Symbole de la devise (facultatif) : Le symbole de la devise du réseau que vous voulez ajouter. Par exemple, "ETH" est le symbole d'Ethereum, et "ETC" est le symbole d'Ethereum Classic.
- URL de l'explorateur de blocs (facultatif) : MetaMask a des liens vers des explorateurs de blockchain par réseau pour vérifier l'historique des comptes, les nouvelles transactions envoyées, et les soldes sur ceux-ci, donc ici vous ajouteriez un explorateur de blockchain pour le réseau que vous voulez ajouter.

![Étape 5](./05.png)

## Étape 6 : Saisir les informations du réseau Ethereum Classic

L'étape suivante consiste à ajouter les informations spécifiques à Ethereum Classic. Vous trouverez ci-dessous les données réseau que j'ai utilisées :

- Nom du réseau : `Ethereum Classic`
- Nouvelle URL RPC : `https://www.ethercluster.com/etc`
- ID de la chaîne : `61`
- Symbole de la monnaie (facultatif) : `ETC`
- Bloquer l'URL d'Explorer (facultatif) : `https://blockscout.com/etc/mainnet/`

Pour l'"URL RPC", j'ai utilisé celle fournie à cette fin par la coopérative ETC [](https://etccooperative.org/), qui provient d'un produit qu'ils ont construit et qui s'appelle [Ethercluster](https://ethercluster.com/).

_[Note de l'éditeur] Ethercluster est maintenant géré par [RIVET](https://rivet.cloud/). Vous trouverez d'autres points d'extrémité RPC dans la section [network](/network/endpoints) ._

L'"ID de la chaîne" doit être "61" car il s'agit de l'ID spécifique du réseau Ethereum Classic pour l'envoi des transactions ETC par les portefeuilles et les nœuds à la blockchain opérationnelle.

Bien que le "symbole" et l'"URL de l'explorateur de blockchain" soient facultatifs, je recommande d'utiliser "ETC" comme symbole car il s'agit du symbole de marché largement connu du réseau, et BlockScout comme explorateur de blockchain car c'est celui que j'utilise habituellement (mais vous pouvez ajouter celui que vous préférez !).

Cliquez sur "enregistrer" pour ajouter le CTE à MetaMask.

![Étape 6](./06.png)

## Étape 7 : Afficher Ethereum Classic dans le menu déroulant des réseaux

Une fois le CTE ajouté, vous verrez dans le menu déroulant des réseaux qu'il est ajouté à la liste des réseaux.

![Étape 7](./07.png)

## Étape 8 : Vous pouvez consulter votre même compte mais sur le CTE

Si vous vous rendez sur votre compte, vous remarquerez qu'il est identique à votre compte ETH. Dans mon cas, c'est le même compte `0x48c1...EfF3` .

En effet, ETH et ETC utilisent le même format de compte, de sorte que les comptes sur Ethereum peuvent également être utilisés sur Ethereum Classic.

En fait, vous vous souvenez peut-être que j'avais un solde nul sur mon compte ETH, mais maintenant un solde de 1 ETC peut être vu dans le même compte, mais sur Ethereum Classic. C'est parce que j'ai envoyé 1 ETC à ce compte dans le réseau Ethereum Classic pour cette démonstration.

Notez également que le réseau ETC est maintenant celui qui apparaît dans la barre des réseaux, et que le symbole "ETC" est maintenant utilisé pour indiquer le solde.

![Étape 8](./08.png)

## Étape 9 : Vous pouvez revenir à l'Ethereum avec le même compte

Ainsi, comme les deux réseaux utilisent le même format de compte, vous pouvez revenir sur le réseau principal Ethereum et vous pourrez à nouveau voir votre compte ETH avec le même numéro.

![Étape 9](./09.png)

## Étape 10 : Vous pouvez revenir à Ethereum Classic avec le même compte

Pour utiliser le réseau ETC, il suffit de sélectionner à nouveau Ethereum Classic dans le menu déroulant des réseaux où vous verrez à nouveau vos soldes ETC.

![Étape 10](./10.png)

//

Je vous souhaite de réussir à investir et à utiliser ETC !

---

** Le code est la loi **
