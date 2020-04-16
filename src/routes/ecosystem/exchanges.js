import React from 'react';
import { groupItems } from '../../utils';

import SubPageLayout from '~components/subPageLayout';
import ButtonGroup from '~components/buttonGroup';

const Exchanges = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      <ButtonGroup header={i18n.centralizedExchanges} items={items.centralized} />
      <ButtonGroup header={i18n.decentralizedExchanges} items={items.decentralized} />
      <ButtonGroup header={i18n.instantExchanges} items={items.instant} />
      <ButtonGroup header={i18n.etcPriceSources} items={items.price} />
    </SubPageLayout>
  );
};

export default Exchanges;
