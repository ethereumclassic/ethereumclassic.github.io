import React from 'react';

import PageLayout from '~components/pageLayout';
import ButtonLink from '~components/buttonLink';

const Summit = () => {
  return (
    <PageLayout seo={{ title: 'Summit', description: 'Ethereum Classic Conference' }}>
      <h1>Summit</h1>
      <p>This page is under construction.</p>
      <ul>
        <li>
          <ButtonLink text="Summit 2019 Videos" to="/summit/2019" />
        </li>
        <li>
          <ButtonLink text="2019 Main Website" to="https://etcsummit.com/" />
        </li>
      </ul>
    </PageLayout>
  );
};

export default Summit;
