import React from 'react';

import renderMarkdown from '~components/renderMarkdown';
import ButtonLink from '~components/buttonLink';
import LocaleVisibility from '~components/localeVisibility';
import PageLayout from '~components/pageLayout';

import NewsListItem from '~components/newsListItem';
import NewsPagination from '~components/newsPagination';
import NewsTagsFilter from '~components/newsTagsFilter';
import NewsYearsFilter from '~components/newsYearsFilter';
import MediaListItem from '~components/mediaListItem';

const NewsLayout = ({ i18n, globals, rssLink, currentPage, pagination = {} }) => {
  const menu = [
    { key: 'news', to: '/news', name: globals.blogNavAll },
    { key: 'blog', to: '/blog', name: globals.blogNavBlog },
    { key: 'media', to: '/news/media', name: globals.blogNavMedia }
  ].map(i => ({ ...i, selected: i.key === currentPage }));
  const thisItem = menu.find(i => i.selected);
  const { items = [] } = pagination;
  return (
    <PageLayout i18n={i18n}>
      <div className="nudge-up spacer merged-buttons">
        {menu.map(item => (
          <ButtonLink text={item.name} to={item.to} className={`${item.selected && 'selected'}`} />
        ))}
      </div>
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
      <LocaleVisibility hide={['en']}>
        <ButtonLink
          notLocalized
          to={thisItem.to}
          text={i18n.englishItems}
          style={{ float: 'right' }}
        />
      </LocaleVisibility>
      <div>
        <NewsYearsFilter i18n={globals} pagination={pagination} />
        <NewsTagsFilter i18n={globals} pagination={pagination} />
        <div className="clear" />
      </div>
      {items.length ? (
        <div>
          <NewsPagination i18n={globals} pagination={pagination} noScroll expanded />
          <div className="blog-container">
            {items.map(i =>
              i.isMdx ? <NewsListItem {...i} i18n={globals} /> : <MediaListItem {...i} />
            )}
          </div>
          <NewsPagination i18n={globals} pagination={pagination} />
        </div>
      ) : (
        <h2>{globals.noPosts}</h2>
      )}
    </PageLayout>
  );
};

export default NewsLayout;
