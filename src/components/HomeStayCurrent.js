import React from 'react';
import Link from './Link';
import NewsItems from './NewsItems';

const HomeStayCurrent = ({
  data: i18n,
  news: items,
  i18n: {
    globals: { news }
  }
}) => {
  return (
    <section>
      <header>
        {i18n.text}
        <br />
        {i18n.button && (
          <Link to={i18n.button.to} className="button">
            {i18n.button.text}
          </Link>
        )}
      </header>
      <div className="content">
        <h3>{news.latestArticles}</h3>
        <NewsItems items={items.nodes} className="scrolly" />
        <Link to="/blog" className="button">
          {news.allNews}
        </Link>
      </div>
    </section>
  );
};

export default HomeStayCurrent;
