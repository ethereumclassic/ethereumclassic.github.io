import React from 'react';

import Link from './Link';

const Menu = ({ items, className, onClick }) => (
  <div className={`menu ${className || ''}`}>
    {items.map(i => (
      <div key={i.key}>
        <Link to={i.to} onClick={onClick}>
          {i.name}
        </Link>
        {i.tip && <small>{` ${i.tip}`}</small>}
      </div>
    ))}
  </div>
);

export default Menu;
