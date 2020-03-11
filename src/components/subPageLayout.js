import React from 'react';

import BackButton from './backButton';
import PageLayout from './pageLayout';
import SubMenu from './subMenu';

import html from '../i18n/html';
import ButtonLink from './buttonLink';
import Grid from './grid';

const SubPageLayout = ({ children, ...props }) => {
  const { i18n } = props;
  const { yaml = {} } = i18n;
  const isParent = yaml.menu;
  const menu = i18n.menu || yaml.menu;
  const globals = i18n.globals || yaml.globals;
  const { backLinkTo, sectionTitle, backLinkText } = globals;
  const layoutLink = backLinkTo && {
    to: backLinkTo,
    text: sectionTitle
  };
  const selectedItem = menu.find(i => i.selected);
  const nextItem = selectedItem ? menu[selectedItem.i + 1] : menu[0];
  const previousItem = selectedItem && menu[selectedItem.i - 1];
  const nextLink = nextItem && <ButtonLink to={nextItem.link} text={nextItem.text} next />;
  const previousLink = previousItem && (
    <ButtonLink to={previousItem.link} text={previousItem.text} back />
  );
  const backLink = backLinkTo && <BackButton text={backLinkText || sectionTitle} to={backLinkTo} />;
  const paginationMenu = !globals.hideNavigation && !isParent && (previousLink || nextLink) && (
    <div>
      <Grid>
        <div>{previousLink}</div>
        <div className="text-right">{nextLink}</div>
      </Grid>
    </div>
  );
  const footerMenu = menu && (
    <div>
      {!isParent && (menu || backLinkTo) && <hr />}
      {paginationMenu}
      {menu && <SubMenu items={menu} />}
      {!isParent && backLink}
    </div>
  );
  return (
    <PageLayout {...props} link={layoutLink} header={paginationMenu} footer={footerMenu}>
      {i18n.intro && <section className="intro contained">{html(i18n.intro)}</section>}
      {children}
    </PageLayout>
  );
};

export default SubPageLayout;
