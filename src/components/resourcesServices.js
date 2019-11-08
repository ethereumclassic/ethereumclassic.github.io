import React from 'react';

import Grid from '~components/grid';
import Card from '~components/card';
import LinkGroup from '~components/linkGroup';

const resourcesServices = () => {
  return (
    <>
      <section>
        <h2>Services</h2>
      </section>
      <Grid className="semi" itemWidth={380}>
        <Card title="Wallets">
          Store and send your ETC using one of the wallets below. Hardware wallets are the most
          secure; please use them.
          <LinkGroup
            title="Web Wallets"
            items={[
              {
                text: 'Classic Ether Wallet',
                link: 'https://ethereumclassic.github.io/etherwallet/'
              },
              { text: 'Guarda', link: 'https://guarda.co/' },
              {
                text: 'My Ether Wallet',
                link: 'https://www.myetherwallet.com/'
              },
              { text: 'MyCrypto', link: 'http://mycrypto.com/' },
              {
                text: 'SATURN Wallet',
                link: 'https://saturn.network/saturn-wallet'
              }
            ]}
          />
          <LinkGroup
            title="Hardware / Offline"
            items={[
              {
                text: 'Ledger',
                link: 'https://www.ledgerwallet.com/products/12-ledger-nano-s'
              },
              { text: 'Trezor', link: 'https://trezor.io/' }
            ]}
          />
          <LinkGroup
            title="Desktop"
            items={[
              { text: 'Atomic Wallet', link: 'https://atomicwallet.io/' },
              {
                text: 'Emerald',
                link: 'https://github.com/ETCDEVTeam/emerald-wallet/releases'
              },
              { text: 'Exodus', link: 'https://www.exodus.io/' },
              { text: 'Guarda', link: 'https://guarda.co/' },
              {
                text: 'Parity',
                link: 'https://github.com/paritytech/parity/releases'
              }
            ]}
          />
          <LinkGroup
            title="Mobile"
            items={[
              { text: 'Atomic Wallet', link: 'https://atomicwallet.io/' },
              {
                text: 'Coinbase Wallet',
                link: 'https://wallet.coinbase.com/'
              },
              { text: 'JAXX', link: 'https://jaxx.io/' },
              { text: 'Coinomi', link: 'https://coinomi.com/' },
              { text: 'Trust Wallet', link: 'https://trustwalletapp.com/' },
              { text: 'AToken', link: 'https://www.atoken.com/' }
            ]}
          />
        </Card>
        <Card title="Exchanges">
          Get ETC by trading for it at one of the exchanges below. We’re listed on all of your
          favorite exchanges.
          <LinkGroup
            title="Traditional Exchanges"
            items={[
              { text: 'Binance', link: 'https://www.binance.com/' },
              {
                text: 'Bittrex',
                link: 'https://bittrex.com/Market/Index?MarketName=BTC-ETC'
              },
              { text: 'Bitfinex', link: 'https://www.bitfinex.com/' },
              {
                text: 'BitMex',
                link: 'https://www.bitmex.com/app/trade/ETHM18'
              },
              { text: 'Bisq', link: 'https://bisq.network/' },

              { text: 'Kraken', link: 'https://www.kraken.com/' },
              { text: 'Huobi', link: 'https://www.huobi.pro/' },
              {
                text: 'Poloniex',
                link: 'https://poloniex.com/exchange#btc_etc'
              }
            ]}
          />
          <LinkGroup
            title="Decentrlaized Exchanges"
            items={[{ text: 'Saturn Network', link: 'https://www.saturn.network' }]}
          />
          <LinkGroup
            title="Instant Settlement"
            items={[
              {
                text: 'Changelly',
                link: 'https://changelly.com/exchange/BTC/ETC/1'
              },
              { text: 'Shapeshift', link: 'https://shapeshift.io/' }
            ]}
          />
          <LinkGroup
            title="Payment Processors"
            items={[
              { text: 'CoinGate', link: 'https://coingate.com/' },
              { text: 'CoinPayments', link: 'https://www.coinpayments.net/' },
              { text: 'PayBear', link: 'https://www.paybear.io/' },
              { text: 'UTRUST', link: 'https://utrust.io/' }
            ]}
          />
        </Card>
        <Card title="Mining Pools">
          **TODO THIS NEEDS TO BE FILTERED** Mine ETC by joining one of the pools below. We’ve got
          lots of options across the globe.
          <LinkGroup
            items={[
              { text: 'Epool', link: 'https://www.epool.io/#/' },
              {
                text: '2miners',
                link: 'https://2miners.com/etc-mining-pool'
              },
              { text: '91 Pool', link: 'http://www.91pool.com/' },
              { text: 'Altpool', link: 'http://etc.altpool.pro/' },
              { text: 'Anorak.Tech', link: 'https://anorak.tech/' },
              { text: 'BW.com', link: 'https://etc.bw.com/pool/i' },
              { text: 'ClassicPool', link: 'https://classicpool.io/' },
              { text: 'Clona.ru', link: 'http://clona.ru/' },
              { text: 'Coinfoundry.org', link: 'https://coinfoundry.org/' },
              { text: 'Comining', link: 'https://comining.io/' },
              { text: 'ETCPool.pl', link: 'http://etcpool.pl/' },
              { text: 'Ethermine', link: 'https://etc.ethermine.org/' },
              { text: 'ETC-Poolcrypto', link: 'https://etc-poolcrypto.org/' },
              { text: 'ETC-Speedpool', link: 'https://etc-speedpool.com/' },
              { text: 'Europool', link: 'https://etc.europool.me/' },
              { text: 'ExtremeHash', link: 'http://etc.extremehash.io/' },
              { text: 'F2pool', link: 'https://www.f2pool.com/help' },
              { text: 'Fairpool.io', link: 'https://etc.fairpool.xyz/' },
              { text: 'MaxHash', link: 'https://etcpool.maxhash.org/' },
              { text: 'MinerGate', link: 'https://minergate.com/' },
              { text: 'Nanopool', link: 'https://nanopool.org/' },
              { text: 'Pandapool.io', link: 'https://pandapool.io/' },
              {
                text: 'uCrypto.net',
                link: 'https://ucrypto.net/currency/?curr=ETC'
              },
              {
                text: 'Uleypool',
                link: 'https://uleypool.com/mining-pool-ethereum-classic-etc/'
              },
              { text: 'UUpool', link: 'http://uupool.cn/' },
              { text: 'ZET Technologies', link: 'https://etc.zet-tech.eu/' }
            ]}
          />
        </Card>
      </Grid>
    </>
  );
};

export default resourcesServices;
