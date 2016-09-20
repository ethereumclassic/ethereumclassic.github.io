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
import Linkedin from 'react-icons/lib/fa/linkedin-square'

export default class SocialLinks extends Component {
  render () {
    return (
      <Dropdown label="Social Links" className="social-links">
        <DropdownItem link="https://github.com/ethereumproject" target="_blank"><Github className="icon" /> Github</DropdownItem>
        <DropdownItem link="https://reddit.com/r/ethereumclassic" target="_blank"><Reddit className="icon" /> Reddit</DropdownItem>
        <DropdownItem link="http://ethereumclassic.herokuapp.com" target="_blank"><Slack className="icon" /> Slack</DropdownItem>
        <DropdownItem link="https://telegram.me/ethclassic" target="_blank"><Telegram className="icon" /> Telegram</DropdownItem>
        <DropdownItem link="https://ethereumclassictalk.org" target="_blank"><Forum className="icon" /> Ethereum Classic Forums</DropdownItem>
        <DropdownItem link="https://twitter.com/ethereumclassic" target="_blank"><Twitter className="icon" /> @etheruemclassic</DropdownItem>
        <DropdownItem link="https://twitter.com/eth_classic" target="_blank"><Twitter className="icon" /> @eth_classic</DropdownItem>
        <DropdownItem link="http://webchat.freenode.net?channels=ethereumclassic&uio=d4" target="_blank"><Irc className="icon" /> IRC</DropdownItem>
        <DropdownItem link="https://www.linkedin.com/company/ethereum-classic" target="_blank"><Linkedin className="icon" /> LinkedIn</DropdownItem>
        <DropdownItem link="http://telegram.me/etcrussia" target="_blank"><Telegram className="icon" /> Telegram (Russian)</DropdownItem>
      </Dropdown>
    )
  }
}
