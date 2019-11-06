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
      'Essentially the ETC Whitepaper. A statement of our cause, a list of grievances, and a description of our principles and goals.'
  },
  {
    text: 'A Crypto-Decentralist Manifesto',
    link: '/blog/2016-07-11-manifesto',
    subText:
      'Every blockchain creates a social network around its applications, with network value growing exponentially with the number of participants in accordance with Reed’s Law. This value isn’t extracted by intermediaries or controllers, as with previous centralized models. Instead, it’s shared among participants, providing economic incentives for cooperation without coercion. Not all blockchains are created equal. There are three key characteristics that make scalable blockchain-enabled cooperation possible: openness, neutrality and immutability.'
  }
];

const usingItems = [
  {
    text: 'Using Emerald Wallet',
    link: '/knowledge/using-emerald-wallet',
    subText: 'Learn how to download and install Emerald Wallet.'
  },
  {
    text: 'Using Classic Ether Wallet',
    link: '/knowledge/using-classic-ether-wallet',
    subText: 'Learn how to use the Classic Ether Wallet.'
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
      "To understand why ETC exists and what it stands for, we must look into it's origins and the principles it represents.",
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
        <h2>
          <a name={id} className="anchor" />
          {title}
        </h2>
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
          <BackButton to="/knowledge" text="Education" />
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
