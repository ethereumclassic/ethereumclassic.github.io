import React from 'react';

import { sortBy } from '../../utils';

import SubPageLayout from '~components/subPageLayout';
import ColorGrid from '~components/colorGrid';

const Apps = ({ pageContext: { i18n } }) => {
  const items = sortBy('name', i18n.yaml.items);
  return (
    <SubPageLayout wide i18n={i18n}>
      <ColorGrid i18n={i18n} items={items} />
    </SubPageLayout>
  );
};

export default Apps;
