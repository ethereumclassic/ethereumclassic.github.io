import React from 'react';

import Json from './Json';

const NewsFilters = ({ i18n, ...rest }) => {
  return (
    <div>
      <Json {...rest} />
    </div>
  );
};

export default NewsFilters;
