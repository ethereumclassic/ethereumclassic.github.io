import React from 'react';

import LayoutPage from './LayoutPage';
import NewsTags from './NewsTags';
import NewsYears from './NewsYears';
import ButtonsGroup from './ButtonsGroup';
import NewsItems from './NewsItems';
import NewsPagination from './NewsPagination';
import Link from './Link';

const LayoutNews = props => {
  const {
    data,
    pageContext,
    pageContext: {
      relativePath,
      i18n,
      i18n: {
        globals: { news }
      }
    }
  } = props;
  const key = relativePath.split('/').pop();
  return (
    <LayoutPage {...props} noIntro>
      <Link button className="float-right" to="/rss.xml" icon="rss">
        {news.rssFeed}
      </Link>
      <ButtonsGroup
        className="merged"
        items={news.menu.map(i => ({
          ...i,
          className: i.key === key && 'selected'
        }))}
      />
      <Link
        button
        next
        className="float-right"
        to="https://github.com/ethereumclassic/ethereumclassic.github.io"
      >
        {i18n.submit}
      </Link>
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

export default LayoutNews;
