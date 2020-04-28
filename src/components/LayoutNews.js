import React from 'react';

import LayoutPage from './LayoutPage';
import NewsTags from './NewsTags';
import NewsYears from './NewsYears';
import ButtonsGroup from './ButtonsGroup';
import NewsItems from './NewsItems';
import NewsPagination from './NewsPagination';

const menu = [
  { key: 'news', to: '/news' },
  { key: 'blog', to: '/blog' },
  { key: 'media', to: '/news/media' }
];

function getKey(relativePath) {
  return relativePath.split('/').pop();
}
const LayoutMarkdown = props => {
  const {
    data,
    pageContext: _pc,
    pageContext: {
      relativePath,
      i18n: _i18n,
      i18n: {
        globals: { news }
      }
    }
  } = props;
  const key = getKey(relativePath);
  const i18n = { ..._i18n, ...news[key] };
  const pageContext = { ..._pc, i18n };
  return (
    <LayoutPage {...props} pageContext={pageContext} noIntro>
      <ButtonsGroup
        className="merged"
        items={menu.map(i => ({
          ...i,
          name: news[i.key].button,
          className: i.key === key && 'selected'
        }))}
      />
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <div className="news-filters">
        <div className="float-right">
          <NewsYears {...pageContext} />
        </div>
        <NewsTags {...pageContext} />
      </div>
      <NewsPagination {...pageContext} noScroll />
      <NewsItems items={data.items.nodes} />
      <NewsPagination {...pageContext} />
    </LayoutPage>
  );
};

export default LayoutMarkdown;
