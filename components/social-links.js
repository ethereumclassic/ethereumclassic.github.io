import React, { Component } from 'react'

import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

import Github from 'react-icons/lib/fa/github-alt'
import Twitter from 'react-icons/lib/fa/twitter'
import Slack from 'react-icons/lib/fa/slack'
import Reddit from 'react-icons/lib/fa/reddit-alien'
import Telegram from 'react-icons/lib/fa/paper-plane'
import Irc from 'react-icons/lib/fa/terminal'
import Forum from 'react-icons/lib/fa/comments'

export default class SocialLinks extends Component {
  render () {
    return (
      <Dropdown label="Social Links" className="social-links">
        <DropdownItem link="https://github.com/ethereumproject" target="_blank"><Github /> Github</DropdownItem>
        <DropdownItem link="https://twitter.com/ethereumclassic" target="_blank"><Twitter /> @etheruemclassic</DropdownItem>
        <DropdownItem link="https://twitter.com/eth_classic" target="_blank"><Twitter /> @eth_classic</DropdownItem>
        <DropdownItem link="http://ethereumclassic.herokuapp.com" target="_blank"><Slack /> Slack</DropdownItem>
        <DropdownItem link="https://reddit.com/r/ethereumclassic" target="_blank"><Reddit /> Reddit</DropdownItem>
        <DropdownItem link="https://telegram.me/ethclassic" target="_blank"><Telegram /> Telegram</DropdownItem>
        <DropdownItem link="http://telegram.me/etcrussia" target="_blank"><Telegram /> Telegram (Russian)</DropdownItem>
        <DropdownItem link="irc://irc.freenode.net/ethereumclassic" target="_blank"><Irc /> IRC</DropdownItem>
        <DropdownItem link="https://ethereumclassictalk.org" target="_blank"><Forum /> Ethereum Classic Forums</DropdownItem>
      </Dropdown>
    )
  }
}
