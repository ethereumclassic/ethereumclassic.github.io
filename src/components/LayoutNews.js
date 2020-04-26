import React from 'react';

import LayoutPage from './LayoutPage';
import Json from './Json';
import NewsMenu from './NewsMenu.js';
import NewsItems from './NewsItems';

const LayoutMarkdown = props => {
  const {
    data,
    pageContext,
    pageContext: { i18n, ...rest }
  } = props;
  return (
    <LayoutPage {...props}>
      <NewsMenu {...pageContext} />
      <NewsItems items={data.items.nodes} />
    </LayoutPage>
  );
};

export default LayoutMarkdown;
