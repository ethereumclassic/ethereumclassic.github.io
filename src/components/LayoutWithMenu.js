import React from 'react';

import LayoutGlobal from './LayoutGlobal';
import MainMenu from './MainMenu';

const LayoutWithMenu = props => {
  const { children, pageContext, className } = props;
  return (
    <LayoutGlobal {...props}>
      <div id="wrapper" className={className}>
        <MainMenu {...pageContext} />
        {children}
      </div>
    </LayoutGlobal>
  );
};

export default LayoutWithMenu;
