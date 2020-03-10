---
title: "Ethereum Classic Blocks Explained: The Three Categories"
date: 2017-04-28
author: Christian Seberino
---

![](./0pydf21vjXWl8xH12.jpg)

The Ethereum Classic (ETC) blockchain organizes information into *blocks*. These
help improve performance and minimize storage requirements. Blocks can be
divided into headers,
[transaction](https://medium.com/@cseberino/the-ethereum-classic-world-computer-transactions-explained-38646de03499)
lists, and, uncle header lists. It is informative to also consider the following
three alternative block element divisions: *context*, *computation* and
*consensus* categories.

## Context

![](./0llg1l6DGAToRTcUO.jpg)

The context, or environment, of all ETC computations must be *completely*
specified. Therefore, blocks contain block numbers, parent header
[hashes](https://steemit.com/etc/@cseberino/hashes-an-introduction-and-why-they-are-foundational-to-the-internet-and-blockchains),
dates and times. Parents of blocks are the *preceding* blocks:

### Block Numbers

Every block has a unique identifier equal to the number of past blocks. The
first (genesis) block has an identifier of zero.

### Parent Header Hashes

All block elements, except for the transaction and uncle header lists, form the
*headers*. Every block contains the Keccak 256 hash of the header of its parent.
This is partially for security reasons.

### Dates & Times

All blocks contain the date and time they were added to the blockchain. This is
denoted by the number of seconds since 1970–01–01 00:00:00 UTC.

## Computation

![](./077XuYYgPihW_w1Q4.png)

All ETC *computations* must be completely specified as well. Therefore, blocks
contain transaction lists, transaction list hashes, transaction list gas
requirements, transaction list state hashes, transaction
[receipt](https://medium.com/@cseberino/the-ethereum-classic-world-computer-transactions-explained-38646de03499)
list hashes, and, transaction receipt list [Bloom
filters](https://steemit.com/etc/@cseberino/why-bloom-filters-are-so-cool-useful-for-blockchains-and-beyond-an-introduction).
It may seem problematic that blocks only contain *hashes* of states and
receipts. This is acceptable because the blockchain contains sufficient
information to *repeat* the entire history of the ETC world computer. Therefore,
the blockchain *implicitly* contains all states and receipts:

### Transaction Lists

Entities external to ETC submit jobs as *transactions*. Blocks contain lists of
these transactions.

### Transaction List Hashes

Blocks contain the [Keccak
256](https://steemit.com/etc/@cseberino/why-ethereum-classic-uses-an-incorrect-sha3-implementation)
hashes of special
[trees](https://steemit.com/etc/@cseberino/cuban-piracy-and-why-merke-trees-are-so-awesome-for-blockchains)
formed from their transaction lists. This is partially for security reasons.

### Transaction List Gas Requirements

ETC resources are measured in units of *gas*. Blocks include the number of gas
units required to execute their transaction lists.

### Transaction List State Hashes

The
*[state](https://steemit.com/etc/@cseberino/the-ethereum-classic-world-computer-accounts-and-states-explained)*
refers to all the values in all the accounts. Blocks must specify the states
*after* the transaction lists, and the related chores, have been executed.
Therefore, blocks include the Keccak 256 hashes of special trees formed from
these states.

### Transaction Receipt List Hashes

Execution information for all transactions is included in *receipts*. These are
used by search engines and other applications. Blocks contain the Keccak 256
hashes of special trees formed from their list of transaction receipts.

### Transaction Receipt List Bloom Filters

Bloom filters are binary strings used to quickly determine set membership with
nominal storage requirements. Blocks contain Bloom filters for their sets of
transaction receipt *logs*.

## Consensus

![](./0NTUJe8yKvJf4WcoT.jpg)

Mining is the process of creating and validating new blocks. This is referred to
as mining because the participants (miners) are rewarded with newly created
funds. The mining procedure is referred to as the *consensus* algorithm. This
involves a race to find the proof of work information necessary to create new
blocks. The block candidates that lose this race are referred to as the *uncles*
since they are related to the parents. All information pertaining to the
consensus algorithm must be specified. Therefore, blocks contain: miner extra
data, miner
[addresses](https://steemit.com/etc/@cseberino/the-ethereum-classic-world-computer-accounts-and-states-explained),
miner validation helps, miner gas maxima, proof of work information, proof of
work difficulty levels, uncle header lists, and, uncle header list hashes:

### Miner Extra Data

Miners can optionally include up to an additional 32 bytes in blocks they
create. There are no further restrictions on this element.

### Miner Addresses

Miners specify account addresses to receive mining rewards in the blocks they
create.

### Miner Validation Helps

Miners include values to speed up block validation. Blocks could in principle
have been designed without these aids. However, some denial of service attacks
are possible if block validation is too slow.

### Miner Gas Maxima

Blocks specify the maximum possible gas requirements of transaction lists.
Miners can adjust these maxima by small amounts relative to the parents.

### Proof Of Work Information

Miners can only add new blocks to the blockchain if they compute the proof of
work information for those blocks. This proof of work information is included in
the blocks.

### Proof Of Work Difficulty Levels

The consensus algorithm automatically increases the difficulty level for finding
proof of work information when new blocks are being added too quickly. Likewise,
the difficulty level decreases when new blocks are being added too slowly.
Blocks include their proof of work difficulty levels.

### Uncle Header Lists

Blocks contain lists of uncle headers. This improves the security of the
blockchain.

### Uncle Header List Hashes

Blocks include the Keccak 256 hashes of their uncle header lists. This is
partially for security reasons.

## Conclusion

![](./1krAMt9E5V-2_qQnJfPDgJA.jpeg)

Considering these context, computation and consensus categories has hopefully
been enlightening. Sometimes different perspectives can make all the difference.

## Feedback

You can contact me by clicking any of these icons:

![](./0eoFC6QOWZ--bCngK.png)

![](./0i3CwTFEKUnKYHMf0.png)

![](./0HQj6HSHxE7pkIBjk.png)

## Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

## License

![](./0hocpUZXBcjzNJeQ2.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0
International License.
