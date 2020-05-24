import React from 'react';

import ButtonsGroup from './ButtonsGroup';

const NewsFilters = ({
  allTags,
  allYears,
  relativePath,
  filter,
  i18n: {
    globals: { news }
  }
}) => {
  return (
    <>
      <ButtonsGroup
        items={allTags.map(t => ({
          to: `/${relativePath}/tag/${t}`,
          name: news.tags[t],
          className: t === filter && 'selected'
        }))}
      />
      <ButtonsGroup
        items={allYears.map(y => ({
          to: `/${relativePath}/year/${y}`,
          name: y,
          className: y === filter && 'selected'
        }))}
        className="merged"
      />
    </>
  );
};

export default NewsFilters;
