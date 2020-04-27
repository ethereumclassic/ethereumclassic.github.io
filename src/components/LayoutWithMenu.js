import React from 'react';

import MainMenu from './MainMenu';
import Footer from './Footer';

const LayoutWithMenu = props => {
  const { children, pageContext, className } = props;
  return (
    <>
      <div id="wrapper" className={className}>
        <MainMenu {...pageContext} />
        {children}
        <Footer {...pageContext} />
      </div>
    </>
  );
};

export default LayoutWithMenu;
