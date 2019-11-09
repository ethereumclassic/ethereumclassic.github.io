import React from 'react';

import SEO from './seo';
import Footer from './footer';
import Navigation from './navigation';
import Header from './header';

const PageLayout = ({ children, link, seo, wide }) => {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <div id="wrapper" className={`page ${wide ? 'wide' : ''}`}>
        <Header link={link} />
        <div className="layout-container">
          <div className="layout-content">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
