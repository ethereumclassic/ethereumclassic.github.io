import React from 'react';

import Link from './link';

const BackButton = ({ children, text, to, ...props }) => {
  return (
    <Link className="button-link" to={to} {...props}>
      <i className="fas fa-angle-left" />
      {text || children}
    </Link>
  );
};

export default BackButton;
