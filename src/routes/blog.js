import React from 'react';

import NewsLayout from '~components/newsLayout';

const Blog = ({ pageContext }) => {
  return <NewsLayout {...pageContext} currentPage="blog" rssLink={'/rss.xml'} />;
};

export default Blog;
