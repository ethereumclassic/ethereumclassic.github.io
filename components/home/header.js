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
          <a target="_blank" className="mui-btn" href="https://github.com/ethereumproject/go-ethereum/releases">Download Client</a>
          {' '}
          <br />
          <Dropdown label="Blockchain Explorers">
            <DropdownItem target="_blank" link="//blocks.elaineou.com">blocks.elaineou.com</DropdownItem>
            <DropdownItem target="_blank" link="//etherhub.io">etherhub.io</DropdownItem>
            <DropdownItem target="_blank" link="//gastracker.io">gastracker.io</DropdownItem>
            <DropdownItem target="_blank" link="//etherx.com">etherx.com</DropdownItem>
            <DropdownItem target="_blank" link="//etcchain.com">etcchain.com</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <SocialLinks />
          <PriceTicker />
        </Container>
      </Container>
    )
  }
}
