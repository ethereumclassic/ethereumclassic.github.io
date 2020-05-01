import React from 'react';

import MainMenu from './MainMenu';
import Footer from './Footer';
import Seo from './Seo';

const LayoutWithMenu = props => {
  const { children, pageContext, data, className } = props;
  return (
    <>
      <Seo {...pageContext} data={data} />
      <div id="wrapper" className={className}>
        <MainMenu {...pageContext} />
        {children}
        <Footer {...pageContext} />
      </div>
    </>
  );
};

export default LayoutWithMenu;
