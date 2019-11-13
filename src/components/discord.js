import React from 'react';
import ButtonLink from './buttonLink';

const Discord = () => {
  return (
    <>
      <p>
        <b> ETC participants </b>
        are most active on
        <b> discord</b>
        .
        <br />
        <ButtonLink
          className="massive blue"
          to="https://discordapp.com/invite/HW4GckH"
          fullIcon="icon brands fa-discord"
          text="Join ETC on Discord"
        />
      </p>
    </>
  );
};

export default Discord;
