import React from 'react';
import Translate from './translate';
import Link from './link';

const Source = ({ to, text }) => {
  return (
    <span className="source">
      <Translate text="source" />
      {': '}
      <Link to={to} text={text} />
    </span>
  );
};

export default Source;
