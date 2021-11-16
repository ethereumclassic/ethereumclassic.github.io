import React from "react";
import "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";

export default function Logo() {
  const {
    ui: { title, logoAlt },
  } = useGlobals();
  return (
    <LocalizedLink
      to="/"
      tw="inline-block text-green-900 dark:text-white hover:text-green-600 dark:hover:text-red-500"
    >
      <div tw="flex items-center">
        <Icon tw="h-8 w-auto sm:h-10" icon="etc" alt={logoAlt} />
        <span tw="text-xl ml-4">{title}</span>
      </div>
    </LocalizedLink>
  );
}
