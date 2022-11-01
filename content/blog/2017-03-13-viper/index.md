---
title: "Ethereum's Vitalik Buterin Discusses The New Viper Smart Contract Programming Language"
date: 2017-03-13
author: Christian Seberino
contributors: ["cseberino"]
tags: ["application", "development", "education"]
---

![viper](./70bf8c709e.jpeg)

I recently discussed the new Viper smart contract programming language with Ethereum's Vitalik Buterin.  Viper is similar to Python and provides more features and protections than Serpent.  One of many noteworthy examples is support for Decimal like objects which are helpful for financial applications.  Furthermore, the Viper compiler is *implemented* in Python 3.  The same people that will want to use Viper can more easily help develop and maintain it.  Here is a slightly edited version of the interview:

## Why Viper rather than just improving Serpent?

Serpent is written in C++ and the codebase is hard to work on.  Once we start talking about doing major rewrites of Serpent, then we might as well add a bunch of other features to make the language much safer, like bounds checking, strong typing, etc. Hence, the totally-backwards-incompatible "[S]erpent 2.0" upgrade named Viper.

## Should people start using Viper now instead of Serpent?

I definitely recommend starting to look at Viper over Serpent. It's not 100% feature-complete yet but I hope it will be in a few months.

## Any chance of automated porting of Serpent code like with the 2to3 script for Python 3 ports?

Automated porting will be hard; also, note that not all Serpent code should be ported to Viper, as some Serpent code is for low-level highly optimized code, and that is best done in Serpent.

## What are the major deficiencies of Serpent that Viper addresses?

* Lack of a strong type system

* General ease of writing unsafe and misleading code

* Lack of easy accessibility + extensibility of the compiler code

## When will it be ready for enterprise use?

Hopefully in a few months.

## When did this project start and how do like it so far?

Started working on it in Nov. So far I like it :) I am currently using it for writing Casper contracts.

## What is left to do?

* Add support for calling external contracts

* A stronger type system that can statically check variable bounds, increasing both efficiency and safety

* More tests; always want more tests (ideally with a checker verifying 100% code coverage)

## How can people contribute?

Submit pull requests to http://github.com/ethereum/viper :)

## Feedback

You can contact me by clicking any of these icons:

[![twitter](./fcbc8685c1.png)](https://twitter.com/chris_seberino) [![facebook](./fcbc627df9.png)](https://www.facebook.com/cseberino) [![linkedin](./fcbcf09c9e.png)](https://www.linkedin.com/in/christian-seberino-776897110)

## Acknowledgements

I would like to thank IOHK (Input Output Hong Kong) for funding this effort.

## License

![license](./88x31.png)

This work is licensed under the Creative Commons Attribution ShareAlike 4.0 International License.
