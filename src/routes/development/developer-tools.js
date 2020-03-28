import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import ButtonGroup from '~components/buttonGroup';
import LinkGroup from '~components/linkGroup';

const DeveloperTools = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.clients)}
      <ButtonGroup header={html(i18n.paymentProcessors)} items={i18n.yaml.processors} />
      <LinkGroup header={html(i18n.tooling)} items={i18n.yaml.tools} />
    </SubPageLayout>
  );
};

export default DeveloperTools;
