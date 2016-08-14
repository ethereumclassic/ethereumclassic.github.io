import React, { PropTypes, Component } from 'react'

export default class OverlayProvider extends Component {
  constructor (props) {
    super(props)
    this.state = { component: false }
    this.handleOverlay = this.handleOverlay.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }


  getChildContext () {
    return { overlay: this.handleOverlay }
  }

  handleClose () {
    this.setState({ component: false })
  }

  handleOverlay ({ title = false, component, close }) {
    if (close) {
      return this.handleClose()
    }
    return this.setState({ component, title })
  }

  renderOverlay () {
    const { component, title } = this.state
    return (
      <div id="mui-overlay" onClick={this.handleClose}>
        <div className="inner" onClick={e => e.stopPropagation()}>
          <div className="close" onClick={this.handleClose}>
            &times;
          </div>
          {title && <h3 className="overlay-title">{title}</h3>}
          {component}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div {...this.props}>
        {this.state.component && this.renderOverlay()}
        {this.props.children}
      </div>
    )
  }
}

OverlayProvider.childContextTypes = {
  overlay: PropTypes.func,
}

OverlayProvider.propTypes = {
  children: PropTypes.node,
}
