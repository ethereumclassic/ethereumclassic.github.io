import React from 'react';

import html from '../i18n/html';
import ButtonLink from '~components/buttonLink';
import LocaleVisibility from '~components/localeVisibility';
import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';

const NewsLayout = ({ i18n, globals, rssLink, currentPage, children, hasItems }) => {
  const menu = [
    { key: 'news', to: '/news', name: globals.blogNavAll },
    { key: 'blog', to: '/blog', name: globals.blogNavBlog },
    { key: 'media', to: '/news/media', name: globals.blogNavMedia }
  ].map(i => ({ ...i, selected: i.key === currentPage }));
  const thisItem = menu.find(i => i.selected);
  return (
    <PageLayout i18n={i18n}>
      <div style={{ float: 'right' }}>
        <ButtonLink
          text={i18n.submit}
          to="https://github.com/ethereumclassic/ethereumclassic.github.io"
          icon="angle-right"
        />
        {rssLink && (
          <LocaleVisibility show={['en']}>
            <ButtonLink text={globals.rssFeed} to={rssLink} icon="rss" />
          </LocaleVisibility>
        )}
      </div>
      {html(i18n.intro)}
      <SubMenu items={menu} selected={currentPage} tabs />
      <LocaleVisibility hide={['en']}>
        <ButtonLink
          notLocalized
          to={thisItem.to}
          text={i18n.englishItems}
          style={{ float: 'right' }}
        />
      </LocaleVisibility>
      <h2>{hasItems ? i18n.latestItems : globals.noPosts}</h2>
      {children}
    </PageLayout>
  );
};

export default NewsLayout;
