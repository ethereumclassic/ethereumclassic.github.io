import React from 'react';

// import html from '../i18n/html';

import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';

const Ecosystem = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout wide i18n={i18n}>
      <section>
        <SubMenu i18n={i18n} />
        TODO
      </section>
    </PageLayout>
  );
};

export default Ecosystem;
