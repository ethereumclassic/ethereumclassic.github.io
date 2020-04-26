import React from 'react';

import Menu from './Menu';

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
      <Menu items={allTags.map(t => ({ to: `/${relativePath}/tag/${t}`, name: news.tags[t] }))} />
      <Menu items={allYears.map(y => ({ to: `/${relativePath}/year/${y}`, name: y }))} />
    </>
  );
};

export default NewsFilters;
