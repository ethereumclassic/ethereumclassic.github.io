/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { groupTypes } from '../utils';

import ContentItemWrapper from './ContentItemWrapper';
import Link from './Link';

class ColorGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(selected) {
    this.setState({ selected });
  }

  render() {
    const {
      data: { items, legends, ...i18n }
    } = this.props;
    const { selected } = this.state;
    // figure out types
    const types = groupTypes(items, t => ({ text: legends[t] }));
    const filtered = selected === null ? items : items.filter(({ type }) => type === selected);
    return (
      <>
        <ContentItemWrapper data={i18n}>
          <div className={`legend ${selected != null ? 'has-selected' : ''}`}>
            <div className="info">{i18n.legend}</div>
            {Object.values(types).map(({ type, text, i }) => (
              <span
                onClick={() => this.handleSelected(type)}
                key={type}
                className={`key grid-color-${i + 1} ${selected === type ? 'selected' : ''}`}
              >
                {text}
              </span>
            ))}
            {selected && (
              <span
                onClick={() => this.handleSelected(null)}
                className={`key grid-color-all ${selected === null ? 'selected' : ''}`}
              >
                {i18n.all}
              </span>
            )}
          </div>
        </ContentItemWrapper>
        <div className="color-grid-items wide">
          {filtered.map(({ key, type, name, text, link }) => (
            <Link to={link} key={key} className={`card grid-color-${types[type].i + 1}`}>
              <h4>{name}</h4>
              <div className="content">
                <p>{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default ColorGrid;
