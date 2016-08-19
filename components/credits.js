import React, { Component } from 'react'

import Heart from 'react-icons/lib/fa/heart'

export default class Credits extends Component {
  render () {
    return (
      <div className="credits">
        <p>
          This website was created by random strangers on the internet purely out of love for Ethereum.
          If you'd like to support similar developments, please consider donating in ETC or ETH:
        </p>
        <ul>
          <li>
            <b>DaxClassix</b> Web Development
            <br />
            <code className="wallet-address">0xF0c830882CeD032Fa6510Fc3545cED5BB60b5965</code>
          </li>
          {/* TODO
          <li>
            <b>b3n</b> Logo Design & Graphics
            <br />
            <code>0x123123123312</code>
          </li>
          */}
        </ul>
        <div className="mui--text-center">
          Much <Heart />
        </div>
      </div>
    )
  }
}
