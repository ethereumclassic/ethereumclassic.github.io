import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import MultiLinkGroup from '~components/multiLinkGroup';
import LinkGroup from '~components/linkGroup';
import ButtonGroup from '~components/buttonGroup';

const Clients = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <MultiLinkGroup
        items={i18n.yaml.items}
        buttons={[
          { text: i18n.homepage, key: 'link', icon: 'home' },
          { text: i18n.releases, key: 'releaseLink', icon: 'code-branch' }
        ]}
      />
      <ButtonGroup header={html(i18n.publicEndpointsTitle)} items={i18n.yaml.publicEndpoints} />
      <LinkGroup header={html(i18n.deploymentTools)} items={i18n.yaml.deployment} />
    </SubPageLayout>
  );
};

export default Clients;
