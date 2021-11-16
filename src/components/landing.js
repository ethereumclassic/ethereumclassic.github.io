import React from "react";
import "twin.macro";

import LandingBillboard from "./landingBillboard";

export default function Landing(props) {
  return (
    <>
      <LandingBillboard {...props.i18n.billboard} />
    </>
  );
}
