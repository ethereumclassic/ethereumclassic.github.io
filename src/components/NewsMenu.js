import React from 'react';

import Json from './Json';

const NewsMenu = ({ i18n, ...rest }) => {
  return (
    <div>
      <Json {...rest} />
    </div>
  );
};

export default NewsMenu;
