import React from 'react';

import SubPageLayout from '~components/subPageLayout';
import LinkGroup from '~components/linkGroup';

const Guides = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <LinkGroup items={i18n.yaml.items} />
    </SubPageLayout>
  );
};

export default Guides;
