import React from 'react';

import LayoutWithMenu from './LayoutWithMenu';
import SectionMenu from './SectionMenu';
import PageHeader from './PageHeader';

import Md from './Markdown';

const LayoutPage = props => {
  const {
    children,
    pageContext,
    pageContext: { i18n },
    className
  } = props;
  return (
    <LayoutWithMenu {...props} className={`page ${className || ''}`}>
      <PageHeader {...pageContext} />
      <div className="contents">
        <div className="contained">
          <SectionMenu {...pageContext} slim />
          <div className="intro">
            <h1>{i18n.title}</h1>
            <Md>{i18n.intro}</Md>
          </div>
          {children}
          <SectionMenu {...pageContext} />
        </div>
      </div>
    </LayoutWithMenu>
  );
};

export default LayoutPage;
