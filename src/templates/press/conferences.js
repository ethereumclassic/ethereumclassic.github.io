import React from 'react';
import LayoutPage from '../../components/LayoutPage';
import CommonContent from '../../components/CommonContent';
import Menu from '../../components/Menu';

import { textToKey } from '../../utils';

const MediaKitTemplate = props => {
  const {
    pageContext: { i18n }
  } = props;
  return (
    <LayoutPage {...props}>
      <Menu
        list
        items={i18n.content.map(i => ({
          key: `${i.title}, ${i.subtitle}`,
          name: `${i.title}, ${i.subtitle}`,
          link: `#${textToKey(i.title)}`
        }))}
      />
      <CommonContent content={i18n.content} />
    </LayoutPage>
  );
};

export default MediaKitTemplate;
