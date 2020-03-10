import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import LinkGroup from '~components/linkGroup';

const Guides = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <LinkGroup header={html(i18n.intro)} items={i18n.yaml.items} />
    </SubPageLayout>
  );
};

export default Guides;
