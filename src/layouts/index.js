import React from "react";
import { Location } from '@reach/router'

import '../assets/sass/main.scss'

import withI18next from "../i18n/withI18next";

import Footer from '../components/footer';
import Navigation from '../components/navigation';

class Index extends React.Component {

  render() {
    const { children, path, pageContext: { locale } } = this.props;
        const isHomePage = (path === `/${locale}/`) || path == '/';
    const wrapperClass = isHomePage ? 'home' : 'page';

    return (
      <>
        <Navigation />
        <div id="wrapper" className={wrapperClass}>
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
