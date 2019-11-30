import React from 'react';
import ButtonLink from './buttonLink';
import Translate from './translate';

const Community = () => {
  return (
    <Translate
      all={t => (
        <div className="community">
          <h3>{t.communityTitle}</h3>
          <ButtonLink to="https://etcdevteam.com" text={t.etcDev} />
          <ButtonLink to="https://iohk.io/projects/ethereum-classic/" text={t.iohk} />
          <ButtonLink to="https://etccooperative.org" text={t.etcCooperative} />
          <ButtonLink to="https://www.etclabs.org/" text={t.etcLabs} />
          <ButtonLink to="http://ethereumclassicasia.org" text={t.etcAsia} />
          <ButtonLink to="https://etckorea.modoo.at/" text={t.etcKorea} />
          <ButtonLink to="http://ethereumclassic.cn" text={t.etcChina} />
        </div>
      )}
    />
  );
};

export default Community;
