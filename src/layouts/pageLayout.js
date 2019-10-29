import React from 'react';

import Footer from '~components/footer';
import Navigation from '~components/navigation';
import Header from '~components/header';

const PageLayout = ({ children, headerExtra }) => {
  return (
    <>
      <Navigation />
      <div id="wrapper" className="page">
        <Header extra={headerExtra} />
        <div id="layout-content">
          <div id="layout-container">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
