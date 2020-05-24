import React from 'react';

import Link from './Link';

const Icons = ({ items }) => {
  return (
    <div className="icon-group">
      {items.map(i => (
        <Link {...i} />
      ))}
    </div>
  );
};

export default Icons;
