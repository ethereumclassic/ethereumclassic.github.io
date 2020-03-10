/* eslint-disable no-underscore-dangle */
import React from 'react';

import NewsLayout from '~components/newsLayout';
import MediaListItem from '~components/mediaListItem';

const Media = ({ pageContext: { i18n, globals } }) => {
  const items = i18n.media.filter(i => i._localized);
  return (
    <NewsLayout i18n={i18n} globals={globals} hasItems={items.length > 0} currentPage="media">
      {i18n.media
        .filter(i => i._localized)
        .map(i => (
          <MediaListItem {...i} />
        ))}
    </NewsLayout>
  );
};

export default Media;
