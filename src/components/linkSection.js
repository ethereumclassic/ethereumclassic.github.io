import React from 'react';
import Link from './link';

const LinkSection = ({ to, children, title, text }) => {
  return (
    <div className="link-section">
      <h3>
        <Link to={to}>{title}</Link>
      </h3>
      {text || children}
    </div>
  );
};

export default LinkSection;
