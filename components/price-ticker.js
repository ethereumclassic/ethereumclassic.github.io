import React, { Component } from 'react'
import { get } from '../utils/request'

import ccLogo from '../assets/cc-icon.png'

function round (val, amount = 4) {
  return val.toFixed(amount)
}

export default class PriceTicker extends Component {
  constructor (props) {
    super(props)
    this.state = { data: null }
  }
  componentWillMount () {
    get('https://www.cryptocompare.com/api/data/price?fsym=ETC&tsyms=USD,BTC,ETH')
    .then(data => this.setState({ data: data.Data }))
  }
  renderCurrency (currency) {
    // calculate % change
    const change = 100 - (currency.Open24Hour / currency.Price) * 100
    const up = change >= 0
    return (
      <span key={currency.Symbol} className={`currency ${up ? 'green' : 'red'}`}>
        <span className="inner">
          <span className="price">{round(currency.Price)}</span>
          <span className="symbol">{currency.Symbol}</span>
          <span className="change">{up ? '↑' : '↓'} {round(change, 2)}%</span>
        </span>
      </span>
    )
  }
  render () {
    return (
      <div className={`price-ticker ${this.state.data && 'loaded'}`}>
        {this.state.data &&
          <div className="inner">
            <span className="base">
              <a href="https://poloniex.com/exchange#btc_etc" target="_blank">ETC</a>
            </span>
            <span className="currencies">
              {this.state.data.map(this.renderCurrency)}
            </span>
            <a className="brand" href="https://www.cryptocompare.com" target="_blank">
              <img src={ccLogo} alt="Crypto Compare" />
            </a>
          </div>
        }
      </div>
    )
  }
}
