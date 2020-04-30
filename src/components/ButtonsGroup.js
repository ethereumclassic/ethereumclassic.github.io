import React from 'react';

import { filterAndSortItems } from '../utils';

import Link from './Link';

const ButtonsGroup = ({
  data: { filter, sort, items: _i2 } = {},
  className,
  classNames,
  items: _i
}) => {
  const items = filterAndSortItems(_i || _i2, { filter, sort });
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
