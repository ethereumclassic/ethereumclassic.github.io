import React from 'react';
import Mdx from '~components/mdx';
import Grid from '~components/grid';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <>
      <Mdx code={i18n.mdx.intro} />
      <Grid columns={3}>
        <Mdx code={i18n.mdx.individuals} />
      </Grid>
      <Mdx code={i18n.mdx.organisations} />
    </>
  );
};

export default Teams;
