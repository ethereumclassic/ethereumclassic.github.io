import React from 'react';
import { groupItems } from '../../utils';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import ButtonGroup from '~components/buttonGroup';

const Exchanges = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.intro)}
      {html(i18n.exchangesIntro)}
      <ButtonGroup header={html(i18n.centralizedExchanges)} items={items.centralized} />
      <ButtonGroup header={html(i18n.decentralizedExchanges)} items={items.decentralized} />
      <ButtonGroup header={html(i18n.instantExchanges)} items={items.instant} />
      <ButtonGroup header={html(i18n.paymentProcessors)} items={items.processors} />
      <ButtonGroup header={html(i18n.etcPriceSources)} items={items.price} />
    </SubPageLayout>
  );
};

export default Exchanges;
