import React from 'react';
import LocalizedLink from './localizedLink';

const ButtonLink = ({ link, text, children, internal, className, ...props }) => {
  if (internal) {
    return (
      <LocalizedLink to={link} className={`button-link ${className || ''}`}>
        {children}
      </LocalizedLink>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`button-link ${className || ''}`}
      {...props}
    >
      {text || children}
    </a>
  );
};

export default ButtonLink;
