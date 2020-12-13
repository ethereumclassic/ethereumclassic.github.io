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
      <div className="flex">
        <ButtonsGroup
          className="merged"
          items={news.menu.map(i => ({
            ...i,
            className: i.key === key && 'selected'
          }))}
        />
        <div className="text-right">
          <Link button to={i18n.rss.link} icon="rss">
            {i18n.rss.text}
          </Link>
        </div>
      </div>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <div className="news-filters">
        <div className="float-right">
          <NewsYears {...pageContext} />
        </div>
        <NewsTags {...pageContext} />
      </div>
      <NewsPagination {...pageContext} noScroll />
      <NewsItems items={data.items.nodes} i18n={news} />
      <NewsPagination {...pageContext} />
    </LayoutPage>
  );
};

export default LayoutNews;
