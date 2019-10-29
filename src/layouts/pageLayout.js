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
        <div className="layout-container">
          <div className="layout-content">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
