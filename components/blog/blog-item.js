import React, { PropTypes, Component } from 'react'

import formattedDate from '../../utils/formattedDate'

export default class BlogItem extends Component {
  render () {
    const { item } = this.props
    return (
      <div className="blog-item">
        <div className="info">
          <h1>{item.title}</h1>
          <h3>
            <span className="date">{formattedDate(item.date)}</span>
            {' '}
            {item.author && <span className="author">by {item.author}</span>}
          </h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: item.body }} />
      </div>
    )
  }
}

BlogItem.propTypes = {
  item: PropTypes.object.isRequired,
  titleTag: PropTypes.string,
}
