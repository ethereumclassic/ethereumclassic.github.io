// TODO replace with i18n
import React from 'react';
import Grid from '~components/grid';
import Card from '~components/card';
import LinkGroup from '~components/linkGroup';

const Reseources = () => {
  return (
    <>
      <div className="resources">
        <h2>Community Resources</h2>
        <Grid>
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
          <Card title="Chat Rooms" span={2}>
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
                { text: 'ETC Italia', link: 'http://t.me/ETC_Italia' },
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
        </Grid>
        <h2>Technical Resources</h2>
        <Grid>
          <Card title="Nodes & Network Info">
            Run an ETC node and help support the network by using the software below.
            <LinkGroup
              title="Nodes"
              items={[
                {
                  text: 'Geth',
                  link: 'https://github.com/ethereumclassic/go-ethereum/'
                },
                {
                  text: 'Parity',
                  link: 'https://github.com/paritytech/parity/releases'
                },
                {
                  text: 'Mantis',
                  link: 'https://github.com/input-output-hk/mantis'
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
          <Card title="Public APIs">
            Query ETC without syncing a node. Please note these are public nodes and are intended
            for testing and light use. Please run your own nodes for your programs. JSONRPC API
            references can be found for parity and geth-etc.
            <LinkGroup
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
          </Card>
        </Grid>
        <h2>Services</h2>
        <Grid>
          <Card title="Wallets">
            Store and send your ETC using one of the wallets below. Hardware wallets are the most
            secure; please use them. Software wallets with an asterisk (*) are closed source.
            <LinkGroup
              title="Hardware / Offline"
              items={[
                {
                  text: 'Ledger',
                  link: 'https://www.ledgerwallet.com/products/12-ledger-nano-s'
                },
                {
                  text: 'iOS',
                  link: 'https://itunes.apple.com/us/app/parity-signer/id1218174838'
                },
                {
                  text: 'Android',
                  link: 'https://play.google.com/store/apps/details?id=com.nativesigner'
                },
                { text: 'Trezor', link: 'https://trezor.io/' }
              ]}
            />
            <LinkGroup
              title="Desktop"
              items={[
                { text: 'Atomic Wallet*', link: 'https://atomicwallet.io/' },
                {
                  text: 'Daedalus Mantis',
                  link: 'https://github.com/input-output-hk/mantis/releases/tag/v1.1-rc4'
                },
                {
                  text: 'Emerald',
                  link: 'https://github.com/ETCDEVTeam/emerald-wallet/releases'
                },
                { text: 'Exodus*', link: 'https://www.exodus.io/' },
                { text: 'Guarda*', link: 'https://guarda.co/' },
                {
                  text: 'Parity',
                  link: 'https://github.com/paritytech/parity/releases'
                }
              ]}
            />
            <LinkGroup
              title="Mobile"
              items={[
                { text: 'Atomic Wallet*', link: 'https://atomicwallet.io/' },
                {
                  text: 'Coinbase Wallet',
                  link: 'https://wallet.coinbase.com/'
                },
                { text: 'JAXX', link: 'https://jaxx.io/' },
                { text: 'Coinomi*', link: 'https://coinomi.com/' },
                { text: 'Trust Wallet', link: 'https://trustwalletapp.com/' },
                { text: 'AToken', link: 'https://www.atoken.com/' }
              ]}
            />
            <LinkGroup
              title="Web"
              items={[
                {
                  text: 'Classic Ether Wallet',
                  link: 'https://ethereumclassic.github.io/etherwallet/'
                },
                { text: 'Guarda*', link: 'https://guarda.co/' },
                {
                  text: 'My Ether Wallet',
                  link: 'https://www.myetherwallet.com/'
                },
                { text: 'MyCrypto', link: 'http://mycrypto.com/' },
                {
                  text: 'SATURN Wallet*',
                  link: 'https://saturn.network/saturn-wallet'
                }
              ]}
            />
          </Card>
          <Card title="Exchanges">
            Get ETC by trading for it at one of the exchanges below. We’re listed on all of your
            favorite exchanges. NOTE: No listings here are an endorsement of the quality or
            reliability of the exchange. Please do your own research before transacting with
            exchanges.
            <LinkGroup
              items={[
                { text: 'AnyCoinDirect', link: 'https://anycoindirect.eu/' },
                { text: 'BCEX', link: 'https://www.bcex.ca/' },
                { text: 'Binance', link: 'https://www.binance.com/' },
                {
                  text: 'Bitcoin Meester',
                  link: 'https://www.bitcoinmeester.nl/'
                },
                { text: 'BitForex', link: 'https://bitforex.com/' },
                { text: 'Bithumb', link: 'https://www.bithumb.com/' },
                { text: 'Bitladon', link: 'https://www.bitladon.com/' },
                {
                  text: 'Bittrex',
                  link: 'https://bittrex.com/Market/Index?MarketName=BTC-ETC'
                },
                { text: 'Bitfinex', link: 'https://www.bitfinex.com/' },
                {
                  text: 'BitMex',
                  link: 'https://www.bitmex.com/app/trade/ETHM18'
                },
                {
                  text: 'BitSane',
                  link: 'https://bitsane.com/exchange/etc-btc'
                },
                { text: 'BitSquare', link: 'https://bisq.network/' },
                { text: 'Bit-Z', link: 'https://www.bit-z.com/' },
                { text: 'BTCTrade.im', link: 'https://www.btctrade.im/' },
                { text: 'BTER', link: 'https://bter.com/trade/etc_btc' },
                {
                  text: 'Changelly',
                  link: 'https://changelly.com/exchange/BTC/ETC/1'
                },
                {
                  text: 'ChangeNow',
                  link:
                    'https://changenow.io/?utm_source=etc&utm_medium=ref&utm_campaign=etc_exchanges'
                },
                { text: 'CHBTC', link: 'https://trans.chbtc.com/etc' },
                {
                  text: 'Circle Invest',
                  link: 'https://www.circle.com/en/invest'
                },
                {
                  text: 'Coindirect',
                  link: 'https://www.coindirect.com/buy/ethereum-classic'
                },
                { text: 'CoinEgg', link: 'https://www.coinegg.com/' },
                { text: 'CoinEx', link: 'https://www.coinex.com/' },
                {
                  text: 'Coinexchange',
                  link: 'https://www.coinexchange.io/market/ETC/BTC'
                },
                { text: 'Coinone', link: 'https://coinone.co.kr/' },
                { text: 'Coinsuper', link: 'https://www.coinsuper.com/' },
                { text: 'CoinSwitch', link: 'https://coinswitch.co/' },
                { text: 'CoinTiger', link: 'https://www.cointiger.pro/' },
                { text: 'C-CEX', link: 'https://c-cex.com/?p=etc-btc' },
                { text: 'EXX', link: 'https://www.exx.com/' },
                { text: 'Korbit', link: 'https://www.korbit.co.kr/etc_market' },
                { text: 'Kraken', link: 'https://www.kraken.com/' },
                { text: 'LBank', link: 'https://www.lbank.info/' },
                { text: 'London Block Exchange', link: 'https://lbx.com/' },
                { text: 'OKEx', link: 'https://www.okex.com/' },
                { text: 'Godex', link: 'https://godex.io/' },
                { text: 'Huobi', link: 'https://www.huobi.pro/' },
                {
                  text: 'Poloniex',
                  link: 'https://poloniex.com/exchange#btc_etc'
                },
                { text: 'Shapeshift', link: 'https://shapeshift.io/' },
                { text: 'Upbit', link: 'https://upbit.com/' },
                { text: 'Yobit', link: 'https://yobit.net/en/trade/ETC/BTC' },
                { text: 'Yunbi', link: 'https://yunbi.com/' },
                { text: 'ZB.com', link: 'https://www.zb.com/' }
              ]}
            />
          </Card>
          <Card title="Mining Pools">
            Mine ETC by joining one of the pools below. We’ve got lots of options across the globe.
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
          <Card title="Block Explorers">
            Check on the status of transactions with these handy websites.
            <LinkGroup
              items={[
                {
                  text: 'BlockScout',
                  link: 'https://blockscout.com/etc/mainnet/'
                },
                {
                  text: 'BlockScout Github',
                  link: 'https://github.com/poanetwork/blockscout'
                },
                { text: 'Gastracker.io', link: 'https://gastracker.io/' },
                { text: 'Etherhub.io', link: 'http://etherhub.io/' },
                {
                  text: 'Etherhub Github',
                  link: 'https://github.com/ethereumproject/explorer/'
                },
                { text: 'ETCPlanet.org', link: 'https://etcplanet.org/' },
                {
                  text: 'ETCPlanet Github',
                  link: 'https://github.com/cseberino/etcplanet'
                },
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
          <Card title="Payment Processors" span={2}>
            Accept ETC for your products and services
            <LinkGroup
              items={[
                { text: 'CoinGate', link: 'https://coingate.com/' },
                { text: 'CoinPayments', link: 'https://www.coinpayments.net/' },
                { text: 'PayBear', link: 'https://www.paybear.io/' }
              ]}
            />
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default Reseources;
