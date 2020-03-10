import React from 'react';

import Translate from './translate';

const Contribute = ({ contribute }) => {
  if (!contribute) {
    return null;
  }
  return (
    <div className="contribute">
      <Translate text="contribute" />
    </div>
  );
};

export default Contribute;
