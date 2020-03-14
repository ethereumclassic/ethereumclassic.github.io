import React from 'react';
import ButtonLink from './buttonLink';
import Translate from './translate';

const Community = () => {
  return (
    <Translate
      all={t => (
        <div className="community">
          {t.teams}
          :
          <ButtonLink to="https://www.etclabs.org/" text={t.etcLabs} />
          <ButtonLink to="https://www.etccore.io/" text={t.etcCore} />
          <ButtonLink to="https://etccooperative.org" text={t.etcCooperative} />
          <ButtonLink to="https://etcconsortium.org/" text={t.etcConsortium} />
          <ButtonLink to="https://www.godel.ai/" text={t.godel} />
          <br />
          <br />
          {t.regionalSites}
          :
          <ButtonLink to="http://ethereumclassicasia.org" text={t.etcAsia} />
          <ButtonLink to="https://www.ethereumclassickorea.com/" text={t.etcKorea} />
          <ButtonLink to="http://ethereumclassic.cn" text={t.etcChina} />
          <br />
          <br />
          <ButtonLink to="/ecosystem/social-channels/" text={t.allChannels} icon="chevron-right" />
        </div>
      )}
    />
  );
};

export default Community;
