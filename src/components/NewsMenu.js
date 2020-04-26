import React from 'react';

import Json from './Json';
import NewsFilters from './NewsFilters';
import NewsPagination from './NewsPagination';
import Menu from './Menu';

const NewsMenu = props => {
  return (
    <div>
      {/* <Json {...rest} /> */}
      <Menu
        items={[
          { key: 'news', to: '/news', name: 'News' },
          { key: 'blog', to: '/blog', name: 'Blog' },
          { key: 'media', to: '/news/media', name: 'Media' }
        ]}
      />
      <NewsFilters />
      <NewsPagination {...props} />
    </div>
  );
};

export default NewsMenu;
