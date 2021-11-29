import React from "react";
import "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";

export default function Logo() {
  const {
    ui: { title },
  } = useGlobals();
  return (
    <LocalizedLink
      to="/"
      tw="inline-block text-primary-darkest hover:text-primary-dark"
    >
      <div tw="flex items-center">
        <Icon tw="h-7 -mt-0.5" icon="etc" />
        <span tw="text-xl ml-3 whitespace-nowrap">{title}</span>
      </div>
    </LocalizedLink>
  );
}
