import React from 'react';

import Link from './link';
import Translate from './translate';

const MediaListItem = ({ date, title, author, source, link, text }) => {
  return (
    <div className="blog-item">
      <div className="meta">
        <Translate date={date} />
        <small>{` ${author || ''}${author && source ? ',' : ''} ${source || ''}`}</small>
      </div>
      <h3 className="title">
        <Link to={link} text={title} />
      </h3>
      {text && <div className="excerpt">{text}</div>}
    </div>
  );
};

export default MediaListItem;
