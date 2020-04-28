import React from 'react';
import Link from './Link';

const ButtonsGroup = ({ data: { items: _i2 } = {}, className, classNames, items: _i }) => {
  const items = _i || _i2;
  return (
    <div className={`button-group ${className || ''}`}>
      {items.map(({ name, className: _cn, ...props }) => (
        <Link {...props} button className={`${_cn || ''} ${classNames || ''}`}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ButtonsGroup;
