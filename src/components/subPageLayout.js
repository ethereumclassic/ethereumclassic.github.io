import React from 'react';

import BackButton from './backButton';
import PageLayout from './pageLayout';
import Spacer from './spacer';
import SubMenu from './subMenu';

const SubPageLayout = ({ i18n, children, ...props }) => {
  const { title, description, menu, globals = {} } = i18n;
  const { backLinkTo, sectionTitle, backLinkText } = globals;
  const layoutLink = backLinkTo && {
    to: backLinkTo,
    text: sectionTitle
  };
  const backLink = backLinkTo && <BackButton text={backLinkText || sectionTitle} to={backLinkTo} />;

  return (
    <PageLayout link={layoutLink} seo={{ title, description }} {...props}>
      {backLink}
      {backLinkTo && <Spacer />}
      {children}
      {(menu || backLinkTo) && <hr />}
      {menu && <SubMenu items={menu} />}
      {backLink}
    </PageLayout>
  );
};

export default SubPageLayout;
