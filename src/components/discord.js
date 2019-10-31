import React from 'react';
import ButtonLink from './buttonLink';

const Discord = () => {
  return (
    <>
      <p>
        The ETC community is most active on discord.
        <ButtonLink
          className="massive blue"
          to="https://discordapp.com/invite/HW4GckH"
          fullIcon="icon brands fa-discord"
          text="Join ETC Discord"
        />
      </p>
    </>
  );
};

export default Discord;
