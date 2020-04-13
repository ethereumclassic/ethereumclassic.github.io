import React from 'react';

import SubPageLayout from '~components/subPageLayout';
import LinkGroup from '~components/linkGroup';

const Guides = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <LinkGroup header={i18n.tutorialsIntro} items={i18n.yaml.tutorials} />
      <LinkGroup header={i18n.advancedIntro} items={i18n.yaml.advanced} />
    </SubPageLayout>
  );
};

export default Guides;
