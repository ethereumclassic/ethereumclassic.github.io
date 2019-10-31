import React from 'react';
import Mdx from '~components/mdx';
import Grid from '~components/grid';

import PageLayout from '../layouts/pageLayout';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout seo={{ title: 'Participants' }} wide>
      <section>
        <Mdx code={i18n.mdx.intro} />
      </section>
      <Grid itemWidth={200} semi wide>
        <Mdx code={i18n.mdx.individuals} />
      </Grid>
      <section>
        <Mdx code={i18n.mdx.organisations} />
      </section>
    </PageLayout>
  );
};

export default Teams;
