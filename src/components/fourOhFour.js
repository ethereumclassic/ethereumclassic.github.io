import React from "react";
import "twin.macro";
import Button from "./button";
import { navigate } from "@gatsbyjs/reach-router";
import Json from "./json";
import Link from "./link";

export default function FourOhFour({ i18n, pageContext, location, path }) {
  return (
    <div tw="mx-auto max-w-4xl py-20 text-center">
      <h1 tw="text-3xl mb-20">{i18n.message}</h1>
      <div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          iconLeft="left"
          button
          big
          primary
        >
          {i18n.back}
        </Button>
        <Link to="/" icon="home" button big>
          {i18n.home}
        </Link>
      </div>
    </div>
  );
}
