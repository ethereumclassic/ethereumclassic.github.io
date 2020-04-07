import React from 'react';
import html from '../i18n/html';

import SocialIcon from './socialIcon';
import Translate from './translate';
import ButtonLink from './buttonLink';

const Social = () => {
  return (
    <Translate
      all={t => (
        <>
          <h4>{t.socialTitle}</h4>
          <ul className="icons">
            <SocialIcon to="https://github.com/ethereumclassic/" icon="github" text={t.github} />
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
          <p>
            {html(t.discordText)}
            <br />
            <ButtonLink
              className="massive blue"
              to="https://discordapp.com/invite/HW4GckH"
              fullIcon="icon brands fa-discord"
              text={t.discordJoin}
            />
          </p>
          <p>
            <ButtonLink
              to="/ecosystem/social-channels/"
              text={t.allChannels}
              icon="chevron-right"
            />
          </p>
        </>
      )}
    />
  );
};

export default Social;
