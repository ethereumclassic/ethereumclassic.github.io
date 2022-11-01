---
title: "The Ethereum Classic Blockchain Is INCOMPLETE & Why That Is OK"
date: 2018-04-11
author: Christian Seberino
contributors: ["cseberino"]
tags: ["application", "development", "education"]
---

![](./1TCmOW4bfexB2Ns21MBDDCw.jpeg)

The Ethereum Classic (ETC) blockchain does *not* contain all the necessary state
information for the ETC system to operate. It does not even *implicitly* contain
all that is needed! I will elaborate and discuss how this is handled.

## State

![](./1ZHk1y55a8LIXrBXyPQh6sw.jpeg)

The state of the ETC system includes all the balances, programs, nonces and
other values in memory. This data is organized into *accounts*. Therefore, the
state is the set of all account values.

Blocks contain transactions which specify *changes* to states. If the state is
known for any time, the state can be determined for all future times by
analyzing the transactions in the following blocks. However, the blockchain does
not *completely* specify the state for *any* time! Admittedly, all blocks
contain state hashes. But, these hashes are *irreversible*!

The initial state for the first block contains accounts with nonzero balances.
In other words, all funds did *not* originate from mining. Do you wonder how
miners know the account balances when processing account transfers involving
these initially funded accounts? The answer involves the ETC node databases.

## Database

![](./1doVsSfjjDVsy5Sy9M7m2Xg.jpeg)

ETC nodes typically contain databases that store the blockchain as well as
additional information. For example, Linux Parity ETC node databases typically
use the following directory:

    $HOME/.local/share/io.parity.ethereum/chains/classic/db

Linux Geth ETC node databases typically use this directory:

    $HOME/.ethereum-classic/mainnet/chaindata

For performance reasons, Parity and Geth use nonrelational (NoSQL) key value
databases. These databases can be accessed directly. They can also be accessed
using the Web 3 library.

## Solution

![](./1gGGUr4Xhyzo6Amcmzqc4ww.jpeg)

All ETC nodes must contain a complete specification of the initial state for the
first block. This is required *in addition* to the blockchain. For example, on
Geth ETC nodes, this initial state is in the database and can be viewed with the
following command:

    geth dump 0

## Conclusion

![](./1mfEpuxoLMi8OZwFXK7kYQw.png)

ETC nodes require a complete specification of the initial state for the first
block as well as the blockchain. ETC nodes typically store this information in
databases. Only with both of these pieces of information can the ETC system
operate.

## Feedback

You can contact me by clicking any of these icons:

![](./0eoFC6QOWZ--bCngK.png)

![](./0i3CwTFEKUnKYHMf0.png)

![](./0HQj6HSHxE7pkIBjk.png)

## Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

## License

![](./0hocpUZXBcjzNJeQ2.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0 International License.
