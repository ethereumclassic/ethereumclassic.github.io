import React from 'react';

import SEO from '~components/seo';
import Footer from '~components/footer';
import Navigation from '~components/navigation';
import Header from '~components/header';

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
