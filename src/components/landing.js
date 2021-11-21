import React from "react";
import "twin.macro";

import LandingBillboard from "./landingBillboard";

import Lorem from "./lorem";

export default function Landing(props) {
  return (
    <>
      <LandingBillboard {...props.i18n.billboard} />
      <div>
        <Lorem />
      </div>
    </>
  );
}
