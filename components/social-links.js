import React, { Component } from 'react'

import Github from 'react-icons/lib/fa/github'
import Twitter from 'react-icons/lib/fa/twitter'
import Slack from 'react-icons/lib/fa/slack'

export default class SocialLinks extends Component {
  render () {
    return (
      <span className="social-links">
        <a href="https://github.com/ethereumclassic" target="_blank"><Github /></a>
        <a href="https://twitter.com/ethereumclassic" target="_blank"><Twitter /></a>
        <a href="https://github.com/ethereumclassic" target="_blank"><Slack /></a>
      </span>
    )
  }
}
