import React from 'react';

import html from '../../i18n/html';
import SubPageLayout from '~components/subPageLayout';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.intro)}
      <pre>{JSON.stringify(i18n.yaml, null, 2)}</pre>
    </SubPageLayout>
  );
};

export default Teams;
