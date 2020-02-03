import React from 'react';

import html from '../i18n/html';

import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';

const Education = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout seo={i18n}>
      <SubMenu items={i18n.yaml.menu} />
      {html(i18n.intro)}
      {html(i18n.philosophy)}
      {html(i18n.usingEtc)}
      {html(i18n.faqs)}
      {html(i18n.developers)}
    </PageLayout>
  );
};

export default Education;
