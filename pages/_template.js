import React, { PropTypes, Component } from 'react'

// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
// import { config } from 'config'
import OverlayProvider from '../components/overlay-provider'

// import theme
import 'muicss/lib/css/mui.css'
import '../css/main.scss'

import Footer from '../components/footer'


export default class MainTemplate extends Component {
  getChildContext () {
    // filter blog articles
    const blogPosts = this.props.route.pages.filter(page => {
      return page.file.dir === 'blog' && page.file.ext === 'md'
    })
    // transform model
    .map((a) => {
      const article = a.data
      article.to = a.path
      console.log('blog', article)
      return article
    })
    // sort by date
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    return { blogPosts }
  }

  render () {
    return (
      <OverlayProvider id="app">
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </OverlayProvider>
    )
  }
}

MainTemplate.childContextTypes = {
  blogPosts: PropTypes.array,
}

MainTemplate.propTypes = {
  route: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}
