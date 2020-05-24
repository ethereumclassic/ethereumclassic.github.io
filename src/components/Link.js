import React from 'react';

import { navigate } from '@reach/router';
import { Link as GLink } from 'gatsby';
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

const externalIconBlacklist = ['gatsby-resp-image-link', 'card', 'button-link'];

function getIconText({ back, next, icon, brand }) {
  const icons = {};
  if (back) {
    icons.leftIcon = 'fas fa-angle-left';
  }
  if (next) {
    icons.rightIcon = 'fas fa-angle-right';
  }
  if (brand) {
    icons.rightIcon = `fab fa-${brand}`;
  }
  if (icon) {
    icons.rightIcon = icon.includes(' ') ? icon : `fas fa-${icon}`;
  }
  return icons;
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
  localized,
  className: _c,
  noScroll,
  title,
  onlyIcon,
  onClick,
  ...props
}) => {
  const { leftIcon, rightIcon } = getIconText({ brand, back, next, icon });
  const className = `${button ? 'button-link ' : ''}${!button && !children ? 'icon' : ''}${_c ||
    ''}`;
  const to = _to || link;
  const passedProps = { title, className, style, onClick };
  const content = (
    <>
      {leftIcon && <i className={`${leftIcon} left`} />}
      {children || (rightIcon && name && <span className="label">{name}</span>)}
      {rightIcon && <i className={`${rightIcon} right ${!children && 'left'}`} />}
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
  if (localized) {
    return (
      <GLink {...passedProps} to={to}>
        {content}
      </GLink>
    );
  }
  return (
    <I18nLink {...passedProps} to={to}>
      {content}
    </I18nLink>
  );
};

export default Link;
