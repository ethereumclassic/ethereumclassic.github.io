import React from 'react';

import PageLayout from '~components/pageLayout';
import EducationMenu from '~components/educationMenu';
import Mdx from '~components/mdx';

const Education = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout
      seo={{
        title: 'Knowledge Base',
        description: 'Guides and explainers about various Ethereum Classic tools and concepts'
      }}
    >
      <Mdx code={i18n.mdx.education} />
      <EducationMenu />
    </PageLayout>
  );
};

export default Education;
