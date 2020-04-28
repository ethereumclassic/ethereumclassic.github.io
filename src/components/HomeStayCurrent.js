import React from 'react';
import Link from './Link';
import NewsItems from './NewsItems';

import Md from './Markdown';

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
        <Md>{i18n.text}</Md>
        {i18n.button && (
          <Link to={i18n.button.to} button>
            {i18n.button.text}
          </Link>
        )}
      </header>
      <div className="content">
        <h3>{news.latestNews}</h3>
        <NewsItems items={items.nodes} className="widen scrolly" />
        <Link to="/news" next button>
          {news.allNews}
        </Link>
      </div>
    </section>
  );
};

export default HomeStayCurrent;
