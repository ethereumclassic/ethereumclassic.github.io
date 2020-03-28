import React from 'react';

import Disclaimer from './disclaimer';

const LayoutHeader = ({ i18n: { disclaimer } }) => {
  if (!disclaimer) {
    return null;
  }
  return (
    <div className="layout-header">
      <Disclaimer disclaimer={disclaimer} />
    </div>
  );
};

export default LayoutHeader;
