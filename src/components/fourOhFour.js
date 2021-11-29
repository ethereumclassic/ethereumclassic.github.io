import React from "react";
import "twin.macro";

import Json from "./json";

export default function FourOhFour({ i18n, pageContext, location, path }) {
  return (
    <div tw="mx-auto max-w-4xl py-20">
      <h1 tw="text-3xl text-center mb-20">{i18n.message}</h1>
      {/* TODO back button */}
      <Json>{{ i18n, pageContext, location, path }}</Json>
    </div>
  );
}
