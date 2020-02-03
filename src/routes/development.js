import React from 'react';

import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';

const Development = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout seo={i18n}>
      <SubMenu items={i18n.yaml.menu} />
      TODO
    </PageLayout>
  );
};

export default Development;
