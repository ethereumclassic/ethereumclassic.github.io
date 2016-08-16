import React, { PropTypes, Component } from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import formattedDate from '../utils/formattedDate'

export default class NewsItems extends Component {
  renderItemInner (item) {
    return [
      <div key="info" className="info">
        {item.date && <span className="date">{formattedDate(item.date)}</span>}
        {item.author && <span className="author">{item.author}</span>}
      </div>,
      <h4 key="title" className="title">{item.title}</h4>,
    ]
  }
  renderItem (item, i) {
    // external links
    if (item.link) {
      return (
        <a key={i} className="item" target="_blank" href={item.link} >
          {this.renderItemInner(item)}
        </a>
      )
    }
    // internal links
    if (item.to) {
      return (
        <Link key={i} className="item" to={prefixLink(item.to)} >
          {this.renderItemInner(item)}
        </Link>
      )
    }
    // no link
    return (
      <div key={i} className="item">
        {this.renderItemInner(item)}
      </div>
    )
  }
  render () {
    const { title, subtitle, items } = this.props
    return (
      <div className="news-items">
        <h2>
          {title}{' '}
          <small className="mui--text-dark-secondary">
            {subtitle}
          </small>
        </h2>
        <div className="item-scroller">
          {items.map(this.renderItem.bind(this))}
        </div>
      </div>
    )
  }
}

NewsItems.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}
