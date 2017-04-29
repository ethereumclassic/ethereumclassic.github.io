---
title: "Ethereum Classic World Computer Transactions Explained"
date: 2017-04-28
author: Christian Seberino
---

![](https://cdn-images-1.medium.com/max/800/0*HOdU25qwLVRmW3Bj.jpg)

The Ethereum Classic (ETC)
[blockchain](https://steemit.com/etc/@cseberino/let-s-admit-blockchains-are-weird-an-introduction-to-the-strangeness)
makes possible an unstoppable, reliable, auditable, trustless and secure world
computer. It exists to serve people. For this reason, it will turn out the
system requires *payments* leading to *transactions* and *receipts*. These
enable people to: send data, send funds, install programs, and, execute
programs. All data, funds and programs are associated with
[accounts](https://steemit.com/etc/@cseberino/the-ethereum-classic-world-computer-accounts-and-states-explained).

# Payments

![](https://cdn-images-1.medium.com/max/800/0*dwEVBeli4Eq1qYvX.jpg)

*People* initiate all activity. (Internet devices may also interact with ETC,
but, they are always doing so on behalf of humans.) Therefore, an access control
system is necessary. The ETC access control system relies on *payments*. These
are made with *transactions*.

# Transactions

Transactions are data structures containing six elements: an address, datum,
gift, offer, nonce and signature.

### Addresses

All transactions are sent to and from accounts. Accounts are specified by
*addresses*. Transactions contain receiving account addresses. These are *not*
used in program installation transactions as they require the creation of new
accounts.

### Data

Transactions send *data* to accounts. Account programs ([smart
contracts](https://steemit.com/etc/@cseberino/the-skinny-on-smart-contracts-an-introduction-and-why-you-should-care))
operate on the data they receive. In program installation transactions, the data
are the program *constructors*. Constructors allow additional flexibility in
program installation like programs that vary with block numbers.

### Gifts

Transactions can send monetary *gifts* to accounts. The amounts are denoted in
units of aETC (10⁻¹⁸ ETC) or weis.

### Offers

Resource requirements to execute transactions are measured in *gas*. Execution
gas requirements may be unknowable beforehand, and, the required mining fees can
vary. Therefore, transactions contain *offers*. These specify prices willing to
pay per gas unit, and, the maximum gas units willing to purchase.

### Nonces

Accounts have counters denoting the number of transactions they have written to
the blockchain. These counters are referred to as *nonces*. Nonces are included
in transactions partially to protect against [replay
attacks](https://steemit.com/ethereumclassic/@cseberino/navajo-indians-help-explain-ethereum-classic-replay-attacks).

### Signatures

For security reasons, sending accounts must digitally *sign* all transactions.
Digital signatures are specified with three values using the Elliptic Curve
Digital Signature Algorithm (ECDSA). The sending addresses of transactions can
be determined from the digital signatures.

# Receipts

Transaction execution details are available in data structures referred to as
*receipts*. Receipts are used by search engines and other applications.

# Conclusion

Transactions are foundational to ETC. They allow humans to interact with it in a
usable manner. Understanding transactions will help you become an ETC guru.

# Feedback

You can contact me by clicking any of these icons:

![](https://cdn-images-1.medium.com/max/800/0*eoFC6QOWZ--bCngK.png)

![](https://cdn-images-1.medium.com/max/800/0*i3CwTFEKUnKYHMf0.png)

![](https://cdn-images-1.medium.com/max/800/0*HQj6HSHxE7pkIBjk.png)

# Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

# License

![](https://cdn-images-1.medium.com/max/800/0*hocpUZXBcjzNJeQ2.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0
International License.
