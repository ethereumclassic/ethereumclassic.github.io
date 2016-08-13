import React, { Component } from 'react'

import Header from '../components/header'
import WhyClassic from '../components/why-classic'

export default class Homepage extends Component {
  render () {
    return (
      <article className="homepage">
        <Header />
        <WhyClassic />
      </article>
    )
  }
}
