import React, { PropTypes, Component } from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Panel from 'muicss/lib/react/panel'

import etcLogo from '../../assets/etc_logo.svg'
import NewsItems from '../../components/news-items'

export default class BlogTempalte extends Component {
  render () {
    return (
      <Container id="blog">
        <div className="blog-header">
          <h3>
            <Link to={prefixLink('/')}>
              <img className="logo" src={etcLogo} alt="Ethereum Classic" />
              Ethereum Classic
            </Link> Blog
          </h3>
        </div>
        <Row>
          <Col md="12" lg="8">
            <Panel>{this.props.children}</Panel>
          </Col>
          <Col md="12" lg="4">
            <Panel>
              <NewsItems
                title="Archive"
                subtitle="Previous posts"
                items={this.context.blogPosts}
              />
            </Panel>
          </Col>
        </Row>
      </Container>
    )
  }
}
BlogTempalte.contextTypes = {
  blogPosts: PropTypes.array.isRequired,
}
BlogTempalte.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
