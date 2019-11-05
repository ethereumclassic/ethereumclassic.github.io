// TODO replace with i18n
import React from 'react';

import PageLayout from '../layouts/pageLayout';

import Dapps from '~components/dapps';
import ResourcesCommunity from '~components/resourcesCommunity';
import ResourcesTechnical from '~components/resourcesTechnical';
import ResourcesServices from '~components/resourcesServices';

const Ecosystem = () => {
  return (
    <PageLayout wide seo={{ title: 'Ecosystem' }}>
      <section>
        <h1>Ecosystem</h1>
        <h3>Lorem ipsum dolor sit</h3>
        <p>Links are not endorsements!</p>
      </section>
      <ResourcesCommunity />
      <ResourcesTechnical />
      <Dapps />
      <ResourcesServices />
    </PageLayout>
  );
};

export default Ecosystem;
