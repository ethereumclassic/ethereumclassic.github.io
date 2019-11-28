// TODO fix accessibility
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import ButtonLink from './buttonLink';

export default class Warning extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showing: true });
    }, 2 * 1000);
  }

  render() {
    const { showing } = this.state;
    return (
      <div className={`warning-container ${!showing ? 'hidden' : ''}`}>
        <div className="warning-overlay">
          <div
            className="close-button"
            onClick={() => this.setState({ showing: false })}
            role="button"
          >
            ✖
          </div>
          <h3>Hard Fork Alert</h3>
          <div className="action">
            <ButtonLink
              text="Upgrade"
              to="https://ecips.ethereumclassic.org/ECIPs/ecip-1056"
              icon="angle-right"
            />
          </div>
          <p>
            Ethereum Classic is undergoing a planned upgrade "Agharta" around 15 Jan 2020. If you
            run an ETC node please upgrade as soon as possible.
          </p>
        </div>
      </div>
    );
  }
}
