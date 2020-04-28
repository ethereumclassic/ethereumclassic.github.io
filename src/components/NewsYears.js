import React from 'react';

import ButtonsGroup from './ButtonsGroup';

const NewsYears = ({ allYears, relativePath, filter }) => {
  return (
    <ButtonsGroup
      items={allYears.map(y => ({
        to: `/${relativePath}/year/${y}`,
        name: y,
        className: y === filter && 'selected'
      }))}
      className="merged"
    />
  );
};

export default NewsYears;
