import React from 'react';
import ButtonLink from './buttonLink';

const Community = () => {
  return (
    <div className="community">
      <h3>Communities</h3>
      <ButtonLink to="https://etcdevteam.com" text="ETCDEV" />
      <ButtonLink to="https://iohk.io/projects/ethereum-classic/" text="IOHK" />
      <ButtonLink to="https://etccooperative.org" text="ETC Cooperative" />
      <ButtonLink to="https://www.etclabs.org/" text="ETC Labs" />
      <ButtonLink to="http://ethereumclassicasia.org" text="ETC Asia" />
      <ButtonLink to="https://etckorea.modoo.at/" text="ETC Korea" />
      <ButtonLink to="http://www.ethereumclassicitalia.org/" text="ETC Italia" />
      <ButtonLink to="http://ethereumclassic.cn" text="ETC China" />
    </div>
  );
};

export default Community;
