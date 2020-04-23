import React from 'react';
import Link from './Link';

const ButtonsGroup = ({ items }) => {
  return (
    <>
      {items.map(({ to, name }) => (
        <>
          <Link to={to}>{name}</Link>
{' '}
        </>
      ))}
    </>
  );
};

export default ButtonsGroup;
