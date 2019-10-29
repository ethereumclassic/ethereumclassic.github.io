import React from 'react';

import LocalizedLink from './localizedLink';

import { isHash, isInternal } from '../util';

const Link = ({ to, text, children, icon, ...props }) => {
  const content = (
    <>
      {text || children}
      {icon && <i className={`fas fa-${icon}`} />}
    </>
  );
  if (isHash(to)) {
    return (
      <a {...props} href={to}>
        {content}
      </a>
    );
  }
  if (!isInternal(to) || to.indexOf('/static/') === 0 || to.endsWith('.pdf')) {
    return (
      <a {...props} href={to} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <LocalizedLink {...props} to={to}>
      {content}
    </LocalizedLink>
  );
};

export default Link;
