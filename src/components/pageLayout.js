import React from 'react';

import Footer from './footer';
import SEO from './seo';
import Header from './header';
import GlobalLayout from './globalLayout';
import Navigation from './navigation';

const PageLayout = ({ children, seo, link, wide }) => {
  return (
    <GlobalLayout>
      <SEO {...seo} />
      <Navigation />
      <div id="wrapper" className={`page ${wide ? 'wide' : ''}`}>
        <Header link={link} />
        <div className="layout-container">
          <div className="layout-content">{children}</div>
        </div>
        <Footer />
      </div>
    </GlobalLayout>
  );
};

export default PageLayout;
