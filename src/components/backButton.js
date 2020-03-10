import React from 'react';

import Link from './link';

const BackButton = ({ children, text, to, automatic, ...props }) => {
  const onClick = automatic && (() => window.history.back());
  return (
    <Link className="button-link back" onClick={onClick} to={to} {...props}>
      <i className="fas fa-angle-left" />
      {text || children}
    </Link>
  );
};

export default BackButton;
