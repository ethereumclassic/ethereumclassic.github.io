// TODO replace with i18n
import React from 'react';

import PageLayout from '../layouts/pageLayout';

import Dapps from '~components/dapps';
import Mdx from '~components/mdx';
import ResourcesCommunity from '~components/resourcesCommunity';
import ResourcesTechnical from '~components/resourcesTechnical';
import ResourcesServices from '~components/resourcesServices';

const Ecosystem = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout wide seo={{ title: 'Ecosystem' }}>
      <section>
        <Mdx code={i18n.mdx.intro} />
      </section>
      <Dapps />
      <ResourcesCommunity />
      <ResourcesTechnical />
      <ResourcesServices />
    </PageLayout>
  );
};

export default Ecosystem;
