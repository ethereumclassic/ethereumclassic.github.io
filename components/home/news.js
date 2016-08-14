import React, { Component } from 'react'

import Container from 'muicss/lib/react/container'
import Col from 'muicss/lib/react/col'

import PressIcon from 'react-icons/lib/ti/news'
import BlogIcon from 'react-icons/lib/ti/edit'

import IconPanel from '../icon-panel'
import NewsItems from '../news-items'
import pressArticles from '../../contents/press.yaml'

export default class WhyClassic extends Component {
  render () {
    return (
      <Container className="latest-news padded">
        <Col md="6">
          <IconPanel Icon={BlogIcon}>
            <NewsItems
              title="Blog"
              subtitle="Classic Announcements"
              items={[]}
            />
          </IconPanel>
        </Col>
        <Col md="6">
          <IconPanel Icon={PressIcon}>
            <NewsItems
              title="Press"
              subtitle="Classic in the Media"
              items={pressArticles}
            />
          </IconPanel>
        </Col>
      </Container>
    )
  }
}
