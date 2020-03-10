import React from 'react';

import { groupItems } from '../../utils';

import SubPageLayout from '~components/subPageLayout';
import VideoGroup from '~components/videoGroup';

function header(name, subtile) {
  return (
    <h2>
      {`${name} `}
      <small>{subtile}</small>
    </h2>
  );
}

const Conferences = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      <VideoGroup header={header(i18n.etcSummit2017, i18n.hongKong)} items={items['2017']} />
      <VideoGroup header={header(i18n.etcSummit2018, i18n.seoul)} items={items['2018']} />
      {header(i18n.etcSummit2019, i18n.vancouver)}
      <VideoGroup title={`${i18n.etcSummit2019} ${i18n.day1}`} items={items['2019-1']} />
      <VideoGroup title={`${i18n.etcSummit2019} ${i18n.day2}`} items={items['2019-2']} />
    </SubPageLayout>
  );
};

export default Conferences;
