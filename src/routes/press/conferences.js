import React from 'react';

import { groupItems } from '../../utils';

import SubPageLayout from '~components/subPageLayout';
import VideoGroup from '~components/videoGroup';
import Link from '~components/link';

function header(name, subtile, anchor) {
  return (
    <h2>
      <a name={anchor} />
      {`${name} `}
      <small>{subtile}</small>
    </h2>
  );
}

const Conferences = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      <ul>
        <li>
          <Link to="#2017" text={`${i18n.etcSummit2017} ${i18n.hongKong}`} />
        </li>
        <li>
          <Link to="#2018" text={`${i18n.etcSummit2018} ${i18n.seoul}`} />
        </li>
        <li>
          <Link to="#2019" text={`${i18n.etcSummit2019} ${i18n.vancouver}`} />
        </li>
      </ul>
      <VideoGroup
        header={header(i18n.etcSummit2017, i18n.hongKong, '2017')}
        items={items['2017']}
      />
      <VideoGroup header={header(i18n.etcSummit2018, i18n.seoul, '2018')} items={items['2018']} />
      {header(i18n.etcSummit2019, i18n.vancouver, '2019')}
      <VideoGroup title={`${i18n.etcSummit2019} ${i18n.day1}`} items={items['2019-1']} />
      <VideoGroup title={`${i18n.etcSummit2019} ${i18n.day2}`} items={items['2019-2']} />
    </SubPageLayout>
  );
};

export default Conferences;
