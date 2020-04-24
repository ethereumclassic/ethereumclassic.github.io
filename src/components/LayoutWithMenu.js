import React from 'react';

import LayoutGlobal from './LayoutGlobal';
import MainMenu from './MainMenu';
import Json from './Json';
import SectionMenu from './SectionMenu';

const LayoutWithMenu = props => {
  const { children, data, pageContext } = props;
  return (
    <LayoutGlobal {...props}>
      <SectionMenu {...pageContext} />
      <MainMenu {...pageContext} />
      <hr />
      {children}
      <hr />
      <Json pageContext={{ data, pageContext }} />
    </LayoutGlobal>
  );
};

export default LayoutWithMenu;
