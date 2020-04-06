import React from 'react';

import Translate from './translate';

const Disclaimer = ({ disclaimer }) => {
  if (!disclaimer) {
    return null;
  }
  return (
    <div className="disclaimer tip">
      <span role="img">⚠️ </span>
      <Translate text="disclaimer" />
    </div>
  );
};

export default Disclaimer;
