import React from 'react';

import SubPageLayout from '~components/subPageLayout';
import Source from '~components/source';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <h1>{i18n.title}</h1>
      <h2>{i18n.clientsTitle}</h2>
      <pre>{JSON.stringify(i18n.yaml.clients, null, 2)}</pre>
      <h2>{i18n.chainsTitle}</h2>
      <Source to="https://EthereumVM.net" text="EthereumVM.net" />
      <pre>{JSON.stringify(i18n.yaml.chains, null, 2)}</pre>
      <h2>{i18n.deploymentTitle}</h2>
      <pre>{JSON.stringify(i18n.yaml.deployment, null, 2)}</pre>
      <h2>{i18n.explorersTitle}</h2>
      <pre>{JSON.stringify(i18n.yaml.explorers, null, 2)}</pre>
      <h2>{i18n.monitorsTitle}</h2>
      <pre>{JSON.stringify(i18n.yaml.monitors, null, 2)}</pre>
      <h2>{i18n.faucetsTitle}</h2>
      <pre>{JSON.stringify(i18n.yaml.faucets, null, 2)}</pre>
      <h2>{i18n.publicEndpointsTitle}</h2>
      <pre>{JSON.stringify(i18n.yaml.publicEndpoints, null, 2)}</pre>
      <h2>{i18n.gasFeeTitle}</h2>
      <pre>{JSON.stringify(i18n.yaml.gasFee, null, 2)}</pre>
    </SubPageLayout>
  );
};

export default Teams;
