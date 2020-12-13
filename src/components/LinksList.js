import React from 'react';
import Link from './Link';

import Md from './Markdown';

const LinksList = ({ data: { items } }) => {
  return (
    <>
      {items.map(({ key, link, name, tip, description }) => (
        <React.Fragment key={key}>
          <h3>
            <Link to={link}>{name}</Link>
            {tip && (
              <>
                {'  '}
                <small>{tip}</small>
              </>
            )}
          </h3>
          <Md>{description}</Md>
        </React.Fragment>
      ))}
    </>
  );
};

export default LinksList;
