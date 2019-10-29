import React from 'react';

import LocalizedLink from './localizedLink';

import { isHash, isInternal } from '../util';

const Link = ({ to, text, children, ...props }) => {
  if (isHash(to)) {
    return (
      <a {...props} href={to}>
        {text || children}
      </a>
    );
  }
  if (!isInternal(to) || to.indexOf('/static/') === 0 || to.endsWith('.pdf')) {
    return (
      <a {...props} href={to} target="_blank" rel="noopener noreferrer">
        {text || children}
      </a>
    );
  }
  return (
    <LocalizedLink {...props} to={to}>
      {text || children}
    </LocalizedLink>
  );
};

export default Link;
