import React from 'react';
import Link from './link';

const LinkSection = ({ to, children, title }) => {
  return (
    <div className="link-section">
      <h3>
        <Link to={to}>{title}</Link>
      </h3>
      {children}
      <br />
    </div>
  );
};

export default LinkSection;
