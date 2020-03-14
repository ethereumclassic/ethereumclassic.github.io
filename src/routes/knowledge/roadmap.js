// TODO replace with i18n
import React from 'react';

import html from '../../i18n/html';

import Road from '~components/road';
import Timeline from '~components/timeline';
import SubPageLayout from '~components/subPageLayout';
import ItemTable from '~components/itemTable';
import Source from '~components/source';
import Link from '~components/link';

const Roadmap = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n} wide>
      <section>{html(i18n.timeline)}</section>
      <Timeline i18n={i18n} items={i18n.yaml.timeline} />
      <section>
        <ItemTable
          header={html(i18n.ecipsTitle)}
          items={i18n.yaml.ecips}
          columns={[
            {
              key: 'number',
              name: i18n.number,
              render: n => (
                <Link text={n} to={`https://ecips.ethereumclassic.org/ECIPs/ecip-${n}`} />
              )
            },
            { key: 'name', name: i18n.name },
            { key: 'author', name: i18n.author }
          ]}
        />
        <Source to="https://ecips.ethereumclassic.org" />
        {html(i18n.roadmapTitle)}
        <Road items={i18n.yaml.road} />
        <Source to="https://medium.com/etc-core/etc-core-2020-roadmap-announcement-c2166cdbc53d" />
      </section>
    </SubPageLayout>
  );
};

export default Roadmap;
