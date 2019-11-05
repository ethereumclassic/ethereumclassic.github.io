// TODO replace with i18n
import React from 'react';
import Mdx from '~components/mdx';
import Bars from '~components/bars';

import PageLayout from '../layouts/pageLayout';

const Roadmap = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout seo={{ title: 'Road Map', description: 'Project progression' }}>
      <Mdx code={i18n.mdx.roadmap} />
      <Bars
        title="Multi-Geth / Classic Geth"
        items={[
          {
            name: 'Difficulty Bomb Removal',
            progress: 100
          },
          {
            name: 'Advanced Logging for Developers (Machine Readable Logging & ELK Config)',
            progress: 100
          },
          {
            name: 'Improved Caching for Faster Performance (StateDB)',
            progress: 40
          },
          {
            name: 'Compatibility with New Ethereum Opcodes',
            progress: 20
          },
          {
            name: 'Address / Transaction Indexing for Developers',
            progress: 100
          },
          {
            name: 'Faster Syncing (New Warp Sync)',
            progress: 30
          }
        ]}
      />

      <Bars
        title="Sidechains / SputnikVM"
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
      <Bars
        title="Emerald Wallet"
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
      <Mdx code={i18n.mdx.projects} />
    </PageLayout>
  );
};

export default Roadmap;
