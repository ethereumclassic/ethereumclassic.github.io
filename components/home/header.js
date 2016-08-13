import React, { Component } from 'react'

try { require('particles.js') } catch (e) { console.warn(e) }

import Container from 'muicss/lib/react/container'

import etcLogo from '../../assets/etc_logo.svg'
import particlesConfig from './particles-config.json'
import SocialLinks from '../social-links'

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
          <h1 className="mui--text-display3">
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
          <a target="_blank" className="mui-btn" href="http://blocks.elaineou.com/">Explore the Chain</a>
          <br /><br />
          <SocialLinks />
        </Container>
      </Container>
    )
  }
}
