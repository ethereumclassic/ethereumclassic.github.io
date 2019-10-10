import React from "react";

import '../assets/sass/main.scss'

import withI18next from "../i18n/withI18next";

import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import LocalizedLink from "components/LocalizedLink";

class Index extends React.Component {

  render() {
    const { children, path, pageContext: { locale } } = this.props;
    const rawPath = path.startsWith(`/${locale}/`) ? path.replace(`${locale}/`, '') : path;
    const isHomePage = rawPath === '/';
    const isBlog = rawPath.startsWith('/blog');
    const wrapperClass = isHomePage ? 'home' : 'page';
    console.log({ rawPath });
    return (
      <>
        <Navigation />
        <div id="wrapper" className={wrapperClass}>
          {!isHomePage && <Header extra={isBlog && <LocalizedLink to="/blog">Blog</LocalizedLink>} />}
          <div id="content">
            <div id="container">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}


export default withI18next()(Index);
