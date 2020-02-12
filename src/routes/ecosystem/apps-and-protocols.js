import React from 'react';

import SubPageLayout from '~components/subPageLayout';
import ColorGrid from '~components/colorGrid';

const Apps = ({ pageContext: { i18n } }) => {
  const items = i18n.yaml.items.sort(({ name: a }, { name: b }) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  return (
    <SubPageLayout wide i18n={i18n}>
      <section>
        <h1>{i18n.title}</h1>
      </section>
      <ColorGrid i18n={i18n} items={items} />
    </SubPageLayout>
  );
};

export default Apps;
