import React, { Component } from 'react'

try { require('particles.js') } catch (e) { console.warn(e) }

import Container from 'muicss/lib/react/container'
import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

import etcLogo from '../../assets/etc_logo.svg'
import particlesConfig from './particles-config.json'
import SocialLinks from '../social-links'
import PriceTicker from '../price-ticker'

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
          <Dropdown label="ETC Wallets">
            <DropdownItem target="_blank" link="//jaxx.io/">Multi-platform Wallet</DropdownItem>
            <DropdownItem target="_blank" link="//chrome.google.com/webstore/detail/classicetherwallet-cx/opggclcfcbfbchcienjdaohghcamjfhf">Chrome Extension</DropdownItem>
            <DropdownItem target="_blank" link="//www.ledgerwallet.com/products/12-ledger-nano-s">Hardware Wallet</DropdownItem>
            <DropdownItem target="_blank" link="//classicetherwallet.com/">Web Wallet</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="ETC Nodes">
            <DropdownItem target="_blank" link="//github.com/ethereumproject/go-ethereum/releases">Geth</DropdownItem>
            <DropdownItem target="_blank" link="//github.com/ethcore/parity/releases">Parity</DropdownItem>
            <DropdownItem target="_blank" link="//etcstats.net">Network Status</DropdownItem>
            <DropdownItem target="_blank" link="//mega.nz/#!UVM2FDAR!c0cF6qKy4IAsu7VRXiAAgHGzSMOSVufB7WHNojsM7yw">Bootstrap Chaindata</DropdownItem>
            <DropdownItem target="_blank" link="//www.reddit.com/r/EthereumClassic/comments/58vwk8/etc_tap_for_osx_homebrew/">OSX Homebrew Install</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="Split ETC/ETH">
            <DropdownItem target="_blank" link="//archive.is/3LdCR">Manually (no fee)</DropdownItem>
            <DropdownItem target="_blank" link="//split.codetract.io/">Codetract (no fee)</DropdownItem>
            <DropdownItem target="_blank" link="//split.shapeshift.io/">Shapeshift (0.25% fee)</DropdownItem>
          </Dropdown>
          <br />
          <Dropdown label="Explorers">
            <DropdownItem target="_blank" link="//etherhub.io">etherhub.io</DropdownItem>
            <DropdownItem target="_blank" link="//gastracker.io">gastracker.io</DropdownItem>
            <DropdownItem target="_blank" link="//etherx.com">etherx.com</DropdownItem>
            <DropdownItem target="_blank" link="//etcchain.com">etcchain.com</DropdownItem>
            <DropdownItem target="_blank" link="//etcstats.net">Network Status</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="Exchanges">
            <DropdownItem target="_blank" link="//bitfinex.com">Bitfinex ETC/BTC, ETC/USD</DropdownItem>
            <DropdownItem target="_blank" link="//www.kraken.com">Kraken ETC/ETH, ETC/EUR, ETC/USD, ETC/XBT</DropdownItem>
            <DropdownItem target="_blank" link="//poloniex.com/exchange#btc_etc">Poloniex  ETC/BTC, ETC/ETH, ETC/USDT</DropdownItem>
            <DropdownItem target="_blank" link="//shapeshift.io">Shapeshift</DropdownItem>
            <DropdownItem target="_blank" link="//changelly.com/exchange/BTC/ETC/1">Changelly</DropdownItem>
            <DropdownItem target="_blank" link="//trans.chbtc.com/etc">CHBTC</DropdownItem>
            <DropdownItem target="_blank" link="//bittrex.com/Market/Index?MarketName=BTC-ETC">Bittrex</DropdownItem>
            <DropdownItem target="_blank" link="//yunbi.com/">Yunbi</DropdownItem>
            <DropdownItem target="_blank" link="//korbit.co.kr/etc_market">Korbit</DropdownItem>
            <DropdownItem target="_blank" link="//bter.com/trade/etc_btc">BTER</DropdownItem>
            <DropdownItem target="_blank" link="//yobit.net/en/trade/ETC/BTC">Yobit</DropdownItem>
            <DropdownItem target="_blank" link="//coinexchange.io/market/ETC/BTC">Coinexchange</DropdownItem>
            <DropdownItem target="_blank" link="//c-cex.com/?p=etc-btc">C-CEX</DropdownItem>
            <DropdownItem target="_blank" link="//www.bitmex.com/app/trade/ETC24H">BitMex futures contract ETC</DropdownItem>
            <DropdownItem target="_blank" link="//bitsquare.io">BitSquare</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <SocialLinks />
          <PriceTicker />
          <br/>
          Donate: <code>0xe9a7e26bf5c05fe3bae272d4c940bd7158611ce9</code>
        </Container>
      </Container>
    )
  }
}
