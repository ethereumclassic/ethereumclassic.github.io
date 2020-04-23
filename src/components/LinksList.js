import React from 'react';
import Link from './Link';

const LinksList = ({ items }) => {
  return (
    <>
      {items.map(({ to, name, tip, description }) => (
        <>
          <h3>
            <Link to={to}>{name}</Link>
            {tip && <small>{` ${tip}`}</small>}
          </h3>
          {description && <p>{description}</p>}
        </>
      ))}
    </>
  );
};

export default LinksList;
