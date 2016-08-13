import React, { Component } from 'react'

import Github from 'react-icons/lib/fa/github-alt'
import Twitter from 'react-icons/lib/fa/twitter'
import Slack from 'react-icons/lib/fa/slack'
import Reddit from 'react-icons/lib/fa/reddit-alien'
import Telegram from 'react-icons/lib/fa/paper-plane'
import Irc from 'react-icons/lib/fa/terminal'

export default class SocialLinks extends Component {
  render () {
    return (
      <span className="social-links">
        <a href="https://github.com/ethereumproject" target="_blank"><Github /></a>
        <a href="https://twitter.com/eth_classic" target="_blank"><Twitter /></a>
        <a href="http://ethereumclassic.herokuapp.com" target="_blank"><Slack /></a>
        <a href="https://reddit.com/ethereumclassic" target="_blank"><Reddit /></a>
        <a href="https://telegram.me/ethclassic" target="_blank"><Telegram /></a>
        <a href="irc://irc.freenode.net/ethereumclassic" target="_blank"><Irc /></a>
      </span>
    )
  }
}
