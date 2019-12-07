import React from 'react';

import html from '../i18n/html';

import PageLayout from '~components/pageLayout';
import Dapps from '~components/dapps';
import Resources from '~components/resources';
import MajorProjects from '~components/majorProjects';

const Ecosystem = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout wide seo={i18n}>
      <section>
        {html(i18n.intro)}
        <MajorProjects i18n={i18n} />
      </section>
      <Dapps i18n={i18n} dapps={i18n.yaml.dapps} />
      <Resources i18n={i18n} />
    </PageLayout>
  );
};

export default Ecosystem;
