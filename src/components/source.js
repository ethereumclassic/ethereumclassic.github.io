import React from 'react';
import Translate from './translate';
import Link from './link';

const Source = ({ to, text }) => {
  return (
    <p className="source">
      <Translate text="source" />
      {': '}
      <Link to={to} text={text || to} />
    </p>
  );
};

export default Source;
