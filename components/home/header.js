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

import bannerImg from '../../assets/etc-london-meetup-dec-2016.png'

export default class Header extends Component {
  componentDidMount () {
    setTimeout(() => {
      window.particlesJS('particles', particlesConfig)
    }, 0)
  }
  render () {
    return (
      <Container fluid className="mui--text-center main-header">
        <div id="particles" />
        <Container className="inner">
          <img src={etcLogo} alt="Ethereum Classic" className="logo" />
          <h1>
            ethereum
            <br />
            classic
          </h1>
          <h2>
            <span>decentralized</span>
            {' '}<span>immutable</span>
            {' '}<span>unstoppable</span>
          </h2>
          <Dropdown label="Information">
            <DropdownItem target="_blank" link="//github.com/ethereumclassic/faq">ETC FAQ</DropdownItem>
            <DropdownItem target="_blank" link="//ethereum-classic-guide.readthedocs.io/en/latest/">ETC Guide</DropdownItem>
            <DropdownItem link="https://forum.ethereumclassic.org/" target="_blank">Forum</DropdownItem>
            <DropdownItem target="_blank" link="http://etc.today/">ETC Today</DropdownItem>
            <DropdownItem target="_blank" link="//www.etcdevteam.com/">ETCDEV Team</DropdownItem>
            <DropdownItem target="_blank" link="//iohk.io/projects/ethereum-classic/#team">Grothendieck Team</DropdownItem>
            <DropdownItem target="_blank" link="//dexaran.github.io/ICO/">Ethereum Commonwealth</DropdownItem>
            <DropdownItem target="_blank" link="https://grayscale.co/ethereum-classic-investment-thesis-march-2017/">Investment Thesis</DropdownItem>
            <DropdownItem target="_blank" link="//www.etcdevteam.com/blog/articles/a-joint-statement-ecip1017.html">Monetary Policy</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="ETC Wallets">
            <DropdownItem target="_blank" link="//jaxx.io/">Multi-platform Wallet</DropdownItem>
            <DropdownItem target="_blank" link="//www.ledgerwallet.com/products/12-ledger-nano-s">Ledger Hardware Wallet</DropdownItem>
            <DropdownItem target="_blank" link="//trezor.io">Trezor Hardware Wallet</DropdownItem>
            <DropdownItem target="_blank" link="//ethereumproject.github.io/etherwallet/">CEW Web Wallet</DropdownItem>
            <DropdownItem target="_blank" link="//myetherwallet.com">MEW Web Wallet</DropdownItem>
            <DropdownItem target="_blank" link="//github.com/ethereumproject/emerald-wallet/releases">Emerald Wallet (BETA)</DropdownItem>                     
            <DropdownItem target="_blank" link="//play.google.com/store/apps/details?id=com.guarda.etc">Android Wallet</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="ETC Nodes">
            <DropdownItem target="_blank" link="//github.com/ethereumproject/go-ethereum/releases">Geth</DropdownItem>
            <DropdownItem target="_blank" link="//github.com/ethcore/parity/releases">Parity</DropdownItem>
            <DropdownItem target="_blank" link="http://etcstats.net">Network Status</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="Mining Pools">
            <DropdownItem target="_blank" link="https://epool.io">Epool</DropdownItem>
            <DropdownItem target="_blank" link="http://etc.minertopia.org/">Minertopia.org</DropdownItem>
            <DropdownItem target="_blank" link="https://minergate.com">Minergate</DropdownItem>
            <DropdownItem target="_blank" link="https://etc.2miners.com">2miners</DropdownItem>
            <DropdownItem target="_blank" link="http://91pool.com">91 Pool</DropdownItem>
            <DropdownItem target="_blank" link="https://www.f2pool.com/help">f2pool</DropdownItem>
            <DropdownItem target="_blank" link="https://ethc.coin-miners.info">Coin-Miners</DropdownItem>
            <DropdownItem target="_blank" link="https://etc.bw.com">BW.com</DropdownItem>
            <DropdownItem target="_blank" link="http://ethteam.com">ETHteam.com</DropdownItem>
            <DropdownItem target="_blank" link="http://nanopool.org">Nanopool</DropdownItem>
            <DropdownItem target="_blank" link="http://etc-poolcrypto.org/">ETC-Poolcrypto</DropdownItem>
            <DropdownItem target="_blank" link="https://poolmining.org/pool/etc">Poolmining.org</DropdownItem>
            <DropdownItem target="_blank" link="https://etc.ethermine.org/">Ethermine</DropdownItem>
            <DropdownItem target="_blank" link="http://uupool.cn/">UUpool</DropdownItem>
            <DropdownItem target="_blank" link="http://etcpool.pl/">ETCPool.pl</DropdownItem>
            <DropdownItem target="_blank" link="http://clona.ru/">Clona.ru</DropdownItem>
          </Dropdown>          
          <br />
          <Dropdown label="Explorers">
            <DropdownItem target="_blank" link="//gastracker.io">gastracker.io</DropdownItem>
            <DropdownItem target="_blank" link="//etcchain.com/explorer">etcchain.com</DropdownItem>
            <DropdownItem target="_blank" link="//gastracker.io/stats/miners">Mining Status</DropdownItem>
            <DropdownItem target="_blank" link="http://etcstats.net">Network Monitor</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="Exchanges">
            <DropdownItem target="_blank" link="//bittrex.com/Market/Index?MarketName=BTC-ETC">Bittrex: ETC/BTC, ETC/ETH</DropdownItem>
            <DropdownItem target="_blank" link="//bitfinex.com">Bitfinex: ETC/BTC, ETC/USD</DropdownItem>
            <DropdownItem target="_blank" link="//poloniex.com/exchange#btc_etc">Poloniex: ETC/BTC, ETC/ETH, ETC/USDT</DropdownItem>
            <DropdownItem target="_blank" link="//shapeshift.io">Shapeshift</DropdownItem>
            <DropdownItem target="_blank" link="//changelly.com/exchange/BTC/ETC/1">Changelly</DropdownItem>
            <DropdownItem target="_blank" link="//trans.chbtc.com/etc">CHBTC: ETC/CNY</DropdownItem>
            <DropdownItem target="_blank" link="//yunbi.com/">Yunbi</DropdownItem>
            <DropdownItem target="_blank" link="//korbit.co.kr/etc_market">Korbit</DropdownItem>
            <DropdownItem target="_blank" link="//bter.com/trade/etc_btc">BTER</DropdownItem>
            <DropdownItem target="_blank" link="//yobit.net/en/trade/ETC/BTC">Yobit</DropdownItem>
            <DropdownItem target="_blank" link="//coinexchange.io/market/ETC/BTC">Coinexchange</DropdownItem>
            <DropdownItem target="_blank" link="//c-cex.com/?p=etc-btc">C-CEX</DropdownItem>
            <DropdownItem target="_blank" link="//www.bitmex.com/app/trade/ETC24H">BitMex futures contract ETC</DropdownItem>
            <DropdownItem target="_blank" link="//bitsquare.io">BitSquare</DropdownItem>
            <DropdownItem target="_blank" link="//www.kraken.com">Kraken: ETC/ETH, ETC/EUR, ETC/USD, ETC/XBT</DropdownItem>
            <DropdownItem target="_blank" link="//changenow.io">ChangeNow</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <SocialLinks />
          <PriceTicker />
          <br/>
        </Container>
      </Container>
    )
  }
}
