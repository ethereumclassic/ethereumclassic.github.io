import React, { PropTypes, Component } from 'react'

import Panel from 'muicss/lib/react/panel'
export default class ConentPanel extends Component {
  render () {
    const { Icon, src } = this.props
    return (
      <Panel className="content-panel" >
        {Icon && <div className="icon">{<Icon size={100} />}</div>}
        <div className="content" dangerouslySetInnerHTML={{ __html: src.body }} />
      </Panel>
    )
  }
}

ConentPanel.propTypes = {
  src: PropTypes.object.isRequired,
  Icon: PropTypes.object,
}
