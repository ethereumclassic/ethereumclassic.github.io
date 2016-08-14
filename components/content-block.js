import React, { PropTypes, Component } from 'react'

import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

export default class ContentBlock extends Component {
  render () {
    const { Icon, body, title, dropdown } = this.props
    return (
      <div className={`content-block ${this.props.className || ''}`}>
        {Icon && <div className="icon">{<Icon />}</div>}
        {title && <h2>{title}</h2>}
        {dropdown &&
          <Dropdown label={dropdown.title}>
            {dropdown.items.map((item, i) => <DropdownItem key={i} link={item.link}>{item.text}</DropdownItem>)}
          </Dropdown>
        }
        <div
          className={`content ${this.props.bodyClass || ''}`}
          dangerouslySetInnerHTML={{ __html: body.body }}
        />
      </div>
    )
  }
}

ContentBlock.propTypes = {
  body: PropTypes.object.isRequired,
  Icon: PropTypes.func,
  title: PropTypes.string,
  dropdown: PropTypes.object,
  bodyClass: PropTypes.string,
  className: PropTypes.string,
}
