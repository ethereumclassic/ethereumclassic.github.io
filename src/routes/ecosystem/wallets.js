import React from 'react';

import { groupItems } from '../../utils';
import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import LinkGroup from '~components/linkGroup';
import ButtonGroup from '~components/buttonGroup';

const Exchanges = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.browserWallets)}
      <ButtonGroup header={html(i18n.interactiveWallets)} items={items.interactive} />
      <ButtonGroup header={html(i18n.standaloneWallets)} items={items.standalone} />
      <ButtonGroup header={html(i18n.extensionWallets)} items={items.extension} />
      <ButtonGroup header={html(i18n.hardwareWallets)} items={items.hardware} />
      <ButtonGroup header={html(i18n.softwareWallets)} items={items.software} />
      <LinkGroup header={html(i18n.otherWallets)} items={items.other} />
    </SubPageLayout>
  );
};

export default Exchanges;
