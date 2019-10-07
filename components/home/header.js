import React, { Component } from 'react'

try { require('particles.js') } catch (e) { console.warn(e) }

import Container from 'muicss/lib/react/container'
import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

import etcLogo from '../../assets/etc_logo.svg'
import particlesConfig from './particles-config.json'
import SocialLinks from '../social-links'
import PriceTicker from '../price-ticker'
import BannerAd from './banner-ad'
import VancouverConventionCentre from '../../assets/VancouverConventionCentre.jpg'


export default class Header extends Component {
  render () {
    return (
      <Container>
        <Container fluid className="mui--text-center main-header">
          <Container className="inner">
            <img src={etcLogo} alt="Ethereum Classic" className="logo" />
            <h1>
              ETHEREUM
              <br />
              CLASSIC
            </h1>
            <h2>
              <span>DECENTRALIZED</span>
              {' '}<span>IMMUTABLE</span>
              {' '}<span>UNSTOPPABLE</span>
            </h2>
            <Dropdown label="Information">
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//github.com/ethereumclassic/faq">ETC FAQ</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//ethereum-classic-guide.readthedocs.io/en/latest/">ETC Guide</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://etc.today/">ETC Today</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//iohk.io/projects/ethereum-classic/#team">Grothendieck Team</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://grayscale.co/ethereum-classic-investment-thesis-march-2017/">Investment Thesis</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://medium.com/@etcdev/a-joint-statement-on-ethereum-classics-monetary-policy-920c3af82eef">Monetary Policy</DropdownItem>
            </Dropdown>
            &nbsp;{' '}&nbsp;
            <Dropdown label="Wallets">
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//myetherwallet.com">MEW Web Wallet</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//www.saturn.network/blog/saturn-wallet/">Saturn Wallet (Desktop, Android) [#dapp-ready]</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid">Nifty Wallet [#dapp-ready]</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//emeraldwallet.io">Emerald Wallet (Windows, Linux, Mac; Beta)</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//trustwalletapp.com">Trust Wallet (Android, iOS) [#dapp-ready]</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//guarda.co/wallet/etc">Guarda Wallet (Android, iOS, Web)</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//jaxx.io/">JAXX (Windows, Linux, Mac, Android, iOS)</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//www.ledgerwallet.com/products/12-ledger-nano-s">Ledger Hardware Wallet</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//trezor.io">Trezor Hardware Wallet</DropdownItem>
            </Dropdown>
            &nbsp;{' '}&nbsp;
            <Dropdown label="Nodes">
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//github.com/etclabscore/go-ethereum/releases">Classic Geth</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//github.com/paritytech/parity/releases">Parity</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//github.com/multi-geth/multi-geth/releases">Multi-Geth</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//github.com/ChainSafe/besu">Hyperledger Besu</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//github.com/input-output-hk/mantis/tree/phase/release2_0">Mantis (deprecated)</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://etcstats.net">Network Status</DropdownItem>
            </Dropdown>
            &nbsp;{' '}&nbsp;
            <Dropdown label="Mining Pools">
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://epool.io">Epool</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://etc.2miners.com">2miners</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://91pool.com">91 Pool</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://anorak.tech/">Anorak.Tech</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://etc.bw.com">BW.com</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://clona.ru/">Clona.ru</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://coinfoundry.org">Coinfoundry.org</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://ethc.coin-miners.info">Coin-Miners</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://comining.io">Comining</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://etcpool.pl/">ETCPool.pl</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://etc.ethermine.org/">Ethermine</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://ethteam.com">ETHteam.com</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://etc-poolcrypto.org/">ETC-Poolcrypto</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://etc.europool.me">Europool</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://www.f2pool.com/help">f2pool</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://etc.fairpool.xyz/">Fairpool.io</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://etc.minertopia.org/">Minertopia.org</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://minergate.com">Minergate</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://nanopool.org">Nanopool</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://pandapool.io">Pandapool.io</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="https://ucrypto.net/currency/?curr=ETC">uCrypto.net</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://uupool.cn/">UUpool</DropdownItem>
            </Dropdown>
            <br />
            <Dropdown label="Explorers">
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//blockscout.com/etc/mainnet/">BlockScout</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//gastracker.io">Gastracker.io</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://etherhub.io">Etherhub.io</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//gastracker.io/stats/miners">Mining Status</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="http://etcstats.net">Network Monitor</DropdownItem>
            </Dropdown>
            &nbsp;{' '}&nbsp;
            <Dropdown label="Exchanges">
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//bittrex.com/Market/Index?MarketName=BTC-ETC">Bittrex: ETC/BTC, ETC/ETH</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//bitfinex.com">Bitfinex: ETC/BTC, ETC/USD</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//www.bitmex.com/app/trade/ETC24H">BitMex futures contract ETC</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//bitsquare.io">BitSquare</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//bter.com/trade/etc_btc">BTER</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//changelly.com/exchange/BTC/ETC/1">Changelly</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//changenow.io?utm_source=etc&utm_medium=ref&utm_campaign=etc_exchanges">ChangeNow</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//trans.chbtc.com/etc">CHBTC: ETC/CNY</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//www.coinex.com/">CoinEx</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//coinexchange.io/market/ETC/BTC">Coinexchange</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//coinswitch.co">CoinSwitch</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//c-cex.com/?p=etc-btc">C-CEX</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//korbit.co.kr/etc_market">Korbit</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//www.kraken.com">Kraken: ETC/ETH, ETC/EUR, ETC/USD, ETC/XBT</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//godex.io">Godex</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//poloniex.com/exchange#btc_etc">Poloniex: ETC/BTC, ETC/ETH, ETC/USDT</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//shapeshift.io">Shapeshift</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//yobit.net/en/trade/ETC/BTC">Yobit</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//yunbi.com/">Yunbi</DropdownItem>
              <DropdownItem target="_blank" rel="noopener noreferrer" link="//www.saturn.network/">Saturn Network decentralized exchange</DropdownItem>
            </Dropdown>
            &nbsp;{' '}&nbsp;
            <SocialLinks />
            <PriceTicker />
            <br/>
          </Container>
          <Container fluid className="mui--text-center main-header">
            <a href="https://etcsummit.com">
              <img src={VancouverConventionCentre}/>
              <h1>
                ETC Summit 2019
              </h1>
              <h2>
                Vancouver, Canada, Oct 3/4 2019
              </h2>
            </a>
          </Container>
        </Container>
        <Container className="github-orgs-header">
          <h2>
            Moving parts within the Ethereum Classic ecosystem
          </h2>
          <p>
            There has been a lot
            of <a href="https://twitter.com/McDappas/status/1178531289768448000">confusion</a> within
            the Ethereum Classic ecosystem about the multiple Github organizations
            and how everything is meant to fit together.
          </p>
          <p>
            Where is the client
            code?  How do we coordinate between different client teams and
            other ecosystem participants on how to make updates to the
            protocol?  Where do the key community resources live?
          </p>
          <h3>
            Websites
          </h3>
          <p>
            <a href="https://EthereumClassic.org">EthereumClassic.org</a> is the
            canonical best "landing site" for Ethereum Classic.  The DNS
            entry is owned by Anthony Lusardi, Ethereum Classic OG and
            ex-Director of the ETC Cooperative, but the actual content
            is developed collaboratively at <a href="https://github.com/ethereumclassic/ethereumclassic.github.io">github.com/ethereumclassic/ethereumclassic.github.io</a>.
          </p>
          <p>
            This is a homecoming of sorts, because this Github website
            served the ETC community from July 2016 until April 2018.
            It was replaced by a <a href="https://ethereumclassic.org">new
            WordPress site</a> built by <a href="https://etccoperative.org">ETC Cooperative</a>, which
            looks great, but the content is already outdated.
            Only the admins could update it.
            We will bring the Github based content back up to date and
            then improve the design.
          </p>
          <p>
            Other important websites are <a href="https://etccooperative.org">etccooperative.org</a>, <a href="https://etcsummit.org">etcsummit.org</a>, <a href="https://etcclabs.org">etclabs.org</a>, <a href="https://etclabscore.org">etclabscore.org</a> and <a href="https://iohk.io/">iohk.io</a>.
          </p>
          <h3>
            Social media and chat
          </h3>
          <p>
            The <a href="https://discordapp.com/invite/HW4GckH">ETC Discord</a> is the
            #1 place on the planet in which to talk about Ethereum Classic.
            Please do join us there!  Crypto Twitter is always popular,
            but can be a "talking shop" where not much actually gets
            achieved.  Key accounts are <a href="https://twitter.com/ETCCooperative">twitter.com/ETCCooperative</a>, <a href="https://twitter.com/eth_classic">twitter.com/eth_classic</a> (operated by
            IOHK), <a href="https://twitter.com/etclabs">twitter.com/etclabs</a> | <a href="https://twitter.com/etclabscore">twitter.com/etclabscore</a> and <a href="https://twitter.com/ClassicIsComing">twitter.com/ClassicIsComing</a>.
          </p>
          <p>
            There are other communication channels - Reddit, Telegram, Facebook and more,
            but they are generally pretty poor quality and might be worth
            skipping.  Other countries and language groups have their own
            communication channels.
          </p>
          <h3>
            ECIPs (Ethereum Classic Improvement Process)
          </h3>
          <p>
            The ECIP process is the single most important thing for all
            ETC ecosystem participants to understand.  It is our means of
            reaching <b>human consensus</b> on any changes to the protocol.
            Proposing or making changes to the ETC protocol outside of this
            process is extremely ill-advised, as it will be seen as an
            attempt to subvert the network and as an attack against the
            community.  On a lighter note, it is very easy to understand
            the process and to participate.  Anybody with an interest can
            join in.
          </p>
          <p>
            There is an excellent <a href="https://ecips.ethereumclassic.org">web view</a> onto
            the active ECIP proposals at <a href="https://ecips.ethereumclassic.org">ecips.ethereumclassic.org</a>,
            which is self-describing.
            The <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1000">ECIP-1000</a> Meta ECIP
            describes the workflow for ECIPs, and any changes to the workflow
            should be proposed as modifications to ECIP-1000.
          </p>
          <h3>
            Ethereum client implementations and Github
          </h3>
          <p>
            A key decision which the Ethereum team took back in 2014 was to
            have a neutral specification of the protocol together with multiple
            implementations of that protocol.  That facilitates a free market in
            client implementations and encourages decentralized development.  They
            wanted to avoid what happened to <a href="https://bitcoin.org>">Bitcoin</a>, where
            the initial implementation, <a href="https://github.com/bitcoin/bitcoin">Bitcoin Core</a>, became
            a reference client and the defacto specification for the protocol.  Alternative
            Bitcoin implementations never get much market share, because they
            must be bug-for-bug compatible with Bitcoin Core.  Not so for
            Ethereum and Ethereum Classic, where we have always had
            multiple client codebases.
          </p>
          <p>
            <b>Geth</b> is the most popular Ethereum client.  Its development is
            funded by the Ethereum Foundation and developed
            in <a href="https://github.com/ethereum/go-ethereum">github.com/ethereum/go-ethereum</a>.
            Directly after the time of the DAO fork, Geth supported both Ethereum
            and Ethereum Classic, but that support was dropped pretty soon afterwards.
            There there was little or no demand for Ethereum Classic support,
            with most of the ETC community preferring to use Classic Geth.
            </p>
          <p>
            That was a world ago, with most people in both the Etherum and
            Ethereum Classic communities having arrived long after those
            events.  Many individuals within the ETC community would love
            to see built-in support for ETC restored to vanilla Geth, whose
            development team have proven themselves to be unsung heroes
            time and time and again.  They continue to squeeze better and
            better performance from the code.
          </p>
          <p>
            <b>Classic Geth</b> was originally a fork of <b>Geth</b> but
            diverged over the years until there was no hope of the codebases
            ever reconverging.  It was developed by
            the sadly defunct <a href="https://etcdevteam.com">ETCDEV team</a> which
            folded in December 2018.  Igor still continues to work on Emerald Wallet.
            ETC Labs funded ChainSafe to refresh Classic Geth for the Atlantis
            hard fork, which will be its last outing.  That has been far from
            a smooth ride, but many ecosystem participants still use it.
            Classic Geth is developed by ETC Labs
            in <a href="https://github.com/etclabscore/go-ethereum">github.com/etclabscore/go-ethereum</a>.
          </p>
          <p>
            <b>MultiGeth</b> is a downstream fork of Geth which adds
            support for many different species of Ethereum networks.
            Unlike Classic Geth, MultiGeth has always intentionally stayed
            very close to Geth, with regular downstream merges.  Given that
            the majority of the changes in MultiGeth are related to
            configuration for other Ethereum networks, it would make
            sense to audit the differences against Geth for consideration
            for upstreaming, so that all Ethereum networks could work
            from the same Geth codebase, rather than being forked for
            a difference which can easily be captures using parameterizations
            and conditional code, as Parity Ethereum has done throughout.
            Wei Tang (AKA sorpaas) is the MultiGeth maintainer, with
            development happening
            in <a href="https://github.com/multi-geth/multi-geth">github.com/multi-geth/multi-geth</a>.
            The ETC Labs Core team has indicated that they intend to migrate
            their client development efforts from Classic Geth or MultiGeth
            during the next hard fork, with Classic Geth finally retired.
          </p>
          <p>
            <b>Parity Ethereum</b> was the first truly successful Ethereum
            client developed outside of the Ethereum Foundation, when Parity
            Technologies (originally Ethcore) developers who had previously
            built the cpp-ethereum client left and built a brand new Rust
            client, based on their experiences at building a C++ client.
            Both of these teams were led by Gavin Wood.  Now, sadly, it
            appears that Parity Ethereum is reaching the end of the line,
            with funding having been minimal since 2017.  Can the code
            find new life, or will it die?  It remains to be seen.
            Development occurs in <a href="https://github.com/paritytech/parity-ethereum">github.com/paritytech/parity-ethereum</a>.
          </p>
          <p>
            <b>Hyperledger Besu</b> is perhaps the single most exciting
            development in the Ethereum client landscape, with world-class
            licensing and IP protection, governance and workflow, due to
            the choice of Hyperledger as its home.  It is implemented in
            Java, making it hugely appealing to enterprises.  It has been
            developed by the PegaSys team, spawned from ConsenSys, with
            a large and incredibly talented team.  It supports Ethereum
            mainnet and permissioned scenarios and is compliant with the
            EEA Enterprise Ethereum specification.  All of these reasons
            are why the ETC Cooperative chose to fund ChainSafe to
            implement ETC support in Besu, as the very first new feature
            being contributed to Besu within the Hyperledger workflows.
            Besu is now developed in <a href="https://github.com/hyperledger/besu">github.com/hyperledger/besu</a>.
            It was previously called Pantheon, and has been in development
            since early 2017.
          </p>
          <p>
            <b>Mantis</b> is a Scala client built by IOHK from scratch
            following the birth of the Ethereum Classic network.  The
            motivation for this, Charles Hoskinson said at the time, was
            to give the Grothendieck team the opportunity to really learn
            the protocol inside out in a way which forking another team's
            code does not.  In the middle of 2018, Charles announced that
            the Mantis team would be adding Ethereum support, and it
            appears that much progress was made towards that goal, but
            development was defunded at the end of 2018, and Mantis did
            not participate in the recent Atlantis fork.  We hope that
            they will return to battle soon.
            Development occurs in <a href="https://github.com/input-output-hk/mantis/tree/phase/release2_0">https://github.com/input-output-hk/mantis</a>.
          </p>
          <p>
            The <a href="https://github.com/ethereumproject">github.com/ethereumproject</a> organization,
            which was forked from <a href="https://github.com/ethereum">github.com/ethereum</a> organization
            at the time of the DAO was finally retired in October 2019, just
            ahead of <a href="https://etcsummit.com">ETC Summit 2019</a>, bringing
            the confusion between <a href="https://github.com/ethereumproject">github.com/ethereumproject</a> and <a href="https://github.com/ethereumclassic">github.com/ethereumclassic</a> to
            a close.
          </p>
          <p>
            <p>Igor continues to maintain the
              excellent <a href="https://gastracker.io/stats/nodes">Gastracker.io</a> website,
              which has a <a href="https://gastracker.io/stats/nodes">node stats</a> page
              showing the market share between the various clients for ETC.
            </p>
          </p>
        </Container>
        <Container fluid className="mui--text-center main-header">
            <h2>
              Videos from ETC Summit 2019
            </h2>
            <h3>
              Thursday 3rd October 2019
            </h3>
            <p>
              <p>
                08.00 - 10.00 - Breakfast<br/>
              </p>
              <p>
                08.00 - 09.00 - Registration<br/>
              </p>

              -<br/>

              <p>
                09.00 - 09.10 - Opening address - Bob Summerwill (<a href="https://etcsummit.com/wp-content/uploads/2019/10/ETC-Summit-2019-Day-1-Talk-02-Anthony-Lusardi-The-State-of-Ethereum-Classic.pptx">Slides</a>)
              </p>
              <p>
                <iframe width="320" height="240" src="https://www.youtube.com/embed/j37lKPxZeQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <p>
                09.10 - 09.35 - The State of ETC - Anthony Lusardi (<a href="https://etcsummit.com/wp-content/uploads/2019/10/ETC-Summit-2019-Day-1-Talk-02-Anthony-Lusardi-The-State-of-Ethereum-Classic.pptx">Slides</a>)
              </p>
              <p>
                <iframe width="320" height="240" src="https://www.youtube.com/embed/_vWAuRR_ttg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <p>
                09.35 - 10.00 - Ethereum Classic Principles, Vision &amp; Opportunities - Donald McIntyre (<a href="https://etcsummit.com/wp-content/uploads/2019/10/ETC-Summit-2019-Day-1-Talk-03-Donald-McIntyre-Ethereum-Classic-Principles-Vision-and-Opportunities.pdf">Slides</a>)
              </p>
              <p>
                <iframe width="320" height="240" src="https://www.youtube.com/embed/7ihq8S62K_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <p>
                10.00 - 10.25 - Atlantis Protocol Upgrade &amp; the ETC Roadmap - Afri Schoedon
              </p>
              <p>
                <iframe width="320" height="240" src="https://www.youtube.com/embed/CelUmEWxY8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              -<br/>
              10.25 - 11.00 - Morning break<br/>
              -<br/>

              <p>
                11.00 - 11.10 - The Future of JSON-RPC Tooling - Shane Jonas
              </p>
              <p>
                <iframe width="320" height="240" src="https://www.youtube.com/embed/g2zUSyXW6nI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <p>
                11.10 - 11.20 - Jade Service Runner: Bridging the Decentralized Service Gap - Zane Starr
              </p>
              <p>
                <iframe width="360" height="240" src="https://www.youtube.com/embed/xZuZ-wrWCFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <p>
                11.20 - 11.40 - Adding Merkle-Mountain-Ranges and Fly-Proofs to ETC - Zac Mitton (<a href="https://etcsummit.com/wp-content/uploads/2019/10/ETC-Summit-2019-Day-1-Talk-07-Zac-Mitton-Adding-Merkle-Mountain-Ranges-and-Fly-Proofs-to-ETC.pdf">Slides</a>)
              </p>
              <p>
                <iframe width="360" height="240" src="https://www.youtube.com/embed/2Imsj1S4qg8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>

              <p>
                11.40 - 12.00 - ERC1066 - One Byte of Context - Brooklyn Zelenka
              </p>
              <p>
                <iframe width="320" height="240" src="https://www.youtube.com/embed/0uwBqQJ8KQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>
 
              -<br/>
              12.00 - 13.00 - Lunch<br/>
              -<br/>
              13.00 - 13.20 - The Year Ahead for ETC Labs - Terry Culver<br/>
              13.20 - 13.40 - Infrastructure for Decentralizing Distributed Networks - Aaron Lowry<br/>
              13.40 - 14.00 - Radical Ideas: Experiments in Sustaining Open Source Software - Scott Moore<br/>
              -<br/>
              14.00 - 14.20 - Afternoon break<br/>
              -<br/>
              14.20 - 14.40 - POA Network: Development Tools in the ETC ecosystem - Andrew Gross<br/>
              14.40 - 15.00 - Collaborative Machine Learning on ETC - Cody Burns<br/>
              15.00 - 15.20 - State of the ETC testnets - Afri Schoedon<br/>
              -<br/>
              15.20 - 15.40 - Afternoon break<br/>
              -<br/>
              15.40 - 16.00 - Metronome - 1st cross chain currency - chain hop from ETH to ETC - Manoj Patidor<br/>
              16.00 - 16.20 - Fireside Chat: Improving Investor Access to ETC - Michael Sonnenshein &amp; Anthony Lusardi<br/>
              14.20 - 16.40 - The Need for Cross Chain Collaboration - Aidan Hyman<br/>
              16.40 - 17.00 - Developer Relations in ETC - Yaz Khoury<br/>
              17.00 - 17.10 - Crossing statements - Bob Summerwill<br/>
              -<br/>
              17.10 - 19.30 - Cocktail Happy Hour<br/>
            </p>
          </Container>
          <Container fluid className="mui--text-center disclaimer-banner">
            <h2>
              EVERYTHING BELOW THIS LINE NEEDS REVIEW
            </h2>
          </Container>
      </Container>
    )
  }
}
