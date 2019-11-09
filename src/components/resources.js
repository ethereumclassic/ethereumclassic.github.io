import React from 'react';

import Card from './card';
import LinkGroup from './linkGroup';

const resourcesCommmunity = () => {
  return (
    <>
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
      <Card title="Github Repos">
        <LinkGroup
          items={[
            {
              text: 'ETC (general)',
              link: 'https://github.com/ethereumclassic/'
            },
            {
              text: 'IOHK',
              link: 'https://github.com/input-output-hk/mantis'
            },
            {
              text: 'ETC Cooperative',
              link: 'https://github.com/ethereum-classic-cooperative/'
            },
            { text: 'ETCDEV', link: 'https://github.com/ETCDEVTeam/' },
            {
              text: 'Ethereum Commonwealth',
              link: 'https://github.com/EthereumCommonwealth/'
            }
          ]}
        />
      </Card>
      <Card title="Twitter">
        <LinkGroup
          items={[
            {
              text: '@Eth_Classic',
              link: 'http://twitter.com/Eth_Classic'
            },
            {
              text: '@ClassicIsComing',
              link: 'https://twitter.com/ClassicIsComing'
            },
            { text: '@ETCDEV', link: 'https://twitter.com/etcdev' },
            {
              text: '@ETCCooperative',
              link: 'https://twitter.com/ETCCooperative'
            },
            { text: '@ETCChina', link: 'https://twitter.com/ETCChina' },
            { text: '@ETCJapan', link: 'https://twitter.com/ETCJapan' },
            { text: '@ETCKorea', link: 'https://twitter.com/ETCKorea' },
            {
              text: '@ETC_Philippines',
              link: 'https://twitter.com/ETC_Philippines'
            }
          ]}
        />
      </Card>
      <Card title="Chat Rooms">
        <LinkGroup
          items={[
            { text: 'Discord', link: 'https://discord.gg/bMGuZsA' },
            {
              text: 'Matrix (Dev-focused)',
              link: 'https://riot.im/app/#/room/#ecips:matrix.org'
            },
            {
              text: 'Kakao Talk (Korea)',
              link: 'https://open.kakao.com/o/gi4uNJ1'
            }
          ]}
        />
        <LinkGroup
          title="Telegram"
          items={[
            { text: 'ETC Arabic', link: 'https://t.me/EtherClassic_Ar' },
            {
              text: 'Eth Classic (English)',
              link: 'http://telegram.me/ethclassic'
            },
            { text: 'ETC Chat (English)', link: 'http://t.me/etcchat' },
            { text: 'ETC China', link: 'http://t.me/etczh' },
            { text: 'ETC Español', link: 'https://t.me/ethclassicesp' },
            { text: 'ETC Germany', link: 'https://t.me/EtherCalssic_de' },
            {
              text: 'ETC Japan',
              link: 'https://t.me/joinchat/GqAqlRC9hD5bVy65DuHcfg'
            },
            { text: 'ETC Russia', link: 'http://telegram.me/etcrussia' },
            { text: 'ETC RU', link: 'http://telegram.me/etcru' },
            { text: 'ETC Vietnam', link: 'https://t.me/ETC_Vietnam' }
          ]}
        />
      </Card>
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
          title="Instant Swaps"
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
    </>
  );
};

export default resourcesCommmunity;
