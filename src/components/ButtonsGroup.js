import React from 'react';
import Link from './Link';

const ButtonsGroup = ({ data: { items: _i2 } = {}, className, items: _i }) => {
  const items = _i || _i2;
  return (
    <div className={className}>
      {items.map(({ key, to, name }) => (
        <Link key={key} to={to} className="button">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ButtonsGroup;
