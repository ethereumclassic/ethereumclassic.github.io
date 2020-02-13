import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import Source from '~components/source';
import ItemTable from '~components/itemTable';
import ButtonGroup from '~components/buttonGroup';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <h1>{i18n.title}</h1>
      {html(i18n.clients)}
      <ItemTable
        header={html(i18n.chainsTitle)}
        items={i18n.yaml.chains}
        columns={[
          { key: 'name', name: i18n.name, type: 'link' },
          { key: 'type', name: i18n.type, render: t => i18n[t] },
          { key: 'miningAlgo', name: i18n.miningAlgorithm },
          { key: 'consensusAlgo', name: i18n.conensusAlgorithm, render: t => i18n[t] },
          { key: 'networkId', name: i18n.networkID },
          { key: 'chainId', name: i18n.chainID }
        ]}
      />
      <Source to="https://EthereumVM.net" text="EthereumVM.net" />
      <ButtonGroup header={html(i18n.gasFeeTitle)} items={i18n.yaml.gasFee} />
      <ItemTable
        hideHead
        sortedBy="name"
        header={html(i18n.explorersTitle)}
        items={i18n.yaml.explorers}
        columns={[
          { key: 'name' },
          { text: i18n.mainnet, type: 'button', key: 'etc' },
          { text: i18n.kotti, type: 'button', key: 'kotti' },
          { text: i18n.mordor, type: 'button', key: 'mordor' },
          { text: i18n.astor, type: 'button', key: 'astor' }
        ]}
      />
      <ItemTable
        hideHead
        sortedBy="name"
        header={html(i18n.monitorsTitle)}
        items={i18n.yaml.monitors}
        columns={[
          { key: 'name' },
          { text: i18n.mainnet, type: 'button', key: 'etc' },
          { text: i18n.kotti, type: 'button', key: 'kotti' },
          { text: i18n.mordor, type: 'button', key: 'mordor' },
          { text: i18n.astor, type: 'button', key: 'astor' }
        ]}
      />
      <ItemTable
        hideHead
        sortedBy="name"
        header={html(i18n.faucetsTitle)}
        items={i18n.yaml.faucets}
        columns={[
          { key: 'name' },
          { text: i18n.kotti, type: 'button', key: 'kotti' },
          { text: i18n.mordor, type: 'button', key: 'mordor' },
          { text: i18n.astor, type: 'button', key: 'astor' }
        ]}
      />
    </SubPageLayout>
  );
};

export default Teams;
