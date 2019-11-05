//  TODO use i18n
import React from 'react';
import Grid from '~components/grid';
import Card from '~components/card';

const Dapps = () => {
  return (
    <>
      <section>
        <h2>Dapps powered by ETC</h2>
        <p>
          A selection of (decentralized) applications that are built on top of Ehteruem Classic.
        </p>
        <div className="legend">
          Legend:
          <span className="key green">In Production</span>
          <span className="key orange">Demo Deployed</span>
          <span className="key red">Under Development</span>
        </div>
      </section>

      <Grid className="dapps-list" wide>
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
        <Card
          className="orange"
          to="https://medium.com/akomba/peace-bridge-connecting-ethereum-classic-and-ethereum-e306df01159f"
          title="peaceBridge"
        >
          A series of cross-chain bridges designed to allow for value transfer and information
          sharing between ETC and ETH blockchains.
        </Card>
        <Card className="green" to="https://dappdirect.net/" title="DappDirect">
          Many contracts running on ETC, and statistics about them, can be found on this
          community-run site including decentralized exchanges, gambling/insurance contracts, and
          tokens.
        </Card>
        <Card className="green" to="https://www.coingame.com/" title="Coingame">
          A sports betting platform that started on ETC.
        </Card>
        <Card className="green" to="https://www.saturn.network/" title="Saturn Network">
          A decentralized exchange running on both ETC and ETH.
        </Card>
        <Card className="orange" to="https://metronome.io/" title="Metronome">
          A cross-blockchain cryptocurrency that will start off bridged between ETC and ETH
          blockchains.
        </Card>
      </Grid>
    </>
  );
};

export default Dapps;
