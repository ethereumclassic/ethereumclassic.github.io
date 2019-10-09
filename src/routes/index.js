import React from 'react'
import Helmet from 'react-helmet'

import Section from '../components/section';
import Banner from '../components/banner';
/*

WHAT IS A BLOCKCHAIN?
Put simply, blockchains provide a way to keep track of digital assets (money, things) without the need for intermediaries, such as banks and other financial institutions.

WHAT IS ETHEREUM CLASSIC?
Ethereum Classic (ETC) is a smarter blockchain, it is a network, a community, and a cryptocurrency that takes digital assets further. In addition to allowing people to send value to each other, ETC allows for complex contracts that operate autonomously and cannot be modified or censored.

This may be best explained with an analogy, imagine Bitcoin as a landline phone—it does one thing very well. ETC is like a smartphone—it can do everything Bitcoin can and much more.

MORE THAN JUST A BLOCKCHAIN
If the Internet was simply a bunch of interconnected computers, and didn’t have any users or creators making websites, it would be largely useless. In much the same way a blockchain needs users and creators. ETC has both and we’re working on solving real world problems of interconnecting people and their devices.


Open and welcoming community


Long history of reliable operation


Your ETC is yours forever

GET STARTED WITH ETHEREUM CLASSIC
Whether you’re looking for wallets, exchanges or even just general information, we have you covered. Check out our resources page to be directed to the right place you’re searching for.

WHY ETHEREUM CLASSIC
ETC has some of the largest network activity of any blockchain, consistently higher than Bitcoin Cash, and neck-and-neck with Litecoin. We have multiple developer teams, all of whom are committed to the long term ETC vision. We are in the top-10 in programmer activity (measured by code commits). We have numerous sources of funding, and we continue to grow, day-by-day, commit-by-commit, line-by-line of code to create a bullet-proof network that anyone can use.

PRINCIPLES
Technology: We are the longest running smart contract blockchain in existence. Blockchains store value. You want your blockchain to last.

Community: We have a strong and principled community. Many of our members have stuck around since the beginning. We look beyond the hype and keep to the principles that keep blockchains functioning.

Immutability: We take a conservative approach to changes here, and this conservatism avoids splits and protects your money; much like Bitcoin.

TECHNOLOGY
ETC allows highly efficient value transfers (more so than Bitcoin and its variants), has a focus on IoT applications, and runs a mathematically verified Ethereum Virtual Machine, or EVM. What this means is that ETC is great at what it sets out to do: be a highly efficient means of exchange that connects the world’s devices.

Our developer teams are working on the technology and partnerships that will allow for seamless use of the ETC network everywhere blockchain is needed.

COMMUNITY
Many blockchain communities have centralized leadership, meaning a few people at the top make the decisions for everyone else. ETC’s community is purposely structured to avoid this. Responsibility for development and discussion are distributed between many parties. This prevents the biased form of “governance” that other blockchains are susceptible to.

IMMUTABILITY
ETC accounts cannot be modified by others. This feature is a philosophy we share with Bitcoin, Litecoin, and other cryptocurrencies.

Some blockchains follow a different philosophy (“governance”) which allows participants to use their social and economic power to vote on the account balances of others. Imagine if all the members of your bank believed you had broken a law. Instead of going to the police, those with the biggest balances and notoriety voted to take away your money. Imagine a system where the wealthy and celebrities have the final say over your money. A fundamental aspect of ETC is that this will never be allowed to happen, and historical precedent has demonstrated this to be the case.

STAY CURRENT
Stay up to date with Ethereum Classic news. Check out some of our most recent announcements and posts below.

STAY UP TO DATE
Get the most up-to-date newsletters delivered straight to your email. Whether you’re looking for general information, hard fork/network upgrades, or live chat the choice is yours.

*/

const Landing = (props) => (
    <>
			<Helmet>
					<title>Yo.</title>
					<meta name="description" content="Landing Page" />
			</Helmet>
			<Banner />
			<Section title="Some title">
				This is a section content area
			</Section>
    </>
)

export default Landing
