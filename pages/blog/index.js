import React, { PropTypes, Component } from 'react'

export default class Blog extends Component {
  // redirect to latest
  componentWillMount () {
    this.context.router.replace(this.context.blogPosts[0].to)
  }
  render () {
    return null
  }
}

Blog.contextTypes = {
  router: PropTypes.object.isRequired,
  blogPosts: PropTypes.array.isRequired,
}
