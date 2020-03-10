import React from 'react';

import html from '../../i18n/html';
import SubPageLayout from '~components/subPageLayout';
import ItemTable from '~components/itemTable';
import SocialIcon from '~components/socialIcon';
import Translate from '~components/translate';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.intro)}
      <ItemTable
        header={html(i18n.teamsTitle)}
        items={i18n.yaml.items}
        rowClass={({ status }) => (status === 'inactive' ? 'faded' : '')}
        columns={[
          { key: 'year', name: i18n.year },
          { key: 'name', name: i18n.teamName, type: 'link' },
          {
            key: 'custom',
            name: i18n.social,
            render: (n, { github, twitter }) => (
              <ul className="icons">
                {twitter && (
                  <SocialIcon
                    to={`https://twitters.com/${twitter}`}
                    icon="twitter"
                    text={<Translate text="twitter" />}
                  />
                )}
                {github && (
                  <SocialIcon
                    to={`https://github.com/${github}`}
                    icon="github"
                    text={<Translate text="github" />}
                  />
                )}
              </ul>
            )
          },
          { key: 'status', name: i18n.status, render: k => i18n[k] }
        ]}
      />
    </SubPageLayout>
  );
};

export default Teams;
