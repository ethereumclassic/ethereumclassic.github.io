import React, { Component } from 'react'

import Container from 'muicss/lib/react/container'
import Button from 'muicss/lib/react/button'

export default class Homepage extends Component {
  render () {
    return (
      <Container fluid className="mui--text-center mui--bg-primary-light">
        <h1>Ethereum <span>Classic</span></h1>
        <h2>Decentralised, Immutable, Unstoppable</h2>
        <Button>Download Client</Button>
        <Button>Join Slack</Button>
        <Button>Support Project</Button>
      </Container>
    )
  }
}
