import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import LinkGroup from '~components/linkGroup';

const Investor = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <LinkGroup items={i18n.yaml.resources} />
    </SubPageLayout>
  );
};

export default Investor;
