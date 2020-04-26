import React from 'react';
import Link from './Link';

const NewsItems = ({ items }) => {
  return (
    <div className="news-items">
      {items.map(({ id, parent, data, relativeDirectory }) => {
        return (
          <div key={id} className="news-item">
            <div>
              <span className="date">{data.date}</span>
              <span className="author">
                {` ${data.author}${data.source ? `, ${data.source}` : ''}`}
              </span>
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
