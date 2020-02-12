import React from 'react';

import { groupTypes } from '../utils';
import Grid from './grid';
import Card from './card';
import Translate from './translate';
import html from '../i18n/html';

const ColorGrid = ({ i18n, items }) => {
  // figure out types
  const types = groupTypes(items, t => ({ text: i18n[t] }));
  return (
    <>
      <section>
        <div className="legend">
          <b>
            <Translate text="legend" />
          </b>
          <br />
          {Object.values(types).map(({ type, text, i }) => (
            <span key={type} className={`key grid-color-${i + 1}`}>
              {text}
            </span>
          ))}
        </div>
      </section>

      <Grid className="dapps-list" wide>
        {items.map(({ key, type, name, text, link }) => (
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
};

export default ColorGrid;
