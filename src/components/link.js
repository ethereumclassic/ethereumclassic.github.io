import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import LocalizedLink from './localizedLink';

import { isHash, isInternal } from '../util';

const Link = ({ to, text, children, icon, fullIcon, ...props }) => {
  const iconText = fullIcon || (icon ? `fas fa-${icon}` : null);
  const content = (
    <>
      {text || children}
      {iconText && <i className={iconText} />}
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
      <OutboundLink {...props} href={to} target="_blank" rel="noopener noreferrer">
        {content}
      </OutboundLink>
    );
  }
  return (
    <LocalizedLink {...props} to={to}>
      {content}
    </LocalizedLink>
  );
};

export default Link;
