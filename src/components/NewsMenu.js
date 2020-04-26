import React from 'react';

import NewsFilters from './NewsFilters';
import NewsPagination from './NewsPagination';
import ButtonsGroup from './ButtonsGroup';

const NewsMenu = props => {
  return (
    <>
      <ButtonsGroup
        className="merged"
        items={[
          { key: 'news', to: '/news', name: 'News' },
          { key: 'blog', to: '/blog', name: 'Blog' },
          { key: 'media', to: '/news/media', name: 'Media' }
        ]}
      />
      <div>
        <NewsFilters {...props} />
        <NewsPagination {...props} />
      </div>
    </>
  );
};

export default NewsMenu;
