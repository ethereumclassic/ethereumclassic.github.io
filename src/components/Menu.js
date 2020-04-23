import React from 'react';

import Link from './Link';

const Menu = ({ items }) => (
  <>
    {items.map(i => (
      <div key={i.key}>
        <Link to={i.to}>{i.name}</Link>
      </div>
    ))}
  </>
);

export default Menu;
