import React, { Component, PropTypes } from 'react'

import Heart from 'react-icons/lib/fa/heart'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

import Credits from './credits'

export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    e.preventDefault()
    this.context.overlay({
      component: <Credits />,
    })
  }
  render () {
    return (
      <Container fluid className="footer mui--text-light-secondary">
        <Container>
          <Row>
            <Col xs="6">
              Ethereum Classic is a Decentralized Project.
              <br />
              Website content{' '}
              <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">
                Public Domain CC0 License
              </a>
              .
            </Col>
            <Col xs="6" className="mui--text-right">
              Made with <Heart /> by ETC Community.
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

Footer.contextTypes = {
  overlay: PropTypes.func.isRequired,
}
