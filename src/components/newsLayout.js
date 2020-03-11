import React from 'react';

import html from '../i18n/html';
import ButtonLink from '~components/buttonLink';
import LocaleVisibility from '~components/localeVisibility';
import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';

// TODO convert to i18n and use currentpage
const tempMenu = [
  { key: 'news', to: '/news', name: 'All News' },
  { key: 'blog', to: '/blog', name: 'Blog Articles' },
  { key: 'media', to: '/news/media', name: 'Meida Links' }
];

const NewsLayout = ({ i18n, globals, rssLink, currentPage, children, hasItems }) => {
  const menu = tempMenu.map(i => ({ ...i, selected: i.key === currentPage }));
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
