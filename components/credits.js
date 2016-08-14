import React, { Component } from 'react'

import Heart from 'react-icons/lib/fa/heart'

export default class Credits extends Component {
  render () {
    return (
      <div className="credits">
        <p>
          This website was created by random strangers on the internet who have a thing for decentralization.
          If you'd like to support similar developments, please consider donating in ETC or ETH:
        </p>
        <ul>
          <li>
            <b>DaxClassix</b> Web Development
            <br />
            <code>0x12312312312</code>
          </li>
          <li>
            <b>b3n</b> Logo Design & Graphics
            <br />
            <code>0x123123123312</code>
          </li>
        </ul>
        <div className="mui--text-center">
          Much <Heart />
        </div>
      </div>
    )
  }
}
