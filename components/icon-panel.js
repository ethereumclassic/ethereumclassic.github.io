import React, { PropTypes, Component } from 'react'

import Panel from 'muicss/lib/react/panel'

export default class IconPanel extends Component {
  render () {
    const { Icon, children } = this.props
    return (
      <Panel className="icon-panel">
        <div className="icon"><Icon /></div>
        <div className="content">
          {children}
        </div>
      </Panel>
    )
  }
}

IconPanel.propTypes = {
  Icon: PropTypes.func.isRequired,
  children: PropTypes.node,
}
