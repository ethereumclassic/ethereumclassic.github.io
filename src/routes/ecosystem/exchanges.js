import React from 'react';

import SubPageLayout from '~components/subPageLayout';

const Exchanges = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <h1>{i18n.title}</h1>
      <pre>{JSON.stringify(i18n.yaml.items, null, 2)}</pre>
    </SubPageLayout>
  );
};

export default Exchanges;
