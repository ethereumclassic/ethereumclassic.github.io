import React, { Component } from 'react'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

import ContentPanel from './content-panel'

import whyClassic from '../contents/why-classic.md'
import decentralizedGovernance from '../contents/decentralized-governance.md'
import codeIsLaw from '../contents/code-is-law.md'

import IconDecentralised from 'react-icons/lib/ti/arrow-maximise'
import IconFinality from 'react-icons/lib/ti/link'

console.log(whyClassic)

export default class WhyClassic extends Component {
  render () {
    return (
      <Container className="panelled-grid">
        <Row>
          <Col md="4" >
            <div dangerouslySetInnerHTML={{ __html: whyClassic.body }} />
            <a
              className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
              href="https://ethereumclassic.github.io/assets/ETC_Declaration_of_Independence.pdf"
              target="_blank"
            >
              Read the Declaration
            </a>
          </Col>
          <Col md="8">
            <ContentPanel src={codeIsLaw} Icon={IconFinality} />
            <ContentPanel src={decentralizedGovernance} Icon={IconDecentralised} />
          </Col>
        </Row>
      </Container>
    )
  }
}
