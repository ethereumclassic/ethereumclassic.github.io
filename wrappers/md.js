import React, { PropTypes, Component } from 'react'
import Helmet from 'react-helmet'

import BlogItem from '../components/blog/blog-item'

export default class Md extends Component {
  render () {
    const post = this.props.route.page.data
    return (
      <article>
        <Helmet title={post.title} />
        <BlogItem item={post} />
      </article>
    )
  }
}

Md.propTypes = {
  route: PropTypes.object,
}
