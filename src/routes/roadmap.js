// TODO replace with i18n
import React from 'react';

import Mdx from '~components/mdx';
import Bars from '~components/bars';
import LinkSection from '~components/linkSection';
import Timeline from '~components/timeline';
import PageLayout from '~components/pageLayout';

const Roadmap = ({
  pageContext: {
    i18n: {
      mdx,
      json: { projects: p, roadmap: r }
    }
  }
}) => {
  return (
    <PageLayout wide seo={{ title: r.title, description: r.description }}>
      <section>
        <Mdx code={mdx.intro} />
      </section>
      <Timeline />
      <section>
        <Mdx code={mdx.roadmap} />
        <LinkSection
          title={p.multiGeth}
          text={p.multiGethText}
          to="https://github.com/ethoxy/multi-geth"
        />
        <Bars
          items={[
            {
              name: p.multiGethDifficulty,
              progress: 100
            },
            {
              name: p.multiGethAdvanced,
              progress: 100
            },
            {
              name: p.multiGethImproved,
              progress: 40
            },
            {
              name: p.multiGethCompatibility,
              progress: 20
            },
            {
              name: p.multiGethAddress,
              progress: 100
            },
            {
              name: p.multiGethFaster,
              progress: 30
            }
          ]}
        />

        <LinkSection title="Sidechains" to="https://github.com/ETCDEVTeam/sidekick-doc">
          Sidechains will become a native part of ETC infrastructure and protocols. This will
          increase ETC’s scalability and bring blockchain to a diverse group of handheld and IoT
          devices for the first time.
        </LinkSection>

        <LinkSection title="SputnikVM" to="https://github.com/ETCDEVTeam/sputnikvm">
          SputnikVM is a highly efficient and pluggable implementation of the Ethereum Virtual
          Machine. It is a standalone EVM that can operate independently of a blockchain and is
          capable of running on low powered devices; with plans to run on ultra-low power devices.
        </LinkSection>

        <Bars
          items={[
            {
              name: 'Proof of Authority (PoA) in Sidechains',
              progress: 70
            },
            {
              name: 'Speedier SputnikVM Performance with JIT Compilation',
              progress: 30
            },
            {
              name: 'Bi-Directional PoA Sidechains',
              progress: 40
            }
          ]}
        />

        <LinkSection title="Emerald Platform" to="https://github.com/ETCDEVTeam/emerald-platform">
          Toolkit to build applications running on Ethereum ETC, contains UI Components, Libraries
          for Javascript and Rust, Icons, Build tools, etc. Targeting various platforms, such as
          Desktop, Mobile, Web and even Shell Scripting.
        </LinkSection>

        <Bars
          items={[
            {
              name: 'Ultra Stable Desktop Release',
              progress: 90
            },
            {
              name: 'Mobile Wallet',
              progress: 30
            }
          ]}
        />

        <Bars
          title="Emerald Project"
          items={[
            {
              name: 'Sidechain Integration',
              progress: 35
            },
            {
              name: 'Emerald SDK',
              progress: 40
            },
            {
              name: 'IPFS Support',
              progress: 20
            }
          ]}
        />
      </section>
    </PageLayout>
  );
};

export default Roadmap;
