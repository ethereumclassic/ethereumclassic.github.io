// TODO replace with i18n
import React from 'react';

import html from '../i18n/html';

import Road from '~components/road';
import Timeline from '~components/timeline';
import PageLayout from '~components/pageLayout';

const Roadmap = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout wide>
      <section>
        {html(i18n.intro)}
        {html(i18n.timeline)}
      </section>
      <Timeline i18n={i18n} items={i18n.yaml.timeline} />
      <section>
        {html(i18n.developmentPlans)}
        <Road i18n={i18n.yaml.road} />
      </section>
    </PageLayout>
  );
};

export default Roadmap;
