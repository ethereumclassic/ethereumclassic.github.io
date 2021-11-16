import React from "react";
import "twin.macro";

import Json from "./json";

export default function FourOhFour(props) {
  return (
    <div tw="mx-auto max-w-4xl py-20">
      <h1 tw="text-3xl text-center mb-20">{props.i18n.message}</h1>
      {/* TODO back button */}
      <Json>{props}</Json>
    </div>
  );
}
