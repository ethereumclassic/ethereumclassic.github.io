import React from 'react';
import ButtonLink from './buttonLink';
import Translate from './translate';

const Discord = () => {
  return (
    <>
      <p>
        <Translate text="discordText" />
        <br />
        <ButtonLink
          className="massive blue"
          to="https://discordapp.com/invite/HW4GckH"
          fullIcon="icon brands fa-discord"
          text={<Translate text="discordJoin" />}
        />
      </p>
    </>
  );
};

export default Discord;
