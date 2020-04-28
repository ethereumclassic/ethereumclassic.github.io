import React from 'react';
import Link from './Link';

const ButtonsGroup = ({ data: { items: _i2 } = {}, className, items: _i }) => {
  const items = _i || _i2;
  return (
    <div className={`button-group ${className || ''}`}>
      {items.map(({ name, ...props }) => (
        <Link {...props} button>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ButtonsGroup;
