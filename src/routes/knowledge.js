import React from 'react';
import EducationMenu from '~components/educationMenu';
import Mdx from '~components/mdx';

import PageLayout from '../layouts/pageLayout';

const Education = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout seo={{ title: 'Knowledge Base' }}>
      <Mdx code={i18n.mdx.education} />
      <EducationMenu />
    </PageLayout>
  );
};

export default Education;
