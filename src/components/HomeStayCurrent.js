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
          <Link next to={i18n.button.link} button>
            {i18n.button.text}
          </Link>
        )}
      </header>
      <div className="content">
        <h3>{news.latestNews}</h3>
        <NewsItems items={items.nodes} className="widen scrolly" i18n={news} />
        {!!items.nodes.length && (
          <Link to="/news" next button>
            {news.allNews}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HomeStayCurrent;
