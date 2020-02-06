import React from 'react';

import BackButton from './backButton';
import PageLayout from './pageLayout';
import SubMenu from './subMenu';

const SubPageLayout = ({ i18n, children, ...props }) => {
  const { title, description, menu, globals = {} } = i18n;
  const { backLinkTo, sectionTitle, backLinkText } = globals;
  const { wide } = props;
  const layoutLink = backLinkTo && {
    to: backLinkTo,
    text: sectionTitle
  };
  const backLink = backLinkTo && <BackButton text={backLinkText || sectionTitle} to={backLinkTo} />;
  const footer = (
    <>
      {(menu || backLinkTo) && <hr />}
      {menu && <SubMenu items={menu} />}
      {backLink}
    </>
  );
  return (
    <PageLayout link={layoutLink} seo={{ title, description }} {...props}>
      {wide ? <section>{backLink}</section> : backLink}
      {children}
      {wide ? <section>{footer}</section> : footer}
    </PageLayout>
  );
};

export default SubPageLayout;
