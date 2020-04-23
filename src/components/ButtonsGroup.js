import React from 'react';
import Link from './Link';

const ButtonsGroup = ({ items }) => {
  return (
    <>
      {items.map(({ key, to, name }) => (
        <React.Fragment key={key}>
          <Link key={key} to={to}>
            {name}
          </Link>
          {'  '}
        </React.Fragment>
      ))}
    </>
  );
};

export default ButtonsGroup;
