import React from 'react';

import LocalizedLink from './localizedLink';

function isHash(str) {
  return /^#/.test(str);
}

function isInternal(str) {
  return /^\/(?!\/)/.test(str);
}

// list of classes that never show the external link icon
const externalIconBlacklist = ['gatsby-resp-image-link', 'card', 'button-link'];

const Link = ({ to, text, children, icon, fullIcon, ...props }) => {
  const iconText = fullIcon || (icon ? `fas fa-${icon}` : null);
  const content = (
    <>
      {text || children}
      {iconText && <i className={`${iconText} right`} />}
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
    const showIcon = !externalIconBlacklist.find(s => `${props.className}`.indexOf(s) > -1);
    return (
      <a
        {...props}
        href={to || '#'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={
          props.alert &&
          (e => {
            e.preventDefault();
            alert(props.alert);
          })
        }
      >
        {content}
        {showIcon && <i className="fas fa-external-link-alt fa-xs external-icon" />}
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
