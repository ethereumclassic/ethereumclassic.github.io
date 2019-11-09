import React from 'react';

import Navigation from '~components/navigation';
import Footer from '~components/footer';
import Banner from '~components/banner';
import Section from '~components/section';
import WideSection from '~components/wideSection';
import IconGrid from '~components/iconGrid';
import Mdx from '~components/mdx';
import LatestBlogPosts from '~components/latestBlogPosts';

const Index = ({ pageContext: { i18n } }) => (
  <>
    <Navigation />
    <div id="wrapper">
      <Banner />
      <Section subSection={() => <Mdx code={i18n.mdx.whatIsClassic} />}>
        <Mdx code={i18n.mdx.whatIsBlockchain} />
      </Section>
      <WideSection className="shaded">
        <IconGrid
          icons={[
            {
              title: 'Decentalized',
              text: 'Open and welcoming grassroots community',
              icon: 'fas fa-users'
            },
            {
              title: 'Immutable',
              text: "Ledger remains untampered since it's 2015 inception",
              icon: 'fas fa-link'
            },
            {
              title: 'Unstoppable',
              text: 'Neutral platform where contracts are honored forever',
              icon: 'far fa-hourglass'
            }
          ]}
        />
      </WideSection>
      <WideSection className="dark">
        <Mdx code={i18n.mdx.getStarted} />
      </WideSection>
      <Section subSection={() => <Mdx code={i18n.mdx.stayCurrent} />}>
        <h2>Latest Blog Posts</h2>
        <LatestBlogPosts />
      </Section>
      <Footer />
    </div>
  </>
);

export default Index;
