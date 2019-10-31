//  TODO use i18n
import React from 'react';
import Grid from '~components/grid';
import Card from '~components/card';

const Dapps = () => {
  return (
    <>
      <section>
        <h2>Powered By ETC</h2>
        <p>Major projects that are running on and using the ETC blockchain today.</p>
        <div className="legend">
          Legend:
          <span className="key green">Running on ETC</span>
          <span className="key orange">In Progress</span>
          <span className="key red">Awaiting Deployment</span>
        </div>
      </section>
      <Grid className="dapps-list">
        <Card className="green" to="https://originalmy.com/" title="OriginalMy">
          OriginalMy provides a fully automated platform to register and verify the authenticity of
          digital documents, contracts, and identities. They are now expanding into stock holder
          voting on the blockchain.
        </Card>
        <Card className="green" to="https://stampery.com/" title="Stampery">
          Stampery certifies data on the blockchain, providing proof of existence, integrity,
          ownership, and receipt.
        </Card>
        <Card className="green" to="https://www.portal.network/" title="Portal Network's BNS">
          Portal Network created the Blockchain Name Service standard that turns cryptic blockchain
          addresses (ex. 0xfa91d23…) into simple human-readable addresses (ex. myname.etc).
        </Card>
        <Card className="green" to="https://docs.etcdevteam.com/" title="Emerald Platform">
          Emerald Platform is an ETC tool chain to enable developers and power users to more easily
          use the ETC network. In time these tools will make ETC and other Ethereum-based
          blockchains more accessible to every day users.
        </Card>
        <Card className="green" to="https://github.com/input-output-hk/mantis" title="Mantis">
          A lightweight, compact, and high performance client for the ETC network, created by IOHK
          and written in Scala.
        </Card>
        <Card className="orange" to=" https://www.youtube.com/watch?v=gtsWHXSSiiE" title="Orbita">
          ETCDEV’s answer to ETC-based sidechains, powered by SputnikVM and highly flexible to cater
          to the business needs of developers interested in blockchain.
        </Card>
        <Card
          className="orange"
          to="https://medium.com/akomba/peace-bridge-connecting-ethereum-classic-and-ethereum-e306df01159f"
          title="peaceBridge"
        >
          A series of cross-chain bridges designed to allow for value transfer and information
          sharing between ETC and ETH blockchains.
        </Card>
        <Card className="orange" to="https://github.com/goerli" title="Goerli">
          A unified PoA testnet that will provides for a reliable and efficient developer
          experience.
        </Card>
        <Card className="green" to="https://dappdirect.net/" title="DappDirect">
          Many contracts running on ETC, and statistics about them, can be found on this
          community-run site including decentralized exchanges, gambling/insurance contracts, and
          tokens.
        </Card>
        <Card className="orange" to="http://connext.network/#eth" title="Connext">
          Connext is a layer 2 micropayment network that enables EVM compatible projects to process
          cheap, fast and low latency transactions by deploying state channels to scale their P2P
          applications. They also maintain the LearnChannels.org knowledge base.
        </Card>
        <Card className="green" to="https://blockscou.com/etc/m" title="BlockScout">
          A full-featured and high-performance ETC block explorer by POA Network.
        </Card>
        <Card className="green" to="https://www.coingame.com/" title="Coingame">
          A sports betting platform that started on ETC.
        </Card>
        <Card className="green" to="https://www.saturn.network/" title="Saturn Network">
          A decentralized exchange running on both ETC and ETH.
        </Card>
        <Card className="green" to="https://quiknode.io/" title="QuikNode">
          Quickly spin up ETC and other Ethereum-based nodes.
        </Card>
        <Card className="orange" to="http://dev.ethernode.io/" title="Ethernode">
          One click ETC node hosting (in beta).
        </Card>
        <Card className="orange" to="https://utrust.com/" title="UTRUST">
          A cryptocurrency payment solution that accepts ETC and offers instant transactions, buyer
          protection & crypto-to-cash settlements.
        </Card>
        <Card className="orange" to="https://sat-1.com/" title="SAT-1">
          Connect various satellite ground stations across the globe to a blockchain-based grid
          using ETCDEV’s SputnikVM.
        </Card>
        <Card
          className="red"
          to="https://www.youtube.com/watch?v=gtsWHXSSiiE&feature=youtu.be"
          title="OpenStack Passport Program"
        >
          Presently piloting Orbita for use in their passport program.
        </Card>
        <Card className="red" to="https://metronome.io/" title="Metronome">
          A cross-blockchain cryptocurrency that will start off bridged between ETC and ETH
          blockchains.
        </Card>
        <Card className="red" to="http://pikamoji.com/" title="Pikamoji">
          Augmented Reality emojis where users can create and actually own the copyright to their
          emojis. A first in the Cryptocurrency space. Ownership is recorded on the ETC blockchain.
        </Card>
      </Grid>
    </>
  );
};

export default Dapps;
