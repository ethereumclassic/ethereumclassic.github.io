import React from 'react';

import { navigate } from '@reach/router';
import { I18nLink } from 'gatsby-plugin-yaml-i18n';

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

// list of classes that never show the external link icon
const externalIconBlacklist = ['gatsby-resp-image-link', 'card', 'button-link'];

function getIconText({ back, next, icon, brand }) {
  if (back) {
    return 'fas fa-angle-left';
  }
  if (next) {
    return 'fas fa-angle-right';
  }
  if (brand) {
    return `fab fa-${brand}`;
  }
  if (icon) {
    return icon.includes(' ') ? icon : `fas fa-${icon}`;
  }
  return null;
}

const Link = ({
  to: _to,
  link,
  children,
  icon,
  brand,
  next,
  back,
  as,
  style,
  button,
  name,
  className: _c,
  noScroll,
  title,
  onlyIcon,
  ...props
}) => {
  const iconText = getIconText({ brand, back, next, icon });
  const className = `${button ? 'button-link ' : ''}${!children ? 'icon' : ''}${_c || ''}`;
  const to = _to || link;
  const passedProps = { title, className, style };
  const content = (
    <>
      {back && iconText && <i className={`${iconText} left`} />}
      {children || (iconText && name && <span className="label">{name}</span>)}
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
  if (isExternal(to)) {
    const showIcon =
      children &&
      !icon &&
      !button &&
      !externalIconBlacklist.find(s => `${className}`.indexOf(s) > -1);
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
        {showIcon && <i className="fas fa-external-link-alt fa-xs right" />}
      </a>
    );
  }
  if (noScroll) {
    passedProps.state = { noScroll: true };
  }
  return (
    <I18nLink {...passedProps} to={to}>
      {content}
    </I18nLink>
  );
};

export default Link;
