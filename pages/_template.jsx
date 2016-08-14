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

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
