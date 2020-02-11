import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <h1>{i18n.title}</h1>
      {html(i18n.clients)}
      {html(i18n.tooling)}
      <pre>{JSON.stringify(i18n.yaml.tools, null, 2)}</pre>
    </SubPageLayout>
  );
};

export default Teams;
