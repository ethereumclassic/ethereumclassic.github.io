import React from 'react';

import html from '../i18n/html';

import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';

const Ecosystem = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout i18n={i18n}>
      <SubMenu i18n={i18n} />
      {html(i18n.intro)}
    </PageLayout>
  );
};

export default Ecosystem;
