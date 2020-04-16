import React from 'react';

import BackButton from './backButton';
import PageLayout from './pageLayout';
import SubMenu from './subMenu';

import renderMarkdown from './renderMarkdown';
import ButtonLink from './buttonLink';
import Translate from './translate';

// TODO seriously refactor this

function renderPagination({ previousLink, nextLink, nextText, className }) {
  return (
    <div className={`pagination ${className || ''}`}>
      <div>{previousLink}</div>
      <div className="text-right">
        {nextLink && nextText && (
          <small>
            <Translate text="continueReading" />
            {': '}
          </small>
        )}
        {nextLink}
      </div>
    </div>
  );
}

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
  const showPagination = !globals.hideNavigation && !isParent;
  const selectedItem = menu.find(i => i.selected);
  const nextItem = selectedItem ? menu[selectedItem.i + 1] : menu[0];
  const previousItem = selectedItem && menu[selectedItem.i - 1];
  const nextLink = nextItem && <ButtonLink to={nextItem.link} text={nextItem.name} next />;
  const previousLink = previousItem && (
    <ButtonLink to={previousItem.link} text={previousItem.name} back />
  );
  const backLink = backLinkTo && (
    <BackButton text={backLinkText || sectionTitle} to={backLinkTo} icon="home" />
  );
  const footerMenu = menu && (
    <>
      {!isParent && <hr />}
      {showPagination && renderPagination({ previousLink, nextLink, nextText: true })}
      {!isParent && (
        <h2 className="learn-more">
          <Translate text="learnMore" />
          {': '}
          <small>{sectionTitle}</small>
        </h2>
      )}
      {menu && <SubMenu items={menu} expanded={isParent} />}
      {!isParent && backLink}
    </>
  );
  return (
    <PageLayout
      {...props}
      link={layoutLink}
      header={showPagination && renderPagination({ previousLink, nextLink })}
      footer={footerMenu}
    >
      {i18n.intro && <section className="intro">{renderMarkdown(i18n.intro)}</section>}
      {children}
    </PageLayout>
  );
};

export default SubPageLayout;
