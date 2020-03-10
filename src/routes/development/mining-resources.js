import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import Source from '~components/source';
import ButtonGroup from '~components/buttonGroup';
import ItemTable from '~components/itemTable';

const MiningResources = ({ pageContext: { i18n } }) => {
  const top5 = i18n.yaml.pools.filter(p => p.rank).sort((a, b) => a.rank - b.rank);
  return (
    <SubPageLayout i18n={i18n}>
      <ItemTable
        header={html(i18n.softwareTitle)}
        items={i18n.yaml.software}
        columns={[
          { key: 'name', name: i18n.name, type: 'link' },
          { key: 'windowsAmd', name: i18n.windowsAmd, type: 'check' },
          { key: 'windowsNvidia', name: i18n.windowsNvidia, type: 'check' },
          { key: 'linuxAmd', name: i18n.linuxAmd, type: 'check' },
          { key: 'linuxNvidia', name: i18n.linuxNvidia, type: 'check' }
        ]}
      />
      {html(i18n.softwareFooter)}
      <ButtonGroup header={html(i18n.top5Pools)} items={top5} />
      <ButtonGroup header={html(i18n.detailedPools)} items={i18n.yaml.pools} />
      <Source to="https://miningpoolstats.stream/ethereumclassic" text="MiningPoolStats.stream" />
    </SubPageLayout>
  );
};

export default MiningResources;
