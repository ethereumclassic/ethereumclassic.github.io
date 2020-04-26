import React from 'react';

import Link from './Link';

const Menu = ({ items, className }) => (
  <div className={`menu ${className || ''}`}>
    {items.map(i => (
      <div key={i.key}>
        <Link to={i.to}>{i.name}</Link>
        {i.tip && <small>{` ${i.tip}`}</small>}
      </div>
    ))}
  </div>
);

export default Menu;
