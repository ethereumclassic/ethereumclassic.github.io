import React from 'react';

import LayoutWithMenu from './LayoutWithMenu';
import SectionMenu from './SectionMenu';
import PageHeader from './PageHeader';
import Link from './Link';

import Md from './Markdown';
import LicenseTip from './LicenseTip';

const LayoutPage = props => {
  const {
    children,
    pageContext,
    pageContext: { relativePath, i18n },
    className,
    noIntro
  } = props;
  const {
    globals: { section = {}, ui = {} }
  } = i18n;
  const isIndex = section.root === `/${relativePath}`;
  return (
    <LayoutWithMenu {...props} className={`page ${className || ''}`}>
      <PageHeader {...pageContext} />
      <div className="contents">
        <div className="contained">
          <div className="content-header">
            <SectionMenu {...pageContext} slim />
            {i18n.disclaimer && (
              <div className="tip">
                <i className="info fas fa-exclamation-triangle" />
                {'  '}
                {ui.disclaimer}
              </div>
            )}
          </div>
          {!noIntro && (i18n.title || i18n.intro) && (
            <div className="intro">
              <h1>{i18n.title}</h1>
              <Md>{i18n.intro}</Md>
            </div>
          )}
          {children}
          <div className="content-footer">
            <LicenseTip i18n={i18n} />
            {i18n.contribute && (
              <div className="tip">
                <Md unwrap>{ui.contribute}</Md>
              </div>
            )}
            <SectionMenu {...pageContext} />
            {!isIndex && section.root && (
              <Link button to={section.root} back icon="home">
                {section.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </LayoutWithMenu>
  );
};

export default LayoutPage;
