import React, { Component } from 'react'

import Header from '../components/home/header'
import WhyClassic from '../components/home/why-classic'
//import Community from '../components/home/community'
import ForkTimeline from '../components/home/fork-timeline'
import News from '../components/home/news'

export default class Homepage extends Component {
  render () {
    return (
      <article className="homepage">
        <Header />
        <WhyClassic />
        <News />
        <ForkTimeline />
      </article>
    )
  }
}
