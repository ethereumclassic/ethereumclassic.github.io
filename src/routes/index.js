import React from 'react';
import Section from '~components/section';
import WideSection from '~components/wideSection';
import Banner from '~components/banner';
import Mdx from '~components/mdx';
import IconGrid from '~components/iconGrid';
import LocalizedLink from '~components/localizedLink';
/*

STAY UP TO DATE
Get the most up-to-date newsletters delivered straight to your email. Whether you’re looking for general information, hard fork/network upgrades, or live chat the choice is yours.

*/

const Landing = ({ pageContext: { i18n } }) => (
  <>
    <Banner />
    <Section subSection={() => <Mdx code={i18n.mdx.whatIsClassic} />}>
      <Mdx code={i18n.mdx.whatIsBlockchain} />
    </Section>
    <WideSection className="shaded">
      <IconGrid
        icons={[
          { icon: 'fas fa-users', text: 'Open and welcoming community' },
          { icon: 'fas fa-calendar-alt', text: 'Long history of reliable operation' },
          { icon: 'fas fa-coins', text: 'Your ETC is yours forever' }
        ]}
      />
    </WideSection>
    <Section subSection={() => <Mdx code={i18n.mdx.whyClassic} />}>
      <Mdx code={i18n.mdx.principles} />
    </Section>
    <WideSection title="Get started with Etheruem Classic" className="dark">
      Whether you’re looking for wallets, exchanges or even just general information, we have you
      covered. Check out our resources page to be directed to the right place you’re searching for.
      <br />
      <br />
      <LocalizedLink to="/" className="button-link big">
        Get Started
        <i className="fas fa-angle-right" />
      </LocalizedLink>
    </WideSection>
    <Section subSection={() => <Mdx code={i18n.mdx.stayCurrent} />}>
      List of blogs go here
      <br />
      <LocalizedLink to="/blog" className="button-link">
        All Blog Posts
        <i className="fas fa-angle-right" />
      </LocalizedLink>
    </Section>
  </>
);

export default Landing;
