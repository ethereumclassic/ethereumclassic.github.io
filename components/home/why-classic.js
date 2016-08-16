import React, { Component, PropTypes } from 'react'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Button from 'muicss/lib/react/button'

import IconDecentralised from 'react-icons/lib/ti/arrow-maximise'
import IconFinality from 'react-icons/lib/ti/link'

import ContentBlock from '../content-block'
import IconPanel from '../icon-panel'

import whyClassic from '../../contents/why/why-classic.md'
import decentralizedGovernance from '../../contents/why/decentralized-governance.md'
import codeIsLaw from '../../contents/why/code-is-law.md'


export default class WhyClassic extends Component {
  render () {
    return (
      <Container className="padded">
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
            <br />
            <a
              className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
              href="#fork-timeline"
            >
              Learn about the Fork
            </a>
          </Col>
          <Col md="8">
            <IconPanel Icon={IconFinality} >
              <ContentBlock body={codeIsLaw} />
            </IconPanel>
            <IconPanel Icon={IconDecentralised} >
              <ContentBlock body={decentralizedGovernance} />
            </IconPanel>
          </Col>
        </Row>
      </Container>
    )
  }
}

WhyClassic.contextTypes = {
  blogPosts: PropTypes.array.isRequired,
}
