import React from 'react';

import Footer from './footer';
import SEO from './seo';
import Header from './header';
import GlobalLayout from './globalLayout';
import Navigation from './navigation';
import LayoutFooter from './layoutFooter';
import LayoutHeader from './layoutHeader';

const PageLayout = ({ children, i18n, link, wide }) => {
  return (
    <GlobalLayout>
      <SEO {...i18n} />
      <Navigation />
      <div id="wrapper" className={`page ${wide ? 'wide' : ''}`}>
        <Header link={link} />
        <div className="layout-container">
          <div className="layout-content">
            <section>
              <LayoutHeader i18n={i18n} />
            </section>
            {children}
            <section>
              <LayoutFooter i18n={i18n} />
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </GlobalLayout>
  );
};

export default PageLayout;
