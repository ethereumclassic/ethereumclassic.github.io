import React from 'react';

import html from '../i18n/html';

import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';

const Development = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout i18n={i18n}>
      <SubMenu items={i18n.yaml.menu} />
      {html(i18n.intro)}
    </PageLayout>
  );
};

export default Development;
