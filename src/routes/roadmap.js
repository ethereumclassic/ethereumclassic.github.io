// TODO replace with i18n
import React from 'react';

import Mdx from '~components/mdx';
import MajorProjects from '~components/majorProjects';
import Road from '~components/road';
import Timeline from '~components/timeline';
import PageLayout from '~components/pageLayout';

const Roadmap = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout
      wide
      seo={{ title: i18n.json.roadmap.title, description: i18n.json.roadmap.description }}
    >
      <section>
        <Mdx code={i18n.mdx.intro} />
      </section>
      <Timeline />
      <section>
        <Mdx code={i18n.mdx.roadmap} />
        <Road />
        <h2>Major Projects</h2>
        <MajorProjects i18n={i18n} />
      </section>
    </PageLayout>
  );
};

export default Roadmap;
