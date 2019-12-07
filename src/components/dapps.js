//  TODO use i18n
import React from 'react';

import Grid from './grid';
import Card from './card';

import html from '../i18n/html';

const Dapps = ({ i18n, dapps }) => {
  return (
    <>
      <section>
        {html(i18n.dapps)}
        <div className="legend">
          <b>{`${i18n.legend}:`}</b>
          <br />
          <span className="key green">{i18n.production}</span>
          <span className="key orange">{i18n.demo}</span>
          <span className="key red">{i18n.development}</span>
        </div>
      </section>

      <Grid className="dapps-list" wide>
        {dapps.map(dapp => (
          <Card {...dapp} />
        ))}
      </Grid>
    </>
  );
};

export default Dapps;
