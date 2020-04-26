import React from 'react';

import ButtonsGroup from './ButtonsGroup';

const NewsFilters = ({
  allTags,
  allYears,
  relativePath,
  i18n: {
    globals: { news }
  }
}) => {
  return (
    <>
      <ButtonsGroup
        items={allTags.map(t => ({ to: `/${relativePath}/tag/${t}`, name: news.tags[t] }))}
      />
      <ButtonsGroup items={allYears.map(y => ({ to: `/${relativePath}/year/${y}`, name: y }))} />
    </>
  );
};

export default NewsFilters;
