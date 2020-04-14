import React from 'react';

import renderMarkdown from '~components/renderMarkdown';
import ButtonLink from '~components/buttonLink';
import LocaleVisibility from '~components/localeVisibility';
import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';
import BlogListItem from '~components/blogListItem';
import BlogPagination from '~components/blogPagination';
import MediaListItem from '~components/mediaListItem';

const NewsLayout = ({ i18n, globals, rssLink, currentPage, pagination }) => {
  const menu = [
    { key: 'news', to: '/news', name: globals.blogNavAll },
    { key: 'blog', to: '/blog', name: globals.blogNavBlog },
    { key: 'media', to: '/news/media', name: globals.blogNavMedia }
  ].map(i => ({ ...i, selected: i.key === currentPage }));
  const thisItem = menu.find(i => i.selected);
  const { items = [], type } = pagination;
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
      {renderMarkdown(i18n.intro)}
      <SubMenu items={menu} selected={currentPage} tabs />
      <div className="tabs-child">
        <LocaleVisibility hide={['en']}>
          <ButtonLink
            notLocalized
            to={thisItem.to}
            text={i18n.englishItems}
            style={{ float: 'right' }}
          />
        </LocaleVisibility>
        <h2>{items.length ? i18n.latestItems : globals.noPosts}</h2>
        <BlogPagination i18n={globals} pagination={pagination} noScroll />
        {items.map(i =>
          i.isMdx ? <BlogListItem {...i} i18n={globals} /> : <MediaListItem {...i} />
        )}
        <BlogPagination i18n={globals} pagination={pagination} />
      </div>
    </PageLayout>
  );
};

export default NewsLayout;
