import React from 'react';

import Link from './link';
import Translate from './translate';

const BlogListItem = ({ date, author, title, link, excerpt, i18n = {} }) => {
  const relLink = `/${link}`;
  return (
    <div className="blog-item">
      <div className="meta">
        <Translate date={date} />
        {author && <small>{` ${author}`}</small>}
      </div>
      <h3 className="title">
        <Link to={relLink}>{title}</Link>
        <br />
      </h3>
      <div className="excerpt">
        {`${excerpt} `}
        {i18n.continueReading && (
          <Link to={relLink} className="read-more">
            {i18n.continueReading}
            <i className="fas fa-angle-right" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogListItem;
