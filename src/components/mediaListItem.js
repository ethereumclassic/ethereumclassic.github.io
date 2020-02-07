import React from 'react';

import Link from './link';
import Translate from './translate';

const BlogListItem = ({ key, date, title, source, link, text }) => {
  return (
    <div key={key} className="blog-item">
      <h4>
        <Translate date={date} />
        <small>{` ${source || ''}`}</small>
      </h4>
      <h3>
        <Link to={link} text={title} />
        <br />
      </h3>
      <div>{text}</div>
    </div>
  );
};

export default BlogListItem;
