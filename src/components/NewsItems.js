import React from 'react';
import Link from './Link';
import DateFormatter from './DateFormatter';

const NewsItems = ({ items, className, i18n }) => {
  if (!items.length) {
    return (
      <>
        <p>{i18n.noPosts}</p>
        <Link to={'/news'} button localized next>
          {i18n.englishPosts}
        </Link>
      </>
    );
  }
  return (
    <div className={`cells news-items ${className || ''}`}>
      {items.map(({ id, parent, data, relativeDirectory }) => {
        return (
          <div key={id} className="cell news-item">
            <div className="meta">
              <span className="date">
                <DateFormatter>{data.date}</DateFormatter>
              </span>
              {'  '}
              <small className="author">
                {[data.author, data.source].filter(i => i).join(', ')}
              </small>
            </div>
            <h3>
              <Link to={data.link || `/${relativeDirectory}`}>{data.title}</Link>
            </h3>
            {parent.excerpt && <p>{parent.excerpt}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default NewsItems;
