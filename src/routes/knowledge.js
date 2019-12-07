import React from 'react';

import html from '../i18n/html';

import PageLayout from '~components/pageLayout';

const Education = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout seo={i18n}>
      {html(i18n.intro)}
      {html(i18n.philosophy)}
      {html(i18n.usingEtc)}
      {html(i18n.faqs)}
      {html(i18n.developers)}
    </PageLayout>
  );
};

export default Education;
