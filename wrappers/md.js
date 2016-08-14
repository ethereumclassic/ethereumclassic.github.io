import React, { PropTypes, Component } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Md extends Component {
  render () {
    const post = this.props.route.page.data
    console.log('post', post);
    return (
      <div className="div">What</div>
      // <Helmet title={`${post.title} | ${config.siteTitle}`}>
      //   <div className="markdown">
      //     <p>Hello</p>
      //     <h1>{post.title}</h1>
      //     <div dangerouslySetInnerHTML={{ __html: post.body }} />
      //   </div>
      // </Helmet>
    )
  }
}

Md.propTypes = {
  route: React.PropTypes.object,
}
