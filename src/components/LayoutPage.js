import React from 'react';

import LayoutWithMenu from './LayoutWithMenu';
import SectionMenu from './SectionMenu';
import PageHeader from './PageHeader';

import Md from './Markdown';
import LicenseTip from './LicenseTip';

const LayoutPage = props => {
  const {
    children,
    pageContext,
    pageContext: { i18n },
    className,
    noIntro
  } = props;
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
                {i18n.globals.ui.disclaimer}
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
            {i18n.contribute && (
              <div className="tip">
                <Md unwrap>{i18n.globals.ui.contribute}</Md>
              </div>
            )}
            <LicenseTip i18n={i18n} />
            <SectionMenu {...pageContext} />
          </div>
        </div>
      </div>
    </LayoutWithMenu>
  );
};

export default LayoutPage;
