import React from "react";
import SocialIcon from './SocialIcon';

const Social = () => {

  return (
    <>
      <h3>Social</h3>
      <ul className="icons">
        <SocialIcon link="#" icon="twitter" text="Twitter" />
        <SocialIcon link="#" icon="facebook-f" text="Facebook" />
        <SocialIcon link="#" icon="instagram" text="Instagram" />
        <SocialIcon link="#" icon="linkedin-in" text="LinkedIn" />
        <SocialIcon link="#" icon="github" text="GitHub" />
        <SocialIcon link="#" icon="codepen" text="Codepen" />
      </ul>
    </>
  )
};

export default Social;
