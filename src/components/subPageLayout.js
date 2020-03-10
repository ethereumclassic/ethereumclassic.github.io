import React from 'react';

import BackButton from './backButton';
import PageLayout from './pageLayout';
import SubMenu from './subMenu';

import html from '../i18n/html';

function contain(element, wide) {
  return wide ? <section>{element}</section> : element;
}

const SubPageLayout = ({ children, ...props }) => {
  const { i18n } = props;
  const { yaml = {} } = i18n;
  const isParent = yaml.menu;
  const menu = i18n.menu || yaml.menu;
  const globals = i18n.globals || yaml.globals;
  const { backLinkTo, sectionTitle, backLinkText } = globals;
  const { wide } = props;
  const layoutLink = backLinkTo && {
    to: backLinkTo,
    text: sectionTitle
  };
  const backLink = backLinkTo && <BackButton text={backLinkText || sectionTitle} to={backLinkTo} />;
  return (
    <PageLayout {...props} link={layoutLink}>
      {isParent ? 'TOP' : 'SUB'}
      {i18n.intro && contain(html(i18n.intro), wide)}
      {children}
      {contain(
        <>
          {!isParent && (menu || backLinkTo) && <hr />}
          {menu && <SubMenu items={menu} />}
          {!isParent && backLink}
        </>,
        wide
      )}
    </PageLayout>
  );
};

export default SubPageLayout;
