import React from 'react';

import Grid from './grid';

import black from '../assets/images/etc-black.svg';
import mint from '../assets/images/etc-mint.svg';
import white from '../assets/images/etc-white.svg';

const logos = [
  { src: black, key: 'Black' },
  { src: mint, key: 'Mint' },
  { src: white, key: 'White' }
];

const Logos = () => {
  return (
    <div className="showcase">
      <Grid columns={3}>
        {logos.map(({ key, src }) => (
          <img src={src} key={key} alt={`${key} ETC Logo`} />
        ))}
      </Grid>
    </div>
  );
};

export default Logos;
