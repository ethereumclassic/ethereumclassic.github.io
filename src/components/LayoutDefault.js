import React from 'react';

import LayoutPage from './LayoutPage';
import CommonContent from './CommonContent';

const LayoutDefault = props => {
  const {
    pageContext: { i18n }
  } = props;
  return (
    <LayoutPage {...props}>
      <CommonContent content={i18n.content} refs={i18n} />
    </LayoutPage>
  );
};

export default LayoutDefault;
