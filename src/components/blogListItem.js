import React from 'react';

import Link from './link';
import Translate from './translate';

const BlogListItem = ({ post, i18n }) => {
  return (
    <div key={`${post.frontmatter.title}-${post.fields.locale}`} className="blog-item">
      <h4>
        <Translate date={post.frontmatter.date} />
        <small>{` ${post.frontmatter.author || ''}`}</small>
      </h4>
      <h3>
        <Link to={`/${post.parent.relativeDirectory}`}>{post.frontmatter.title}</Link>
        <br />
      </h3>
      <div>
        {`${post.excerpt} `}
        <Link to={`/${post.parent.relativeDirectory}`} className="read-more">
          {i18n.continueReading}
          <i className="fas fa-angle-right" />
        </Link>
      </div>
    </div>
  );
};

export default BlogListItem;
