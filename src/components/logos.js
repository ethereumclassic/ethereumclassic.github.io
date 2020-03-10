import React from 'react';

import Grid from './grid';

import black from '../assets/images/etc-black.svg';
import mint from '../assets/images/etc-mint.svg';
import white from '../assets/images/etc-white.svg';

const Logos = () => {
  return (
    <div className="showcase">
      <Grid columns={3}>
        {[black, mint, white].map(logo => (
          <img src={logo} alt="ETC Logo" />
        ))}
      </Grid>
    </div>
  );
};

export default Logos;
