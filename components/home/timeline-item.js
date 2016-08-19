import React, { PropTypes, Component } from 'react'

export default class TimelineItem extends Component {
  render () {
    const { Icon, date, title, text, className, link, children } = this.props
    return (
      <div className={`timeline-item ${className || ''}`}>
        <div className="date">{date || ' '}</div>

        {Icon &&
          <div className="icon">
            <Icon size={40} />
          </div>
        }
        <div className="content">
          {title &&
            <h3>
              {link ?
                <a href={link} target="_blank">{title}</a>
              : title}
            </h3>
          }
          {text && <p>{text}</p>}
          {children}
        </div>
      </div>
    )
  }
}

TimelineItem.propTypes = {
  Icon: PropTypes.func,
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}
