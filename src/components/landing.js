import React from "react";
import "twin.macro";

import LandingBillboard from "./landingBillboard";
import Link from "./link";

import Md from "./markdownDynamic";

export default function Landing({ i18n: { billboard, intro } }) {
  return (
    <>
      <LandingBillboard {...billboard} />
      <div>
        <div tw="prose">
          <h3>{intro.title}</h3>
          <Md>{intro.content}</Md>
          {intro.button && (
            <Link to={intro.button.link} button primary icon="right">
              {intro.button.text}
            </Link>
          )}
        </div>
        <div>
          <div tw="flex">Placeholder</div>
        </div>
      </div>
    </>
  );
}
