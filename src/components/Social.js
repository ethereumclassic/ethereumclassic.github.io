import React from "react";
import SocialIcon from './SocialIcon';

const Social = () => {

  return (
    <>
      <h3>Social</h3>
      <ul className="icons">
        <SocialIcon link="https://discordapp.com/invite/HW4GckH" icon="discord" text="Discord" />
        <SocialIcon link="https://telegram.me/ethclassic" icon="telegram" text="Telegram" />
        <SocialIcon link="https://www.reddit.com/r/EthereumClassic/" icon="reddit" text="Reddit" />
        <SocialIcon link="https://twitter.com/eth_classic" icon="twitter" text="Twitter" />
      </ul>
    </>
  )
};

export default Social;
