import React from 'react';
import Link from './link';

const ButtonLink = ({ className, ...props }) => {
  return <Link className={`button-link ${className || ''}`} {...props} />;
};

export default ButtonLink;
