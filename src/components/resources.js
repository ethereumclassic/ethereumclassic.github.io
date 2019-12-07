import React from 'react';

import html from '../i18n/html';

import Grid from './grid';
import ResourcesList from './resourcesList';
import ButtonLink from './buttonLink';

const resources = ({ i18n }) => {
  return (
    <>
      <section>
        {html(i18n.resources)}
        <ButtonLink
          text={i18n.moreResources}
          to="https://github.com/ethereumclassic/Awesome-ETC"
          icon="external-link-alt"
        />
      </section>
      <Grid itemWidth={360} className="semi">
        <ResourcesList i18n={i18n} />
      </Grid>
    </>
  );
};

export default resources;
