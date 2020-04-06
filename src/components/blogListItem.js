import React from 'react';

import Link from './link';
import Translate from './translate';

const BlogListItem = ({ post, i18n = {} }) => {
  return (
    <div className="blog-item">
      <div className="meta">
        <Translate date={post.frontmatter.date} />
        <small>{` ${post.frontmatter.author || ''}`}</small>
      </div>
      <h3 className="title">
        <Link to={`/${post.parent.relativeDirectory}`}>{post.frontmatter.title}</Link>
        <br />
      </h3>
      <div className="excerpt">
        {`${post.excerpt} `}
        {i18n.continueReading && (
          <Link to={`/${post.parent.relativeDirectory}`} className="read-more">
            {i18n.continueReading}
            <i className="fas fa-angle-right" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogListItem;
