import React from 'react';

import { groupItems } from '../../utils';
import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import ButtonGroup from '~components/buttonGroup';

const Exchanges = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      <ButtonGroup header={html(i18n.webWallets)} items={items.web} />
      <ButtonGroup header={html(i18n.extensionWallets)} items={items.extension} />
      <ButtonGroup header={html(i18n.softwareWallets)} items={items.software} />
      <ButtonGroup header={html(i18n.hardwareWallets)} items={items.hardware} />
      <ButtonGroup header={html(i18n.otherWallets)} items={items.other} />
    </SubPageLayout>
  );
};

export default Exchanges;
