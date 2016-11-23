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
            <b>ProphetDaniel</b> Web Development
            <br />
            <code className="wallet-address">0x95D80084D4Fc2CB2063B765676fb328930935e5B</code>
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
          Done with <Heart />
        </div>
      </div>
    )
  }
}
