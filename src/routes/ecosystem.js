// TODO replace with i18n
import React from 'react';

import PageLayout from '~components/pageLayout';
import Dapps from '~components/dapps';
import Mdx from '~components/mdx';
import Grid from '~components/grid';
import Resources from '~components/resources';
import ButtonLink from '~components/buttonLink';
import MajorProjects from '~components/majorProjects';

const Ecosystem = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout
      wide
      seo={{ title: 'Ecosystem', description: 'Projects and resources on Etheruem Classic' }}
    >
      <section>
        <Mdx code={i18n.mdx.intro} />
        <h2>Major Projects</h2>
        <MajorProjects i18n={i18n} />
      </section>
      <Dapps />
      <section>
        <h2>Resources</h2>
        <p>
          A small selection of resources such as explorers, chat rooms, exchanges and mining pools.
          <br />
          <b>Use at your own risk.</b>
        </p>
        <p>
          <ButtonLink
            text="More Resourecs"
            to="https://github.com/ethereumclassic/Awesome-ETC"
            icon="external-link-alt"
          />
        </p>
      </section>
      <Grid itemWidth={360} className="semi">
        <Resources />
      </Grid>
    </PageLayout>
  );
};

export default Ecosystem;
