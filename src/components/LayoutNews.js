import React from 'react';

import LayoutPage from './LayoutPage';
import Json from './Json';

const LayoutMarkdown = props => {
  const { data } = props;
  return (
    <LayoutPage {...props}>
      NEWS
      <Json {...data} />
    </LayoutPage>
  );
};

export default LayoutMarkdown;
