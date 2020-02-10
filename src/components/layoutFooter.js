import React from 'react';

import License from './license';
import Contribute from './contribute';

const LayoutFooter = ({ i18n: { license, contribute } }) => {
  if (!license && !contribute) {
    return null;
  }
  return (
    <div className="layout-footer">
      <License license={license} />
      <Contribute contribute={contribute} />
    </div>
  );
};

export default LayoutFooter;
