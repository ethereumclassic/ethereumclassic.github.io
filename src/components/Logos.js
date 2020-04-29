import React from 'react';

import emerald from '../assets/images/etc-emerald.svg';
import old from '../assets/images/etc.svg';

import black from '../assets/images/etc-black.svg';
import white from '../assets/images/etc-white.svg';
import yellow from '../assets/images/etc-yellow.svg';
import red from '../assets/images/etc-red.svg';
import blue from '../assets/images/etc-blue.svg';
import orange from '../assets/images/etc-orange.svg';
import purple from '../assets/images/etc-purple.svg';

const logos = [
  { src: emerald, key: 'Emerald' },
  { src: black, key: 'Black' },
  { src: white, key: 'White' },
  { src: yellow, key: 'yellow' },
  { src: red, key: 'red' },
  { src: blue, key: 'blue' },
  { src: orange, key: 'orange' },
  { src: purple, key: 'purple' },
  { src: old, key: 'old' }
];

const Logos = () => {
  return (
    <div className="grid showcase">
      {logos.map(({ key, src }) => (
        <img src={src} key={key} alt={`${key} ETC Logo`} />
      ))}
    </div>
  );
};

export default Logos;
