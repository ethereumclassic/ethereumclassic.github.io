/* eslint-disable no-underscore-dangle */
import React from 'react';

import NewsLayout from '~components/newsLayout';

const Media = ({ pageContext }) => {
  return <NewsLayout {...pageContext} currentPage="media" />;
};

export default Media;
