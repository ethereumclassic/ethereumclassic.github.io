import React from 'react';

import { groupTypes } from '../utils';
import Grid from './grid';
import Card from './card';
import Translate from './translate';
import html from '../i18n/html';

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
    const { i18n, items } = this.props;
    const { selected } = this.state;
    // figure out types
    const types = groupTypes(items, t => ({ text: i18n[t] }));
    const filtered = selected === null ? items : items.filter(({ type }) => type === selected);
    return (
      <>
        <section>
          <div className={`legend ${selected != null ? 'has-selected' : ''}`}>
            <div className="info">
              <Translate text="legend" />
            </div>
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
                <Translate text="all" />
              </span>
            )}
          </div>
        </section>

        <Grid className="dapps-list" wide>
          {filtered.map(({ key, type, name, text, link }) => (
            <Card
              key={key}
              className={`grid-color-${types[type].i + 1}`}
              title={name}
              text={html(text)}
              to={link}
            />
          ))}
        </Grid>
      </>
    );
  }
}

export default ColorGrid;
