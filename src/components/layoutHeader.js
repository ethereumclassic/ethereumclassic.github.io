import React from 'react';

import Disclaimer from './disclaimer';

const LayoutHeader = ({ i18n: { disclaimer } }) => {
  if (!disclaimer) {
    return null;
  }
  return (
    <>
      <Disclaimer disclaimer={disclaimer} />
    </>
  );
};

export default LayoutHeader;
