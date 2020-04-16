import React from 'react';

import { navigate } from '@reach/router';
import LocalizedLink from './localizedLink';

function isHash(str) {
  return /^#/.test(str);
}

function isInternal(str) {
  return /^\/(?!\/)/.test(str);
}

// list of classes that never show the external link icon
const externalIconBlacklist = ['gatsby-resp-image-link', 'card', 'button-link'];

const Link = ({
  to: _to,
  text,
  name,
  link,
  children,
  icon,
  next,
  back,
  fullIcon,
  as,
  style,
  _localized,
  className,
  noScroll,
  notLocalized,
  title,
  onlyIcon,
  ...props
}) => {
  const to = _to || link;
  const passedProps = { title, className, style };
  const actualIcon = icon || (back && 'angle-left') || (next && 'angle-right');
  const iconText = fullIcon || (actualIcon ? `fas fa-${actualIcon}` : null);
  const content = onlyIcon ? (
    <i className={`${iconText} left right`} />
  ) : (
    <>
      {back && iconText && <i className={`${iconText} left`} />}
      {text || name || children || to}
      {!back && iconText && <i className={`${iconText} right`} />}
    </>
  );
  if (isHash(to)) {
    return (
      <a
        {...passedProps}
        href={to}
        onClick={e => {
          e.preventDefault();
          navigate(to);
        }}
      >
        {content}
      </a>
    );
  }
  if (
    !isInternal(to) ||
    to.indexOf('/static/') === 0 ||
    to.endsWith('.pdf') ||
    to.endsWith('.xml')
  ) {
    const showIcon = !externalIconBlacklist.find(s => `${className}`.indexOf(s) > -1);
    return (
      <a
        {...passedProps}
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
  if (noScroll) {
    passedProps.state = { noScroll: true };
  }
  return (
    <LocalizedLink {...passedProps} notLocalized={notLocalized} to={to}>
      {content}
    </LocalizedLink>
  );
};

export default Link;
