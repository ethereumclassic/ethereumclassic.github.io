---
title: "On Ethereum Classic Mining Rewards With The New Monetary Policy"
date: 2018-02-22
author: Christian Seberino
---

![](https://cdn-images-1.medium.com/max/800/1*vFht2pfMD7lijWCGDpNEJA.png)

Ethereum Classic (ETC) mining rewards changed with the new monetary policy. I
will discuss these changes and their effects.

### New Formula

![](https://cdn-images-1.medium.com/max/800/1*94Fy4Fxt6Vtn24QMT78WrQ.jpeg)

ETC miners are rewarded for adding valid blocks to the ETC blockchain. These
rewards consists of three parts:

**Base Rewards** - This part depends on the block numbers. It is paid with newly
created funds. Every five million blocks (about 2.5 years) this part decreases
by 20%. Initially it was 5 ETC. It changed to 4 ETC after block number five
million. It will change again to 3.2 ETC after block number ten million around
April 2020.

Define the block era *E* as a function of the block number *N* as follows (//
denotes integer division):

*E* = (*N* - 1) // 5000000

Then the base reward is as follows:

5 ⋅ 0.8*ᴱ*

**Uncle Rewards** - This part depends on the number of uncle blocks included as
well as the block numbers. It is also paid with newly created funds. Each block
can include at most two uncle blocks. The reward for each uncle block is an
additional 3.125% of the base reward. It is now 0.125 ETC per uncle block and
will change to 0.1 ETC after block number ten million.

For the block era *E* and number of uncles *U*, the total uncle reward is as
follows:

0.03125 ⋅ *U* ⋅ (5 ⋅ 0.8*ᴱ* )

After block number five million, miners that *create* the uncle blocks also get
this same reward per uncle block.

**Gas Rewards** - This part depends on the transactions included. It is paid
from the originating accounts. Miners execute the transactions and receive
payments for the gas required. Each transactions specifies a price paid per unit
gas.

For gas requirements *G*₁, *G*₂, *G*₃, … and gas prices *P*₁, *P*₂, *P*₃, …, the
total gas reward is as follows:

*G*₁ ⋅ *P*₁ + *G*₂ ⋅ *P*₂ + *G*₃ ⋅ *P*₃ + …

Therefore, the total reward for creating a block is the following:

(1 + 0.03125 ⋅ *U* ) ⋅ (5 ⋅ 0.8*ᴱ* ) + *G*₁ ⋅ *P*₁ + *G*₂ ⋅ *P*₂ + *G*₃ ⋅
*P*₃ + …

### Example Calculations

![](https://cdn-images-1.medium.com/max/800/1*CBy2Wk7IbkpmUgDkOwAceg.jpeg)

Here is a Python script that uses this mining reward formula to calculate mining
rewards:

    #!/usr/bin/env python3

    BASE_INITIAL  = 5
    BASE_PERCENT  = 0.8
    UNCLE_PERCENT = 0.03125
    N_ERA_BLOCKS  = 5e6

    def mining_reward(block_number, num_uncles, gas_reqs, gas_prices):
            """
            Calculates mining rewards from block information.  The gas
            information must be provided in lists or tuples.  The gas
            prices must be in ETC.
            """

            era           = (block_number + 1) // N_ERA_BLOCKS
            base_reward   = (BASE_PERCENT ** era) * BASE_INITIAL
            uncle_reward  = UNCLE_PERCENT * base_reward
            uncle_rewards = num_uncles * uncle_reward
            gas_rewards   = 0
            for (gas_req, gas_price) in zip(gas_reqs, gas_prices):
                    gas_rewards += gas_req * gas_price

            return base_reward + uncle_rewards + gas_rewards

Here are some example calculations on real ETC blockchain data:

    >>> mining_reward(5425392, 0, [], [])
    4.0

    >>> mining_reward(5423326, 1, [], [])
    4.125

    >>> mining_reward(5424471, 0, [36163, 36163] , [2e-8, 2e-8])
    4.00144652

    >>> mining_reward(5421363, 1, [21000, 21000, 21000, 21000, 21000], [5.5e-8, 2e-8, 2e-8, 1.6e-8, 1e-8])
    4.127541

### Total Supply

![](https://cdn-images-1.medium.com/max/800/1*CI_LeLWUYbgI4AuYp3mj6A.png)

The new monetary policy bounds the supply of ETC. Notice only the base and uncle
rewards increase the supply since the gas rewards just transfer existing funds.
Because the uncle rewards vary, the eventual total supply of ETC can only be
approximated.

The formula for the future increase in supply per era, assuming a constant
number of uncle blocks, is the following:

5000000 ⋅ (1 + 2 ⋅ 0.03125 ⋅ *U* ) ⋅ (5 ⋅ 0.8*ᴱ* )

The factor of 2 is necessary to include the uncle block creator rewards. The
total supply can be estimated from this formula by adding the contributions for
the remaining eras. Era 192, which will occur in about 456 years, is the last
era which increases the supply.

Assuming no more uncle blocks gives a lower bound of about 198.3 million ETC.
Assuming the maximum number of uncle blocks gives an upper bound of about 210.6
million ETC.

### Conclusion

![](https://cdn-images-1.medium.com/max/800/1*8EYoI0_aQoGf6OCPsLK_GQ.jpeg)

The new monetary policy modifies mining rewards and limits the total supply of
ETC. Hopefully all the details are now more clear.

### Feedback

You can contact me by clicking any of these icons:

![](https://cdn-images-1.medium.com/max/800/0*eoFC6QOWZ--bCngK.png)

![](https://cdn-images-1.medium.com/max/800/0*i3CwTFEKUnKYHMf0.png)

![](https://cdn-images-1.medium.com/max/800/0*HQj6HSHxE7pkIBjk.png)

### Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

### License

![](https://cdn-images-1.medium.com/max/800/0*hocpUZXBcjzNJeQ2.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0
International License.
