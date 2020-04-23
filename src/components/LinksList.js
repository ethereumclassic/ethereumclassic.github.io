import React from 'react';
import Link from './Link';

const LinksList = ({ items }) => {
  return (
    <>
      {items.map(({ to, name, text, description }) => (
        <>
          <h3>
            <Link to={to}>{name}</Link>
            {text && <small>{` ${text}`}</small>}
          </h3>
          {description && <p>{description}</p>}
        </>
      ))}
    </>
  );
};

export default LinksList;
