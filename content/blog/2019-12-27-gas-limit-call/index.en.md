---
title: The Summary of the Gas-Limit Configuration Call from 12/27/2019
date: 2019-12-27
author: ETC Discord
description: There was a call on discord discussing limiting ETC's block gas limit
linkImage: ./call.jpg
---

![Call Flavor Image](./call.jpg)

There was an ETC Devs / Miners / Community Call a day ago to talk about options to manage rampant chain bloat, which is on the [ETC mainnet](https://github.com/ethereumclassic/ECIPs/issues/252) at the moment and is being caused by [GasToken](https://gastoken.io), with most blocks being filled with garbage, adding gigabytes to the state every day. This will compromise decentralization in short order and is an existential threat to the health of the network.

[Here is a copy of the recording of the call.](https://bobsummerwill.files.wordpress.com/2019/12/192712-etc_gas-limit-configuration-call_discord.mp3)  Thanks to a.s. for that.

Bob S.’s suggested **action items**:

- Blog post on https://ethereumclassic.org/ by @zacmitton explaining the situation and appealing to miners to voluntarily reduce gaslimit. To 1M? To 2M? To 4M?
- Outreach on the above (using existing contacts we have used for prior HFs)
- Volunteers to generate pull-requests against Parity-Ethereum, Geth Classic, MultiGeth and Hyperledger Besu which change the defaults for ETC to the same.
- Volunteers to consider countermeasures to reverse as much of the damage-to-date as we can by buying gastokens (using community fund if this is expensive) and then using them to debloat the chain.
- Volunteers to consider protocol changes for the long-term, which could include:
  - Gas price changes
  - Removing opcodes (remove refund opcode, remove selfdestruct)
  - Hard cap gas and curve (my pending [ECIP](https://github.com/ethereumclassic/ECIPs/issues/252)) to give multi-decade certainty.

Future discussion is best done on Github issues within the ECIP process, for global visibility and permanent papertrail on the decision-making process.

Thanks to [Zac Mitton](https://twitter.com/voltzroad) (one of the developers) for setting up and hosting the meeting.

---

This post was copied form https://bobsummerwill.com/2019/12/27/gas-limit-configuration-call/