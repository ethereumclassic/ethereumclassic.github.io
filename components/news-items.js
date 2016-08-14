import React, { PropTypes, Component } from 'react'

export default class NewsItems extends Component {
  renderItem (item, i) {
    // TODO render `to` links
    return (
      <a
        key={i}
        className="item"
        target="_blank"
        href={item.link}
      >
        <div className="info">
          {item.date && <span className="date">{item.date}</span>}
          {item.source && <span className="source">{item.source}</span>}
        </div>
        <h4 className="title">{item.title}</h4>
      </a>
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
          {items.map(this.renderItem)}
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
