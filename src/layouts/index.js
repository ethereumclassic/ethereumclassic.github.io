import React from 'react';
import Helmet from 'react-helmet';

import '../assets/sass/main.scss';

import withI18next from '../i18n/withI18next';

import Footer from '~components/footer';
import Navigation from '~components/navigation';
import Header from '~components/header';
import LocalizedLink from '~components/localizedLink';

const Index = props => {
  const {
    children,
    location: { pathname },
    pageContext: { locale }
  } = props;
  // TODO do this somewhere else
  const rawPath = pathname.startsWith(`/${locale}/`)
    ? pathname.replace(`${locale}/`, '')
    : pathname;
  const isHomePage = rawPath === '/' || rawPath === '';
  const isBlog = rawPath.startsWith('/blog');
  const wrapperClass = isHomePage ? 'home' : 'page';
  return (
    <>
      <Helmet>
        <title>Ethereum Classic</title>
      </Helmet>
      <Navigation />
      <div id="wrapper" className={wrapperClass}>
        {!isHomePage && <Header extra={isBlog && <LocalizedLink to="/blog">Blog</LocalizedLink>} />}
        <div id="layout-content">
          <div id="layout-container">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default withI18next()(Index);
