import React from 'react';
import SocialIcon from './socialIcon';
import Translate from './translate';

const Social = () => {
  return (
    <Translate
      all={t => (
        <>
          <h3>{t.socialTitle}</h3>
          <ul className="icons">
            <SocialIcon
              to="https://discordapp.com/invite/HW4GckH"
              icon="discord"
              text={t.discord}
            />
            <SocialIcon to="https://telegram.me/ethclassic" icon="telegram" text={t.telegram} />
            <SocialIcon
              to="https://www.reddit.com/r/EthereumClassic/"
              icon="reddit"
              text={t.reddit}
            />
            <SocialIcon to="https://twitter.com/eth_classic" icon="twitter" text={t.twitter} />
          </ul>
        </>
      )}
    />
  );
};

export default Social;
