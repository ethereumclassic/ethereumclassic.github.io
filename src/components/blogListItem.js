import React from 'react';

import Link from './link';

const BlogListItem = ({ post }) => {
  return (
    <div key={`${post.frontmatter.title}-${post.fields.locale}`} className="blog-item">
      <h4>
        {`${new Date(post.frontmatter.date).toLocaleDateString()} `}
        <small>{post.frontmatter.author}</small>
      </h4>
      <h3>
        <Link to={`/${post.parent.relativeDirectory}`}>{post.frontmatter.title}</Link>
        <br />
      </h3>
      <div>
        {`${post.excerpt} `}
        <Link to={`/${post.parent.relativeDirectory}`} className="read-more">
          Continue Reading
          <i className="fas fa-angle-right" />
        </Link>
      </div>
    </div>
  );
};

export default BlogListItem;
