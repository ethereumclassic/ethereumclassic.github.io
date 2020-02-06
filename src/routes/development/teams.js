import React from 'react';

import html from '../../i18n/html';
import SubPageLayout from '~components/subPageLayout';
import LinkSection from '~components/linkSection';

import etcLabsImg from '../../../content/development/teams/etc-labs.png';
import etcCoopImg from '../../../content/development/teams/etc-coop.png';
import chainsafeImg from '../../../content/development/teams/chainsafe.png';
import iohkImg from '../../../content/development/teams/iohk.png';

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.intro)}
      <LinkSection title={i18n.etcLabs} to="https://etclabs.org/">
        <img src={etcLabsImg} alt={i18n.etcLabs} />
        {html(i18n.etcLabsText)}
      </LinkSection>
      <LinkSection title={i18n.etcCore} to="https://etccore.io/">
        {html(i18n.etcCoreText)}
      </LinkSection>
      <LinkSection title={i18n.etcCoop} to="https://www.etccooperative.org/">
        <img src={etcCoopImg} alt={i18n.etcCoop} />
        {html(i18n.etcCoopText)}
      </LinkSection>
      <LinkSection title={i18n.chainsafe} to="https://chainsafe.io/">
        <img src={chainsafeImg} alt={i18n.chainsafe} />
        {html(i18n.chainsafeText)}
      </LinkSection>
      <LinkSection title={i18n.iohk} to="https://iohk.io/projects/ethereum-classic/">
        <img src={iohkImg} alt={i18n.iohk} />
        {html(i18n.iohkText)}
      </LinkSection>
    </SubPageLayout>
  );
};

export default Teams;
