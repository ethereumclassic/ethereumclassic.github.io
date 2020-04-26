import React from 'react';

import NewsFilters from './NewsFilters';
import NewsPagination from './NewsPagination';
import Menu from './Menu';

const NewsMenu = props => {
  return (
    <>
      <div style={{ float: 'right' }}>
        <NewsFilters {...props} />
        <NewsPagination {...props} />
      </div>
      <Menu
        items={[
          { key: 'news', to: '/news', name: 'News' },
          { key: 'blog', to: '/blog', name: 'Blog' },
          { key: 'media', to: '/news/media', name: 'Media' }
        ]}
      />
    </>
  );
};

export default NewsMenu;
