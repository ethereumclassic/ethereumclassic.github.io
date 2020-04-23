import { I18nLink } from 'gatsby-plugin-yaml-i18n';

import React from 'react';

function isHash(str) {
  return /^#/.test(str);
}

function isExternal(str) {
  return (
    !/^\/(?!\/)/.test(str) ||
    str.indexOf('/static/') === 0 ||
    str.endsWith('.pdf') ||
    str.endsWith('.xml')
  );
}

const Link = ({ to, children, ...props }) => {
  if (isExternal(to)) {
    return (
      <a {...props} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <I18nLink {...props} to={to}>
      {children}
    </I18nLink>
  );
};

export default Link;
