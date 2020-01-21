import React from 'react';

import Card from './card';
import LinkGroup from './linkGroup';

const resources = ({ i18n }) => {
  return (
    <>
      <Card title={i18n.nodesAndNetworkInfo}>
        {i18n.nodesAndNetworkInfoText}
        <LinkGroup
          title={i18n.nodes}
          items={[
            {
              text: 'Multi-Geth',
              link: 'https://github.com/ethoxy/multi-geth/releases'
            },
            {
              text: 'Hyperledger Besu',
              link: 'https://www.hyperledger.org/projects/besu'
            },
            {
              text: 'Classic Geth',
              link: 'https://github.com/ethereumclassic/go-ethereum/'
            },
            {
              text: 'Parity',
              link: 'https://github.com/paritytech/parity/releases'
            }
          ]}
        />
        <LinkGroup
          title={i18n.privateDeployments}
          items={[
            { text: 'quiknode.io', link: 'https://quiknode.io/' },
            { text: 'ethernode.io', link: 'http://dev.ethernode.io/' },
            { text: 'DAppNode', link: 'https://dappnode.io/' },
            {
              text: 'Ethercluster',
              link: 'https://www.ethercluster.com/'
            }
          ]}
        />
      </Card>
      <Card title={i18n.blockExplorers}>
        {i18n.blockExplorersText}
        <LinkGroup
          title={i18n.mainnet}
          items={[
            {
              text: 'BlockScout',
              link: 'https://blockscout.com/etc/mainnet/'
            },
            { text: 'Etherhub.io', link: 'http://etherhub.io/' },
            {
              text: 'ETCBlockExplorer.com',
              link: 'https://etcblockexplorer.com/home'
            },
            { text: 'ETCPlanet.org', link: 'https://etcplanet.org/' },
            {
              text: 'MinerGate',
              link: 'https://minergate.com/blockchain/etc/blocks'
            },
            { text: '0xETH', link: 'http://0xeth.com/' }
          ]}
        />
      </Card>
      <Card title={i18n.networkApis}>
        {i18n.networkApisText}
        <LinkGroup
          title={i18n.publicApis}
          items={[
            {
              text: 'ethercluster.com/etc',
              link: 'https://https://www.ethercluster.com/etc/'
            },
            {
              text: 'ethereumclassic.network',
              link: 'https://ethereumclassic.network'
            },
            {
              text: 'kotti.ethereumclassic.network',
              link: 'https://kotti.ethereumclassic.network'
            }
          ]}
        />
        <LinkGroup
          title={i18n.networkInfo}
          items={[
            {
              text: 'Mainnet Stats',
              link: 'https://etcnodes.org/'
            },
            {
              text: 'Kotti Testnet Stats',
              link: 'https://kotti.etcnodes.org/'
            },
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
      <Card title={i18n.githubRepos}>
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
      <Card title={i18n.twitter}>
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
      <Card title={i18n.chatRooms}>
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
          title={i18n.telegram}
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
      <Card title={i18n.wallets}>
        {i18n.waleltsText}
        <LinkGroup
          title={i18n.webWallets}
          items={[
            {
              text: 'My Ether Wallet',
              link: 'https://www.myetherwallet.com/'
            },
            { text: 'MyCrypto', link: 'http://mycrypto.com/' },
            {
              text: 'SATURN Wallet',
              link: 'https://saturn.network/saturn-wallet'
            },
            {
              text: 'Nifty Wallet (MetaMask Fork)',
              link: 'https://github.com/poanetwork/nifty-wallet'
            }
          ]}
        />
        <LinkGroup
          title={i18n.hardwareOffline}
          items={[
            {
              text: 'Ledger',
              link: 'https://www.ledgerwallet.com/products/12-ledger-nano-s'
            },
            { text: 'Trezor', link: 'https://trezor.io/' }
          ]}
        />
        <LinkGroup
          title={i18n.desktop}
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
          title={i18n.mobile}
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
      <Card title={i18n.exchanges}>
        {i18n.exchangesText}
        <LinkGroup
          title={i18n.traditionalExchangess}
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
          title={i18n.decentralizedExchanges}
          items={[{ text: 'Saturn Network', link: 'https://www.saturn.network' }]}
        />
        <LinkGroup
          title={i18n.instantSwaps}
          items={[
            {
              text: 'Changelly',
              link: 'https://changelly.com/exchange/BTC/ETC/1'
            },
            { text: 'Shapeshift', link: 'https://shapeshift.io/' }
          ]}
        />
        <LinkGroup
          title={i18n.paymentProcessors}
          items={[
            { text: 'CoinGate', link: 'https://coingate.com/' },
            { text: 'CoinPayments', link: 'https://www.coinpayments.net/' },
            { text: 'PayBear', link: 'https://www.paybear.io/' },
            { text: 'UTRUST', link: 'https://utrust.io/' }
          ]}
        />
      </Card>
      <Card title={i18n.miningPools}>
        {i18n.miningPoolsText}
        <LinkGroup
          items={[
            {
              text: '2miners',
              link: 'https://2miners.com/etc-mining-pool'
            },
            { text: 'Altpool', link: 'http://etc.altpool.pro/' },
            { text: 'Anorak.Tech', link: 'https://anorak.tech/' },
            { text: 'Clona.ru', link: 'http://clona.ru/' },
            { text: 'Coinfoundry.org', link: 'https://coinfoundry.org/' },
            { text: 'Comining', link: 'https://comining.io/' },
            { text: 'Ethermine', link: 'https://etc.ethermine.org/' },
            { text: 'F2pool', link: 'https://www.f2pool.com/help' },
            { text: 'Fairpool.io', link: 'https://etc.fairpool.xyz/' },
            { text: 'MaxHash', link: 'https://etcpool.maxhash.org/' },
            { text: 'MinerGate', link: 'https://minergate.com/' },
            { text: 'Nanopool', link: 'https://nanopool.org/' },
            { text: 'UUpool', link: 'http://uupool.cn/' },
            { text: 'ZET Technologies', link: 'https://etc.zet-tech.eu/' }
          ]}
        />
      </Card>
    </>
  );
};

export default resources;
