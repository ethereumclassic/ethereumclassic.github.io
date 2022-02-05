---
title: Proof of Work
seo: An argument for why Proof of Stake is not a suitable solution for blockchains that wish to deliver monumental change, and why Proof of Work is the only known consensus mechanism that can.
---

On a technical level, one of the biggest differentiators between Ethereum Classic and it's sibling Ethereum is ETC's commitment to remain on Proof of Work. Some might assume that this is due to lack of development, ambition or ability to move to a "more advanced" Proof of Stake system, but this section aims to dispel that myth by explaining the reasoning behind Etheruem Classic's very intentional decision to stay with Proof of Work in the name of decentralization.

In short, Proof of Work is a battle tested and theoerically sound consensus mechanism that prioritises and is able to deliver on the critical qualities that give rise to a blockchain's utility and value proposition. Proof of Stake, on the other hand, sacrifices these elements in reutrn for prioritising non-critical secondary ideals, such as reducing carbon emissions, or maximising returns for large whales.

The change in priorities that Proof of Stake chains advocate for renders them unsuitable for monumental change, proving their lack of commitment to _decentralization maximalism_ and susceptibility to elite capture.

## Compromised Consensus

Nothing opitemises the subtle and insidioius nature of centralization like the fable of Proof of Stake. On the surface, it is a noble attempt to correct the worst aspect of blockchain technology and make it compatible with a sutainable future, but on closer inspection, this dangerous idea actually sacrificaes the most liberating aspect of the tech. The popularity of Proof of Stake risks not only squandaring resources, but condeming the future to one that operates on captured systems masquerading as neutral; where development in the cryptocurrency space contributes not towards human flourishing but to the ever-growing power of an ultra-elite, at the expense of utility for all.

### The Engine of the Future

A blockchain's consensus mechanism is it's engine; it is the most critical piece of infrastrucutre, from which all security, value and ultility depends on. Like an engine, if it stops working properly, all other systems that rely on it functioning become useless, or worse, a danger to it's users.

As with autombile engines, different types of consensus mechanisms are available to blockchain architects when designing a protocol, and the choice of which to use reveals much about which attributes in the _Blockchain Trilemma_ tradeoff are considered a priority. As a chain's consensus mechanism is so important, for _Sovereign Grade_ systems, is the very last thing that should be on the chopping board when it comes to design constraints and security trade-offs.

The first blockchain, Bitcoin, uses Proof of Work; a relatively simple, tried and true type of consensus mechanism that essentially converts electricity into security. Proof of Work is both empirically and theoretically secure from an economic game theory perspective, and even in the face of disruption from nation states, history has shown that it can stave off attacks.

### For the Dreamers

An alternative to Proof of Work that became popular is Proof of Stake, which became a "must have feature" for many second generation blockchain projects. The primary justification for PoS was environmentalism; it was hoped that PoS would be able to provide the same or better security guaruntees than PoW without consuming large amounts of energy.

Straight off the bat, the idea that Proof of Stake would be able to provide not just the same but _strictly better_ security guaruntees than Proof of Work, with not just the same but _less_ energy expendature, should ring alarm bells for those who believe _there is no such thing as a free lunch_. But for many this basic truth was able to hand-waved away, as the interdiciplinary complexity of Proof of Stake created a kind of technological [gish gallop](https://en.wikipedia.org/wiki/Gish_gallop), where fixes upon fixes made PoS protocols increasingly obscure moving targets that became difficult to unpack, and the _free lunch_ myth was able to be perpetuated.

### Proof of Stake Trade-offs

A google spreadsheet cannot be 51% attacked, but does this make it "more secure" than Bitcoin? The answer to this is "it depends on what you mean by _secure_", and in the case of Blockchain systems, as [explained](/why-classic/decentralism), it depends entirely on whether a rhobust, decentralized, permissionless system that can stand the test of time and achieve _Sovereign Grade Censorship Resistance_ is able to be maintained. For _this_ kind of security, a google spreadsheet, is far, far _less_ "secure" than Bitcoin, as it can be taken over by google with zero effort.

In this sense, Proof of Stake is much like a google spreadsheet; lack of transparency around security guaruntees, and the difficulty in measuring them, makes it impossible for even the highly technical users to see past the marketing claims made by many PoS projects; the true nature of these systems and their potential failure modes is obfuscated, as compared with the explicit and less complicated guaruntees of Proof of Work systems.

The claim that "Proof of Stake is more secure than Proof of Work" is a "[not even wrong](https://en.wikipedia.org/wiki/Not_even_wrong)" statement, due to the nueance in the definition of "secure", and how to square this off with the a pluraility of Proof of Stake systems that have their own economic, social and technical trade-offs.

As each PoS system has it's own unique configuration of flaws, appraising them all individually is impractical, but there are some general problems that are more or less applicable to all Proof of Stake systems as compared to Proof of Work, and we provide some of these issues below to demonstrate that trade-offs are implicitly being made by chains that decide to use PoS over PoW.

https://etherplan.com/2019/10/07/why-proof-of-stake-is-less-secure-than-proof-of-work/9077/

#### Self-Refferential Security

Proof of Stake systems derive their security from their internal state, which adds additioanl complexity, technical debt, and attack surface, as unlike Proof of Work, which sources security externally, the chain has the additional responsibility of maintaining this source of security internally. As such, some see Proof of Stake systems akin to [perpetual motion machines](#TODO), a premise that breaks the laws of thermodynamics.

#### 33% Attacks

Proof of Stake chains can be permentantly disrupted if an attacker acquires 33% of staked assets, which is necessarily less than 33% of all coins.

> So if the average PoS protocol has 70%+ of it’s tokens staked, you’d need to acquire ~25% of the protocol’s total outstanding tokens to launch an attack. Although every PoS is different, 33% is generally only enough to halt the chain so it can’t come to consensus and produce new blocks, not to actually perform a double spend. For that you’d need a whopping 66%.
>
> - [Viktor Bunin](https://viktorbunin.medium.com/proof-of-stakes-security-model-is-being-dramatically-misunderstood-4ed7b19ca419)

Some argue that there is no _direct_ economic incentive to cause such an attack, which may be true, but this is an admission that Proof of Stake chains are susceptible to 33% halting via indirect economic incentives such as shorting, and more importantly, nation state level attacks where economic incentives are not the motivation, confirming that _Sovereign Grade Censorship Resistance_ is not an objective of concern.

#### Perpetually Pure Pwnage

Proof of Stake's "33% attack" is a much bigger problem than Proof of Work's "51% attack", the latter of which is not permenant as it has has an ongoing external electricity cost, and as Ethereum Classic has shown, is not fatal, and can be mitigated by increasing confirmation times.

Whilst 51% attacks in Proof of Work systems can be damaging, they only really directly effect those who are exposed to double spends (mostly exchanges, rather than long term holders). Additionally, because they have an up front cost and are unlike 33% attacks, not guarunteed to be succesful, there is diminished incentive to perform them, let alone persist them. Censorship happening on PoW chains, therefore, cannot be sustained without continual expendature of external resources.

On PoS chains, once an attacker achieves a certain threashold of stake, the chain can never recover; as the attacker does not need to commit external resources, they cannot be unseated. The only solution to this failure state is hard-forking away the attacker, which breaks _Code is Law_, adds subjectivituy, and further centralizes the chain.

#### Centralization of Staking on Exchanges

The high technical barrier and _fear of messing up_ with running a node and manually staking makes it out of reach for the vast majority of casual users in the crypto space, so they will almost all use third party services, usually exchanges, to stake.

Staking on exchanges is strictly better from a user experience perspective, and has the additional benefit of allowing users to instantly unstake with no penalty, as the large excess liquidity on exchanges allows them to "arbtirage" the lock-up period on behalf of users.

The result is that for most Proof of Stake coins, exchanges will, and probably already do, manage the vast majority of a coin's staking activity. This seriously undermines the illusion of Proof of Stake more decentralized because it is managed by many holders, and makes the capture of the chain far more likely.

Consider the following extremely plausible scenario:

If an "undesirable" application is operating on a large Proof of Stake chain, a government or mutlinational cabal could compel all exchanges under their jurisdiction to simultanious freeze that chain's capital, and assuming they hold a certain threashold of funds between them, could then use this portion of the stake to push forward a hard fork of their choice, censoring whichever applications they desire.

In Proof of Work, thanks to the separation of concerns and the geographically decentralized nature of electricity sources, this kind of attack is impossible.

#### Race to the Bottom

Proof of Stake chains compete with each other for liquid staking capital that, unlike algorithm-specific mining hardware, can freely move between all PoS chains by trading in open markets. This means that over time, all Proof of Stake chains will need to increase staking rewards, and in turn inflation rates, to entice enough stakers to stake on their chain. A "race to the bottom" will engulf all Proof of Stake chains, as they enter into an APR arms race, at the expense of non-staking holders.

If Polkadot offers a 12% staking reward, why would anyone stake Ethereum's 3% reward, when they can simply sell ther DOTs and end up with more ETH than they would earn by staking directly?

#### Nothing at Stake

It is commonly claimed that the concept of "slashing" is a solution to the "nothing at stake" problem, which states that in the case of a chain split or hard fork, both sides of a chain can be staked at no cost, a scenario that is likely to encourage forks and create issues reaching consensus about which side of a split is the "true" version.

Slashing is supposed to solve this problem by using cryptographic proofs to punish stakers that validate the "wrong" side of a split. All well and good, but it only works when forks are running protocols that "understand" each other's proofs.

An attacker could push for a controvertial hard fork that intentionally made this fork's slashing proof invalid on the old version of the chain, optionally making reverse untrue, which would re-introduce the nothing at stake problem, and encourage validators to validate both chains, lest bet against staking a losing chain.

#### No Ultimate Dispute Resolution

Alternatively, assuming that both sides of a split _do_ recognise each other's slashing proofs, the chain then has a different problem: it cannot resolve legitimate differences in opinion that, on Proof of Work networks, would result in chain split.

Etheruem Classic itself is an excellent example of this "ultimate dispute resolution" mechanism that exists in Proof of Work chains, as explained no better than on the [Ethereum website](#TODO).

Chains that use Proof of Stake must either accept they have a "nothing at stake problem", or accept that difference in opinion is no longer allowed, and that in the case of a split, only one side can "win" and the other will be slashed to death.

Unlike in Proof of Work, where the legacy chain enjoys the advantage of maintaining status quo and miners having to actively make a switch to change forks, the defending side of a controvertial fork in Proof of Stake requries the legacy protocol to implementing their own (or many) hard fork(s) to avoid being slashed a future fork, whereas this new chain can enjoy either slashing or not-slashing the old chain, optimizing the punishment of laggards to get their desired outcome depending on the situation.

#### Unbalance of Power

As [explored earlier](/why-classic/decentralism/#balancing-power), the removal of miners from a blockchain's socioeconomic model takes away an important regulating force that would otherwise prevent capture; keeping other parties honest through the threat of vetoing poor decisions by the selective mining of chains. On Proof of Stake chains, investors and "miners" (stakers) are the same group, so any abuse of power by this group remains relatively unchecked, and the chain is likely to tend to fork in ways the benefit this group at the expense of others, such as by increasing staking rewards.

#### Miner Attrition vs The Rich Get Richer

In Proof of Work systems, beyond ongoing electricity costs, miners have to continually upgrade hardware, expending additional resources in order to remain competitive. The effect of this is that the pool of individuals who are able to mine is constantly shifting; if a miner is bad at mining, they will eventually lose their right to mine as they are out-competed by other miners.

This is good for decentralization, as a constantly shifting pool of miners means that no one miner is able to hold on to a significant portion of a network for any significant amount of time unless they are actively working in the best interests of the network by providing ever-increasing amounts of hashrate. To achieve this miners must invest in research and development, infrastrucutre, and scaling up operations, all the while paying close attention to happenings in the social layer of the protocol decide how to balance power, choosing wisely which hardware to invest in and which chains to mine.

This vital and mutli-faceted role is lobotomized from Proof of Stake systems, which instead, have only one metric to determine how "well" a staker is staking; how much stake they have. Due to economies of scale, the proportion of funds that must be staked vs used for day to day, in proof of stake systems, _the rich get richer_ at a _faster rate_, which centralizes the distribution of a network's value towards the richest stakers.

Over time, the lack of turnover in the staking ecosystem means that an ever-increasing power-block of mega-whales accumulates an ever-increasing poprtion of [all](#race-to-the-bottom) Proof of Stake networks, making these networks increasingly susceptible to takeover, as the nakamoto coefficient approahces 1 (TODO CHECK). This will continue for generations, as big stakers pass their increasingly large bags to the next generation; it is merely a matter of time before the Proof of Stake networks are explicitly captured, let alone covertly.

TODO explain how the 'dumb staker' is not the same as the 'dumb miner', marginal benefit, etc.

In this sense, staking is a form of _rent-seeking_, as compared to Proof of Work, stakers do not provide a service, yet stakers are rewarded handsomly for this non-effort at the expense of smaller players.

#### Not Permissionless

TODO big topic, perhaps another blog post about this...

One surprising feature of permissionless systems is that new users don't need permission to start using them.

Proof of Stake systems are _not_ permissionless, as in order to hold the currency of one of these chains, the only way to get it is by _buying_ it from someone who already has some.

In contrast, _anyone_ is able to mine Proof of Work chains, and are able to submit work to the network without the permission of existing holders.

Whilst this may not sound important, it is an extremely important feature if a project wishes to be decentralized for long periods and avoid capture.

In PoW, mining is an external process to the network of nodes who hold the ledger with accounts, balances, and smart contracts. This separates the ledger from the block creators which gives the network of full nodes several benefits of security in their independence.

In PoS, as the stakers can only participate if they actually have deposits in the ledger, that makes them internal to the database, therefore all the other nodes in the network, who maintain the ledger, cannot be independent from block creators.

#### Subjective fork choice

The fork choice is the decision rule network participants have to use when presented with more than one chain when it splits, when they join for the first time, or when they leave and join again. As an external physical signal, PoW enables a clear objective fork choice in the form of the “longest proof of work chain“. It is objective because only with the computing power of the whole network is that the longest chain can be established.

As PoS systems don’t count with such an objective quantity to decide the correct chain, they have to use a subjective decision making process by the participants. This means they need to consult offchain with block explorers, developers, miners or other sources to be able to decide what chain to follow. This applies, in case of splits, to participating nodes in the network, new entrants, and nodes who leave and join again.

#### Unforgible Costilness

One of the basic physical features of sound money is that it is very costly to produce to guarantee it can’t be forged. PoW provides this costliness of the tokens as miners incur in huge costs, in data centers and electricity, to be able to build blocks. This makes PoW tokens, as $ETC and $BTC, unforgeable in practice.

It is simple to objectively verify that a holder's BTC or ETC is not counterfeit because of an external objective measurement embedded into every block header, but this proof does not exist in Proof of Stake systems. In PoS systems, because the database with accounts and balances is trivial to write by nodes and stakers in the system, there is no objective costliness, and verifying the authenticity holdings is far more complex, error prone, and potentially requires expensive hardware.

#### Accumulated Work

As miners in PoW blockchains work on a block by block basis, that work is not only a barrier for dishonest nodes to tamper with the current or latest blocks, but that work actually accumulates as the chain is built. This means blocks that are buried further away in the chain become exponentially more difficult for attackers to change or forge. For example, at the time of this writing, it would take 340 days with 100% of the current hashing power in the Bitcoin network to be able to reverse the entire chain.

In PoS distributed ledgers, because they don’t use PoW, to reverse the entire chain is trivial in terms of computational work, so it can be done in a few minutes.

### Occam's Razor

For all these known downsides, projects that _still_ opt for Proof of Stake must either be _extremely_ concerned about energy usage, or possibly more beleivably, are primarily concerned that that staking will economically benefit stakers. But this concern itself is misguided, as a project can only have long term value if it provides utility, and this is undermiend by Proof of Stake.

In any case, because of the inherant trade-offs required in Proof of Stake systems, it is clear that _Soveriegn Grade Censorship Resistance_ is not a priority on these chains, and as such, they cannot be recommended for deployments that are likely to provide any significant value or have the potential disrupt powerful incumbant institutions.

### Hotel Towels

Even if the environmentalist argument for Proof of Stake is taken at face value, it is clear that PoS requires chains to sacrifice some of the security guaruntees provided by PoW. Proof of Stake chains trade away censorship resistence in return for the promise of less energy consumption; a tradeoff that, aside from marketing gimmicks, seems to make little sense when evaluating the responsibility and utility of blockchains compared to other available technologies.

But it is when the the environmentalist claim is _not_ taken at face value that the choice to use PoS really starts to make sense. Much like a hotel that requests that guests reuse towels to "save the planet", the PoS environmentalist position is conveniently one that also happens to enrich the holders of Proof of Stake currencies, who are able to generate passive income by staking, in their eyes reaping the reards by the very same service that would otherwise be provided by miners, "virtual mining" with next to no expense. Well-intentioned or otherwise, this massive economic incentive explains why despite the security downgrade, it is no wonder that PoS became such a popular choice among cryptocurrency holders, and has manged to recruit many avid promoters.

> Proof of Stake is like the hotel asking you to reuse towels to save the planet, on the surface it's for some good reasons, but in reality it's making them money and giving you a worse service

But in reality, we know there is no such thing as a free lunch, and after many years of theorizing and real life experimenting with Proof of Stake systems, the results are in; PoS on a fundamental level cannot come close to matching the security guauntees provided by PoW.

What's more, even the holders of such coins are really being tricked into thinking they are providing a comparible service to mining; they are not converting a real world espense into any security benefit, but instead are redistributing value from elsewhere in the network to themselves, roughly in proportion to the amount of holders that aren't staking, who are paying this tax. In other words, Proof of Stake does not reward stakers so much as it is punishing non-staking parties.

## Classic Solutions

Arguably the most important technical component of Etherem Classic (and all useful blockchains) is Proof of Work; the only known concensus mechanism that is able to provide the qualities needed to appraoch _Sovereign Grade_ decentralization. The application of Proof of Work as a consensus mechanism for Blockchain execution was the keystone crowning acheivement in the genious design of Bitcoin. It's applicaiton, for the first time, solved the [Byzantine Generals Problem](#TODo) and thus provided a decentralized [solution to double spending](#TODO), making blockchains possible.

Proof of Work is unique in that it is able to objectively bridge the gap between the "real world" and the "digital world" using the common language of CPU cycles, which when translated into hashrate, can be verified trustlessly by software. Blockchains that use Proof of Work rely on unforgeable measurements from outside the system to reach consensus about the state of interneal system, converting energy into security in the most direct and efficient way possible, whilst offloading the responsibiltiy and potential security concerns for generating that measurement to the outside world.

- Externally sourced security
- Permissionless
- Less complex attack surface
- Battle tested
- Miner Attrition
- Fair Distribution (rich dont get richer)
- Separation of Responsibilities

One the technological experiments persued by Ethereum Foundation that was quickly rejected by the Ethereum Classic community in light of centralization risks, is that of Proof of Stake. As [previously disucssed](#PoS), PoS trades away many of the above qualities that Proof of Work can guaruntee in exchange for the promise of a ecological sustainabiltiy, a responsibility that is outside the scope of blockchain projects as it can be solved elsewhere via clean energy sources, [which are incentivised](#TODO) by Proof of Work mining.

Proof of Work is very much like a combustion engine that consumes energy and converts it into useful work in the form of security for the chain against 51% attacks.

![Proof of Work Engine](./engine.jpg)

Instead of sourcing security from outside their system like Proof of Work, Proof of Stake blockchains determine their state by self-referencing this internal state, and as such onboards additional responsibilities and attack surfaces that can compromise how this measurement is generated. This self-referencing of security can be described as a kind of perpetual motion machine that breaks the laws of termodynamics; on the surface, the veil of complexity may trick observers into assuming it can self sustain for long period, but in reality, it is bound to quickly grind to a halt.

![Proof of Stake Perpetual Motion Machine](./overbalance.jpg)

The misguided hubris in Proof of Stake's attempts to fix the energy use "problem" of Proof of Work fundamentally misunderstands the sociotechnological issue that was so elegantly solved by Bitcoin, which solved the "oracle problem" by injecting an external source of truth into a digital system in a completely objective way. Proof of Stake's off-target attempts to chase the dragon of ever-more-complex implementations that recursively fix the problems they generate can only be described as a fool's errand, which has already wasted far more energy than even the hungriest of mining farms.
