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

const Link = ({ to, text, children, icon, next, back, fullIcon, as, ...props }) => {
  const actualIcon = icon || (back && 'angle-left') || (next && 'angle-right');
  const iconText = fullIcon || (actualIcon ? `fas fa-${actualIcon}` : null);
  const content = (
    <>
      {back && iconText && <i className={`${iconText} left`} />}
      {text || children || to}
      {!back && iconText && <i className={`${iconText} right`} />}
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
