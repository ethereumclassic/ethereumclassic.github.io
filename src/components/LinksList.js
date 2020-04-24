import React from 'react';
import Link from './Link';

const LinksList = ({ data: { items } }) => {
  return (
    <>
      {items.map(({ key, to, name, tip, description }) => (
        <React.Fragment key={key}>
          <h3>
            <Link to={to}>{name}</Link>
            {tip && <small>{` ${tip}`}</small>}
          </h3>
          {description && <p>{description}</p>}
        </React.Fragment>
      ))}
    </>
  );
};

export default LinksList;
