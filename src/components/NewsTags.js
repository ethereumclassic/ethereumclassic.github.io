/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import ButtonsGroup from './ButtonsGroup';

const NewsTags = ({
  allTags,
  relativePath,
  filterType,
  filter,
  i18n: {
    globals: { news }
  }
}) => {
  const [showing, setShowing] = useState(false);
  const selected = filterType === 'tag';
  return (
    <div className="news-tags">
      <div className={`button-link ${selected && 'selected'}`} onClick={() => setShowing(!showing)}>
        {selected && filter ? news.tags[filter] || filter : news.filterTag}
        <i className="fas fa-angle-down right" />
      </div>
      <div className={`tags ${!showing && 'hidden'}`}>
        <ButtonsGroup
          items={allTags.map(t => ({
            key: t,
            to: `/${relativePath}/tag/${t}`,
            name: news.tags[t],
            className: t === filter && 'selected'
          }))}
        />
      </div>
    </div>
  );
};

export default NewsTags;
