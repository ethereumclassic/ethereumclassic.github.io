import React from 'react';

import PageLayout from '~components/pageLayout';
import Mdx from '~components/mdx';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout
      seo={{ title: 'Teams', description: 'Major organizations contributing to Etheruem Classic' }}
      wide
    >
      <section>
        <Mdx code={i18n.mdx.intro} />
      </section>
      <section>
        <Mdx code={i18n.mdx.organisations} />
      </section>
      {/* 
      TEAM GRID: Removed for now
      <Grid itemWidth={200} semi wide>
        <Mdx code={i18n.mdx.individuals} />
      </Grid> 
      */}
    </PageLayout>
  );
};

export default Teams;
