import React from 'react';

import Grid from '~components/grid';
import Card from '~components/card';
import LinkGroup from '~components/linkGroup';

const resourcesTechnical = () => {
  return (
    <>
      <section>
        <h2>Technical Resources</h2>
      </section>
      <Grid className="semi" columns={3}>
        <Card title="Nodes & Network Info">
          Run an ETC node and help support the network by using the software below.
          <LinkGroup
            title="Nodes"
            items={[
              {
                text: 'Classic Geth',
                link: 'https://github.com/ethereumclassic/go-ethereum/'
              },
              {
                text: 'Parity',
                link: 'https://github.com/paritytech/parity/releases'
              },
              {
                text: 'Multi-Geth',
                link: 'https://github.com/ethoxy/multi-geth/releases'
              }
            ]}
          />
          <LinkGroup
            title="Network Info"
            items={[
              { text: 'ETC Status Live', link: 'https://etcstatus.live/' },
              {
                text: 'ETC Network Stats (Saturn Tools)',
                link: 'https://saturn.tools/admin/etcstats'
              },
              {
                text: 'Morden (Testnet) Stats',
                link: 'http://mordenstats.ethertrack.io/'
              }
            ]}
          />
        </Card>
        <Card title="Block Explorers">
          Check on the status of transactions with these handy websites.
          <LinkGroup
            items={[
              {
                text: 'BlockScout',
                link: 'https://blockscout.com/etc/mainnet/'
              },
              { text: 'Gastracker.io', link: 'https://gastracker.io/' },
              { text: 'Etherhub.io', link: 'http://etherhub.io/' },
              { text: 'ETCBlockExplorer.com', link: 'https://etcblockexplorer.com/home' },
              { text: 'ETCPlanet.org', link: 'https://etcplanet.org/' },
              {
                text: 'MinerGate',
                link: 'https://minergate.com/blockchain/etc/blocks'
              },
              { text: '0xETH', link: 'http://0xeth.com/' },
              {
                text: 'Kotti (Testnet) Explorer',
                link: 'https://kottiexplorer.ethernode.io/'
              },
              {
                text: 'Morden (Testnet) Explorer',
                link: 'http://mordenexplorer.ethertrack.io/home'
              }
            ]}
          />
        </Card>
        {/* TODO testnets ?  */}
        <Card title="Network APIs">
          Use JSONRPC to communicate with ETC.
          <LinkGroup
            title="Public APIs"
            items={[
              {
                text: 'ethereumclassic.network',
                link: 'https://ethereumclassic.network'
              },
              {
                text: 'kotti.ethereumclassic.network',
                link: 'https://kotti.ethereumclassic.network'
              },
              {
                text: 'web3.gastracker.io',
                link: 'https://web3.gastracker.io'
              }
            ]}
          />
          <LinkGroup
            title="Private Deployments"
            items={[
              { text: 'quiknode.io', link: 'https://quiknode.io/' },
              { text: 'ethernode.io', link: 'http://dev.ethernode.io/' }
            ]}
          />
        </Card>
      </Grid>
    </>
  );
};

export default resourcesTechnical;
