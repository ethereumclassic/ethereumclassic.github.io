// TODO replace with i18n
import React from 'react';

import PageLayout from '../layouts/pageLayout';

import Dapps from '~components/dapps';
import Resources from '~components/resources';

const Ecosystem = () => {
  return (
    <PageLayout wide seo={{ title: 'Ecosystem' }}>
      <section>
        <h1>Ecosystem</h1>
        <h3>Lorem ipsum dolor sit</h3>
        <p>Links are not endorsements!</p>
      </section>
      <Dapps />
      <Resources />
    </PageLayout>
  );
};

export default Ecosystem;
