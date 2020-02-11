import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import Source from '~components/source';

const Teams = ({ pageContext: { i18n } }) => {
  const top5 = i18n.yaml.pools.filter(p => p.rank).sort((a, b) => a.rank - b.rank);
  return (
    <SubPageLayout i18n={i18n}>
      <h1>{i18n.title}</h1>
      {html(i18n.softwareTitle)}
      <pre>{JSON.stringify(i18n.yaml.software, null, 2)}</pre>
      {html(i18n.softwareFooter)}
      {html(i18n.top5Pools)}
      <pre>{JSON.stringify(top5, null, 2)}</pre>
      {html(i18n.detailedPools)}
      <pre>{JSON.stringify(i18n.yaml.pools, null, 2)}</pre>
      <Source to="https://miningpoolstats.stream/ethereumclassic" text="MiningPoolStats.stream" />
    </SubPageLayout>
  );
};

export default Teams;
