import React from 'react';

import LayoutWithMenu from '../components/LayoutWithMenu';

import HomeBanner from '../components/HomeBanner';
import HomeIconGrid from '../components/HomeIconGrid';
import HomeStayCurrent from '../components/HomeStayCurrent';
import HomeSplit from '../components/HomeSplit';
import HomePlain from '../components/HomePlain';

const components = {
  banner: HomeBanner,
  split: HomeSplit,
  iconGrid: HomeIconGrid,
  plain: HomePlain,
  stayCurrent: HomeStayCurrent
};

const IndexTemplate = props => {
  const {
    pageContext: { i18n }
  } = props;
  return (
    <LayoutWithMenu {...props}>
      {i18n.content.map(item => {
        const Component = components[item.type];
        return <Component key={item.key} data={item} i18n={i18n} />;
      })}
    </LayoutWithMenu>
  );
};

export default IndexTemplate;
