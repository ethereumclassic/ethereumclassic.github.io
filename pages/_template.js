import React, { PropTypes, Component } from 'react'

// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
// import { config } from 'config'

// import theme
import 'muicss/lib/css/mui.css'
import '../css/main.scss'

import Footer from '../components/footer'

export default class MainTemplate extends Component {
  render () {
    return (
      <div id="app">
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
