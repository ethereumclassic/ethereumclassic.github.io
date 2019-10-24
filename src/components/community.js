import React from 'react';
import ButtonLink from './buttonLink';

const Community = () => {
  return (
    <div className="community">
      <h3>Community</h3>
      <ButtonLink link="https://etcdevteam.com" text="ETCDEV" />
      <ButtonLink link="https://iohk.io/projects/ethereum-classic/" text="IOHK" />
      <ButtonLink link="https://etccooperative.org" text="ETC Cooperative" />
      <ButtonLink link="https://www.etclabs.org/" text="ETC Labs" />
      <ButtonLink link="http://ethereumclassicasia.org" text="ETC Asia" />
      <ButtonLink link="https://etckorea.modoo.at/" text="ETC Korea" />
      <ButtonLink link="http://www.ethereumclassicitalia.org/" text="ETC Italia" />
      <ButtonLink link="http://ethereumclassic.cn" text="ETC China" />
    </div>
  );
};

export default Community;
