---
title: "The Mining Game: Explaining Blockchains"
date: 2017-11-05
author: Christian Seberino
---

To help people understand blockchains, I have created a blockchain game
available [here](http://mininggame.pythonanywhere.com/). (The source code is
available [here](https://bitbucket.org/seberino/mining_game).) I will explain
the game rules and the user interface. I will also mention some possible
insights from playing this game.

### Game Rules

* Players can create and submit blocks for inclusion into chains.
* Blocks consist of five fields: block numbers, nonces, previous initials, player
initials, and, payloads.
* Chains are sets of *valid* blocks that are ordered by block numbers, and, that
start with block number zero.
* Blocks are valid if their hashes *begin* with a zero, their previous initials
equal the *player* initials of the *preceding* block in a chain, and, they
contain a payload from the payload list.
* Nonces can be changed to modify hashes.
* It is possible to submit invalid blocks.
* The game is over when at least one block has been submitted for every possible
block number.
* Winners have the greatest numbers of blocks in the *longest* chains.
* It is possible for the longest chain to *not* extend to the largest possible
block number.

### User Interface

Players can enter block fields in the form:

![](./1eJJfLId2umW5jY2LQnYUnQ.png)

Players select payloads from the payload list:

![](./1VB2HFw5Hefqc9bznkVzt8w.png)

Players can click the "Hash Block" button to calculate the hash of a block, or,
the "Submit Block" button to submit a block:

![](./1hylABG2F9EASeHMXC24jsQ.png)

Submitted blocks appear in the yellow region. Valid blocks will be blue and
invalid blocks will be red:

![](./1kEAepWFfqATH89WTGnJW5g.png)

Block numbers correspond to rows, and, there is a row for every possible block
number. Therefore, games are over when there is at least one block in every
*row* of the yellow region. When games are over, the blocks of the longest
chains turn white:

![](./1FaeAmcvkJ4cTInOdyOAHyA.png)

Refresh the web page to start new games.

### Possible Insights

The incentives for winning are the same as for mining. For example, because only
valid blocks contribute towards winning, players are motivated to validate
blocks just like in mining. Also, because only the longest chains contribute
towards winning, players are motivated to ignore the smaller chains just like in
mining.

### Final Thoughts

Hopefully this game will help illuminate many blockchain concepts. Feel free to
share it with anyone interested in blockchains.

### Feedback

You can contact me by clicking any of these icons:

![](./0eoFC6QOWZ--bCngK.png)

![](./0i3CwTFEKUnKYHMf0.png)

![](./0HQj6HSHxE7pkIBjk.png)

### Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

### License

![](./0hocpUZXBcjzNJeQ2.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0
International License.
