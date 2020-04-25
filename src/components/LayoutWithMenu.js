import React from 'react';

import LayoutGlobal from './LayoutGlobal';
import MainMenu from './MainMenu';
import SectionMenu from './SectionMenu';

const LayoutWithMenu = props => {
  const { children, pageContext } = props;
  return (
    <LayoutGlobal {...props}>
      <SectionMenu {...pageContext} />
      <MainMenu {...pageContext} />
      <hr />
      {children}
    </LayoutGlobal>
  );
};

export default LayoutWithMenu;
