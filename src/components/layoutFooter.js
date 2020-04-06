import React from 'react';

import License from './license';
import Contribute from './contribute';

const LayoutFooter = ({ i18n: { license, contribute } }) => {
  if (!license && !contribute) {
    return null;
  }
  return (
    <>
      <License license={license} />
      <Contribute contribute={contribute} />
    </>
  );
};

export default LayoutFooter;
