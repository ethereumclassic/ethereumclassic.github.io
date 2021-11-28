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
        <Icon tw="h-6 w-auto sm:h-10" icon="etc" />
        <span tw="text-lg sm:text-xl ml-2 sm:ml-4 whitespace-nowrap">
          {title}
        </span>
      </div>
    </LocalizedLink>
  );
}
