import React from 'react';
import LocalizedLink from './localizedLink';

const isHash = str => /^#/.test(str);
const isInternal = to => /^\/(?!\/)/.test(to);

// Only use <LocalizedLink /> for internal links

const MdxLink = ({ href, children, ...props }) => {
  if (isHash(href)) {
    return (
      <a {...props} href={href}>
        {children}
      </a>
    );
  }
  if (!isInternal(href) || href.indexOf('/static/') === 0) {
    return (
      <a {...props} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <LocalizedLink {...props} to={href}>
      {children}
    </LocalizedLink>
  );
};

export default MdxLink;
