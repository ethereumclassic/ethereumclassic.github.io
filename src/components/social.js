import React from 'react';
import SocialIcon from './socialIcon';

const Social = () => {
  return (
    <>
      <h3>Social</h3>
      <ul className="icons">
        <SocialIcon to="https://discordapp.com/invite/HW4GckH" icon="discord" text="Discord" />
        <SocialIcon to="https://telegram.me/ethclassic" icon="telegram" text="Telegram" />
        <SocialIcon to="https://www.reddit.com/r/EthereumClassic/" icon="reddit" text="Reddit" />
        <SocialIcon to="https://twitter.com/eth_classic" icon="twitter" text="Twitter" />
      </ul>
    </>
  );
};

export default Social;
