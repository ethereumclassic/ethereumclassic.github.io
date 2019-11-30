import React from 'react';
import ButtonLink from './buttonLink';
import Link from './link';
import Hamburger from './hamburger';
import BackButton from './backButton';

// TODO convert this into it's own menu type
// TODO import from i18n source

const philosophyItems = [
  {
    text: 'Declaration of Independence',
    link: '/blog/2016-08-13-declaration-of-independence',
    subText:
      "Essentially the ETC Whitepaper. A statement of it's cause, a list of grievances, and a description of it's principles and goals."
  },
  {
    text: 'A Crypto-Decentralist Manifesto',
    link: '/blog/2016-07-11-manifesto',
    subText:
      'Every blockchain creates a social network around its applications, with network value growing exponentially with the number of participants in accordance with Reed’s Law. This value isn’t extracted by intermediaries or controllers, as with previous centralized models. Instead, it’s shared among participants, providing economic incentives for cooperation without coercion. Not all blockchains are created equal. There are three key characteristics that make scalable blockchain-enabled cooperation possible: openness, neutrality and immutability.'
  },
  {
    text: 'Ethereum Classic Vision',
    link: 'https://etherplan.com/2019/08/14/ethereum-classic-vision/8595/',
    subText: 'Why ETC is both a computing platform and an excellent store of value'
  },
  {
    text: 'Ethereum Classic vs Ethereum 2.0, What is the Difference?',
    link:
      'https://etherplan.com/2019/07/23/ethereum-classic-vs-ethereum-2-0-what-is-the-difference/8425/',
    subText:
      'It can be said that Ethereum Classic is a conservatively run system, focused on security, and the upcoming Ethereum 2.0 is a progressively run system, focused on performance'
  },
  {
    text: 'Why Proof of Stake is Less Secure Than Proof of Work',
    link:
      'https://etherplan.com/2019/10/07/why-proof-of-stake-is-less-secure-than-proof-of-work/9077/',
    subText:
      'By anchoring to a proof of work physical base, the subjective layer acquires orders of magnitude more objectivity, thus security.'
  }
];

const usingItems = [
  {
    text: 'What is and how Does Ethereum Classic Work in Layman’s Terms?',
    link:
      'https://etherplan.com/2019/07/02/what-is-and-how-does-ethereum-classic-work-in-laymans-terms/8106/',
    subText: 'A high level overview of how Ethereum Classic works'
  },
  {
    text: 'Using Emerald Wallet',
    link: '/knowledge/using-emerald-wallet',
    subText: 'Learn how to download and install Emerald Wallet'
  },
  {
    text: 'Using Classic Ether Wallet',
    link: '/knowledge/using-classic-ether-wallet',
    subText: 'Learn how to use the Classic Ether Wallet'
  },
  {
    text: 'Use Nifty Wallet',
    link: 'https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?hl=en',
    subText: 'Interact with the ETC Blockchain using Nifty Wallet from your broweser. Similar to Metamask.'
  },
  {
    text: 'Explore Ethereum Classic Dapps',
    link: 'https://dappdirect.net/',
    subText: 'DappDirect.net is a site that tracks the largest smart contracts and applications on the Ethereum Classic blockchain. Submit your Dapps to be listed for free! Similar to DappRadar.'
  }
];

const faqItems = [
  {
    text: 'Sent Funds to the Wrong Address',
    link: '/knowledge/sent-funds-to-the-wrong-address',
    subText: 'Find out what to do if you send funds to the wrong address.'
  }
];

const developerItems = [
  {
    text: 'Emerald SDK',
    link: 'https://etcdev.gitbook.io/docs/emerald-sdk',
    subText:
      'Emerald Software Development Kit (SDK) is a development framework to easily create DApps.'
  }
];

const sections = [
  {
    id: 'philosophy',
    title: 'Philosophy',
    subTitle:
      "To understand why ETC exists and what it stands for, it's important to understand it's origins and the principles it represents.",
    items: philosophyItems
  },
  {
    id: 'using',
    title: 'Using ETC',
    subTitle: 'Guides for using Ethereum Classic clients and wallets.',
    items: usingItems
  },
  {
    id: 'faqs',
    title: 'FAQs',
    subTitle: 'Frequently asked questions on ETC related topics',
    items: faqItems
  },
  {
    id: 'developers',
    title: 'Developers',
    subTitle:
      "If you're interested in developing with ETC, here are some guides on how to contribute",
    items: developerItems
  }
];

const EducationMenu = ({ compact, collapsed }) => {
  const elements = sections.map(({ title, subTitle, items, id }) => (
    <div key={id}>
      <header>
        <h2>{title}</h2>
        {!collapsed && subTitle}
      </header>
      {items.map(({ text, link, subText }) => (
        <div className="item" key={link}>
          {compact ? (
            <ButtonLink to={link} text={text} />
          ) : (
            <h3>
              <Link to={link} text={text} />
            </h3>
          )}
          {!compact && subText && <span>{subText}</span>}
        </div>
      ))}
    </div>
  ));
  return (
    <div
      className={`education-menu ${compact ? 'compact' : 'full'} ${collapsed ? 'collapsed' : ''}`}
    >
      {compact && (
        <div className="item back">
          <BackButton to="/knowledge" text="Knowledge Base" />
        </div>
      )}
      {!collapsed ? (
        elements
      ) : (
        <Hamburger title="Articles" id="education">
          {elements}
        </Hamburger>
      )}
    </div>
  );
};

export default EducationMenu;
