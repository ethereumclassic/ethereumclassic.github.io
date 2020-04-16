// TODO fix accessibility
// TODO replace close button `x` with an SVG
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from 'react';
import ButtonLink from './buttonLink';
import Translate from './translate';

// toggle this to enable or disable globally
const enabled = true;

export default class Warning extends React.Component {
  constructor(props) {
    super(props);
    this.enabled = props.enabled && enabled;
    this.state = { showing: false };
  }

  componentDidMount() {
    if (this.enabled) {
      setTimeout(() => {
        this.setState({ showing: true });
      }, 2 * 1000);
    }
  }

  render() {
    if (!this.enabled) {
      return null;
    }
    const { showing } = this.state;
    return (
      <div className={`warning-container ${!showing ? 'hidden' : ''}`}>
        <div className="warning-overlay dark">
          <div
            className="close-button"
            onClick={() => this.setState({ showing: false })}
            role="button"
          >
            <i className="fa fa-times" />
          </div>
          <h3>
            <Translate text="warningTitle" />
          </h3>
          <div className="action">
            <ButtonLink
              text={<Translate text="warningButton" />}
              to="/development/clients"
              icon="angle-right"
            />
          </div>
          <p>
            <Translate text="warningText" />
          </p>
        </div>
      </div>
    );
  }
}
