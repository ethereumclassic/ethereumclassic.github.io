---
title: Proof of Work
seo: An argument for why Proof of Stake is not a suitable solution for blockchains that wish to deliver monumental change, and why Proof of Work is the only known consensus mechanism that can.
---

Todo

## Compromised Consensus

Nothing opitemises the subtle and insidioius nature of centralization like the dogma of Proof of Stake. On the surface, it is a noble attempt to correct the worst aspect of blockchain technology and make it compatible with a sutainable future. Upon closer inspection, though, this dangerous idea actually sacrificaes the most liberating aspect of the tech, and the popularity of Proof of Stake risks squandaring talent and condeming the future to one that is captured; where development contributes not towards human flourishing but to the ever-growing power of an ultra-elite, at the expense of utility for all.

### The Engine of the Future

A blockchain's consensus mechanism is it's engine; it is the most critical piece of infrastrucutre, from which all security, value and ultility depends on. Like an engine, if it stops working properly, all other systems that rely on it functioning become useless, or worse, a danger to it's users.

As with autombile engines, different types of consensus mechanisms are available to blockchain architects when designing a protocol, and the choice of which to use reveals much about which attributes in the _Blockchain Trilemma_ tradeoff are considered a priority. As a chain's consensus mechanism is so important, for _Sovereign Grade_ systems, is the very last thing that should be on the chopping board when it comes to design constraints and security trade-offs.

The first blockchain, Bitcoin, uses Proof of Work; a relatively simple, tried and true type of consensus mechanism that essentially converts electricity into security. Proof of Work is both empirically and theoretically secure from an economic game theory perspective, and even in the face of disruption from nation states, history has shown that it can stave off attacks.

### For the Dreamers

An alternative to Proof of Work that became popular is Proof of Stake, which became a "must have feature" for many blockchain projects. The primary justification for PoS is environmentalism; it was hoped that it would be able to provide the same or better security guaruntees than PoW without consuming large amounts of energy, because consuming energy is inherantly bad.

The idea that Proof of Stake was able to provide not just the same but better security guaruntees than Proof of Work, with not just the same but less energy expendature, should ring alarm bells for those who believe _there is no such thing as a free lunch_, but the technical complexity of Proof of Stake implementaitons created a kind of technological [gish gallop](https://en.wikipedia.org/wiki/Gish_gallop), where fixes upon fixes made PoS protocols increasingly obscure moving targets that became difficult to unpack, and the myth was able to be perpetuated.

Even if the environmentalist argument for Proof of Stake is taken at face value, as we will see, it is clear that PoS requires chains to sacrifice some of the security guaruntees provided by PoW. Proof of Stake chains trade away censorship resistence in return for the promise of less energy consumption; a tradeoff that, aside from marketing gimmicks, seems to make little sense when evaluating the responsibility and utility of blockchains compared to other available technologies.

### Hotel Towels

But it is when the the environmentalist claim is _not_ taken at face value that the choice to use PoS really starts to make sense. Much like a hotel that requests that guests reuse towels to "save the planet", the PoS environmentalist position is conveniently one that also happens to enrich the holders of Proof of Stake currencies, who are able to generate passive income by staking, in their eyes reaping the reards by the very same service that would otherwise be provided by miners, "virtual mining" with next to no expense. Well-intentioned or otherwise, this massive economic incentive explains why despite the security downgrade, it is no wonder that PoS became such a popular choice among cryptocurrency holders, and has manged to recruit many avid promoters.

> Proof of Stake is like the hotel asking you to reuse towels to save the planet, on the surface it's for some good reasons, but in reality it's making them money and giving you a worse service

But in reality, we know there is no such thing as a free lunch, and after many years of theorizing and real life experimenting with Proof of Stake systems, the results are in; PoS on a fundamental level cannot come close to matching the security guauntees provided by PoW.

What's more, even the holders of such coins are really being tricked into thinking they are providing a comparible service to mining; they are not converting a real world espense into any security benefit, but instead are redistributing value from elsewhere in the network to themselves, roughly in proportion to the amount of holders that aren't staking, who are paying this tax. In other words, Proof of Stake does not reward stakers so much as it is punishing non-staking parties.

### Proof of Stake Security Trade-offs

If google would have tyou believe.

The claim that "Proof of Stake is more secure than Proof of Work" is a "[not even wrong](https://en.wikipedia.org/wiki/Not_even_wrong)" statement, due to the nueance in the definition of "secure", and how to square this off with the the pluraility of Proof of Stake systems, which have their own economic, social or technical problems depending on the implementation. As each system has it's own flaws, they should be reviewed case by case, but there are some general problems that are more or less applicable to all Proof of Stake systems, as compared to Proof of Work

https://etherplan.com/2019/10/07/why-proof-of-stake-is-less-secure-than-proof-of-work/9077/

#### Self-Refferential Security

As we explore later, Proof of Stake systems derive their security from their internal state, which adds additioanl complexity, technical debt, and attack surface. Some see Proof of Stake systems akin to [perpetual motion machines](#TODO), based on a premise that breaks the laws of thermodynamics.

#### Pure Pwnage

Whilst 51% attacks in Proof of Work systems can be damaging, they are not fatal, and they require external resources to maintain, and are not guarunteed to be succesful, so censorship happening on PoW chains cannot be sustained indefinitely. In contrast, on PoS chains, once an attacker achieves a certain threashold of stake, the chain can never recover; as the attacker does not need to commit external resources, they cannot be unseated.

#### Less than 33% Attacks

Proof of Stake chains can be permentantly disrupted if an attacker acquires 33% of staked assets, which is necessarily less than 33% of all coins.

> So if the average PoS protocol has 70%+ of it’s tokens staked, you’d need to acquire ~25% of the protocol’s total outstanding tokens to launch an attack. Although every PoS is different, 33% is generally only enough to halt the chain so it can’t come to consensus and produce new blocks, not to actually perform a double spend. For that you’d need a whopping 66%.
>
> - [Viktor Bunin](https://viktorbunin.medium.com/proof-of-stakes-security-model-is-being-dramatically-misunderstood-4ed7b19ca419)

Some argue that there is no economic incentive to cause such an attack, which may be true, but is also an admission that Proof of Stake chains are susceptible to nation state level attacks where economic incentives are not the motivation, suggesting _Sovereign Grade Censorship Resistance_ is not an objective.

#### Centralization of Staking on Exchanges

The high technical barrier and fear of messing up with running a node and manually staking makes it out of reach for the vast majority of casual users in the crypto space, so they will almost all use third party services, usually exchanges, to stake.

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

#### Balance of Power

TODO

#### Miner Attrition

#### Permissioned Onboarding

#### The Rich Get Richer

Staking is a form of Rent Seeking

#### Subjective fork choice

#### Unforgible costilness

#### Accumulated Work

#### Socially Scalable

### Occam's Razor

For all these known downsides, projects that _still_ opt for Proof of Stake must either be _extremely_ concerned about energy usage, or possibly more beleivably, are primarily concerned that that staking will economically benefit stakers. But this concern itself is misguided, as a project can only have long term value if it provides utility, and this is undermiend by Proof of Stake.

In any case, because of the inherant trade-offs required in Proof of Stake systems, it is clear that _Soveriegn Grade Censorship Resistance_ is not a priority on these chains, and as such, they cannot be recommended for deployments that are likely to provide any significant value or have the potential disrupt powerful incumbant institutions.

### Proof of Work

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
