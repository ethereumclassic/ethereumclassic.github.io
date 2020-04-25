import React from 'react';

import LayoutPage from './LayoutPage';
import Json from './Json';
import NewsMenu from './NewsMenu.js';

const LayoutMarkdown = props => {
  const {
    data,
    pageContext,
    pageContext: { i18n, ...rest }
  } = props;
  return (
    <LayoutPage {...props}>
      <NewsMenu {...pageContext} />
      {JSON.stringify(rest)}
      <Json {...data} />
    </LayoutPage>
  );
};

export default LayoutMarkdown;
