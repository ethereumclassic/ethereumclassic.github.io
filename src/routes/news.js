/* eslint-disable no-underscore-dangle */
import React from 'react';

import NewsLayout from '~components/newsLayout';

const News = ({ pageContext }) => {
  return <NewsLayout {...pageContext} currentPage="news" />;
};

export default News;
