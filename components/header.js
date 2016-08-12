import React, { Component } from 'react'

try { require('particles.js') } catch (e) { console.warn(e) }

import Container from 'muicss/lib/react/container'
import Button from 'muicss/lib/react/button'

import etcLogo from '../assets/etc_logo.svg'
import particlesConfig from './particles-config.json'

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
            <span>decentralised</span>
            {' '}<span>immutable</span>
            {' '}<span>unstoppable</span>
          </h2>
          <Button>Download Client</Button>
          <Button>Join Slack</Button>
          <Button>Support Development</Button>
        </Container>
      </Container>
    )
  }
}
