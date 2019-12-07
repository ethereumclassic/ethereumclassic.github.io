import React from 'react';

import html from '../i18n/html';
import PageLayout from '~components/pageLayout';
import LinkSection from '~components/linkSection';

import etcLabsImg from '../../content/teams/etc-labs.png';
import etcCoopImg from '../../content/teams/etc-coop.png';
import chainsafeImg from '../../content/teams/chainsafe.png';
import iohkImg from '../../content/teams/iohk.png';

/* 
TEAM GRID: Removed for now
<Grid itemWidth={200} semi wide>
  <Mdx code={i18n.mdx.individuals} />
</Grid> 
*/

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <PageLayout seo={i18n} wide>
      <section>{html(i18n.intro)}</section>
      <section>
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
      </section>
    </PageLayout>
  );
};

export default Teams;
