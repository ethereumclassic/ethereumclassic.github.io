import React from 'react';

import html from '../i18n/html';

import PageLayout from '~components/pageLayout';
import Dapps from '~components/dapps';
import Resources from '~components/resources';
import MajorProjects from '~components/majorProjects';
import SubMenu from '~components/subMenu';

const Ecosystem = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout wide seo={i18n}>
      <section>
        <SubMenu i18n={i18n} />
        TODO: move this stuff to the individual pages
      </section>
      <section>{html(i18n.intro)}</section>
      <MajorProjects i18n={i18n} />
      <Dapps i18n={i18n} dapps={i18n.yaml.dapps} />
      <Resources i18n={i18n} />
    </PageLayout>
  );
};

export default Ecosystem;
