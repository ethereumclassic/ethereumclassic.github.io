---
title: Utilizzo di MetaMask con ETC
date: 2021-03-02
updated: 2022-07-05
author: Donald McIntyre, Etherplan
seo: Una guida passo passo su come utilizzare MetaMask con Ethereum Classic per inviare ETC e interagire con le applicazioni decentralizzate.
info: Questo articolo è stato [creato da Etherplan](https://etherplan.com/2021/03/02/how-to-connect-metamask-to-ethereum-classic/15512/). Per ulteriori tutorial su Ethereum Classic, teoria e concetti sulle criptovalute, consultare [etherplan.com](https://etherplan.com).
contributors:
  - DonaldMcIntyre
---

**⚠️ Aggiornate**  
Ora potete aggiungere facilmente ETC a MetaMask facendo clic su "Connect-Wallet" su https://chainlist.org/en/chain/61.

Questo link si trova anche in fondo a tutte le pagine di questo sito.

---

[MetaMask](https://metamask.io) può essere utilizzato come portafoglio per gestire gli ETC e i Token, nonché per interagire con le applicazioni che lo supportano. Questo post spiega come iniziare a utilizzare MetaMask con la rete Ethereum Classic (ETC).

Potete anche prendere in considerazione [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?ucbcb=1), un fork di MetaMask che supporta l'ETC in modo immediato.

## Passo 1: Accesso a MetaMask

Il primo passo consiste nell'effettuare il login per sbloccare la MetaMask.

![Passo 1](./01.png)

## Fase 2: Visualizzazione della schermata iniziale

Verrà visualizzata la normale schermata iniziale. In questo caso la rete predefinita è Ethereum (ETH) e il vostro conto verrà visualizzato come di consueto. Quando si utilizzano altre reti, queste vengono visualizzate come predefinite quando si sblocca la MetaMask, se sono state le ultime utilizzate.

Nel mio caso, indica Ethereum come rete iniziale, e ho un saldo zero nel mio conto ETH `0x48c1...EfF3`.

![Passo 2](./02.png)

## Passo 3: aprire il menu a discesa Reti

Il passo successivo consiste nell'aprire il menu a discesa delle reti. Per farlo, è sufficiente fare clic sulla barra in cui viene visualizzata la rete predefinita.

Come si può vedere sopra, l'elenco predefinito delle reti è la mainnet di Ethereum e le sue testnet più popolari.

L'"Host locale 8545" sarebbe una connessione a un nodo Ethereum, se fosse in esecuzione sulla vostra macchina.

"Custom RPC" è l'opzione per aggiungere reti personalizzate, in questo caso ETC.

"RPC" è l'acronimo di "remote procedure call" (chiamata di procedura remota), il termine che indica il protocollo utilizzato dalle macchine per chiamare altri programmi in macchine remote.

![Passo 3](./03.png)

## Passo 4: selezionare RPC personalizzato

Il passo successivo è fare clic su "RPC personalizzato".

![Passo 4](./04.png)

## Passo 5: visualizzare il modulo Nuova rete

Dopo aver selezionato "RPC personalizzato", verrà visualizzato il modulo per aggiungere una rete. Presenta un messaggio di sicurezza in alto e cinque opzioni con campi vuoti per inserire la nuova rete che si desidera utilizzare:

- Nome della rete: Il nome della rete che si desidera aggiungere.
- Nuovo URL RPC: Un URL per l'RPC di rete che si desidera aggiungere.
- ID catena: l'ID per inviare e indirizzare le transazioni alla rete che si desidera aggiungere.
- Simbolo di valuta (opzionale): Il simbolo della valuta della rete che si desidera aggiungere. Ad esempio, "ETH" è il simbolo di Ethereum, mentre "ETC" è il simbolo di Ethereum Classic.
- URL del Block Explorer (opzionale): MetaMask dispone di collegamenti ai blockchain explorer per ogni rete per controllare la cronologia dei conti, le nuove transazioni inviate e i saldi, quindi qui si dovrebbe aggiungere un block explorer per la rete che si desidera aggiungere.

![Passo 5](./05.png)

## Passo 6: inserire le informazioni sulla rete Ethereum Classic

Il passo successivo consiste nell'aggiungere le informazioni specifiche di Ethereum Classic. Di seguito sono riportati i dati di rete utilizzati:

- Nome della rete: `Ethereum Classic`
- Nuovo URL RPC: `https://www.ethercluster.com/etc`
- ID catena: `61`
- Simbolo di valuta (opzionale): `ETC`
- URL di Block Explorer (facoltativo): `https://blockscout.com/etc/mainnet/`

Per l'"URL RPC" ho usato quello fornito a questo scopo dalla [ETC Cooperative](https://etccooperative.org/), che proviene da un prodotto da loro costruito chiamato [Ethercluster](https://ethercluster.com/)

_[Nota dell'editore] Ethercluster è ora gestito da [RIVET](https://rivet.cloud/). Ulteriori endpoint RPC sono disponibili nella sezione [network](/network/endpoints) ._

Il "Chain ID" deve essere "61" perché è l'ID specifico della rete Ethereum Classic per l'invio di transazioni ETC da parte di portafogli e nodi alla blockchain operativa.

Sebbene il "simbolo" e l'"URL del blockchain explorer" siano facoltativi, consiglio di utilizzare "ETC" come simbolo perché è il simbolo di mercato ampiamente conosciuto della rete, e BlockScout come blockchain explorer perché è quello che uso di solito (ma potete aggiungere quello che preferite!).

Fare clic su "Salva" per aggiungere ETC a MetaMask.

![Passo 6](./06.png)

## Passo 7: visualizzare Ethereum Classic nel menu a discesa delle reti

Una volta aggiunto l'ETC, nel menu a discesa delle reti si vedrà che è stato aggiunto all'elenco delle reti.

![Passo 7](./07.png)

## Fase 8: Potete visualizzare il vostro stesso account ma su ETC

Se andate sul vostro conto, noterete che è lo stesso del vostro conto ETH. Nel mio caso, si tratta dello stesso account `0x48c1...EfF3` .

Questo perché sia ETH che ETC utilizzano lo stesso formato di conto, quindi i conti su Ethereum possono essere utilizzati anche su Ethereum Classic.

In effetti, forse ricorderete che avevo un saldo pari a zero nel mio conto ETH, ma ora un saldo di 1 ETC può essere visto nello stesso conto, ma su Ethereum Classic. Questo perché ho inviato 1 ETC a questo conto nella rete Ethereum Classic per questa dimostrazione.

Si noti inoltre che la rete ETC è ora quella visualizzata nella barra delle reti e il simbolo "ETC" è ora utilizzato per indicare il saldo.

![Passo 8](./08.png)

## Fase 9: si può tornare a Ethereum con lo stesso conto

Quindi, dato che entrambe le reti utilizzano lo stesso formato di conto, potete tornare alla mainnet di Ethereum e potrete vedere il vostro conto ETH con lo stesso numero.

![Passo 9](./09.png)

## Passo 10: Si può tornare a Ethereum Classic con lo stesso account

Per utilizzare la rete ETC, è sufficiente selezionare nuovamente Ethereum Classic nel menu a discesa delle reti, dove verranno visualizzati nuovamente i saldi ETC.

![Passo 10](./10.png)

//

Vi auguro di avere successo investendo e utilizzando ETC!

---

** Il codice è legge
