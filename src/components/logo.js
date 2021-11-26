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
      tw="inline-block text-green-900 dark:text-white hover:text-green-600 dark:hover:text-red-500"
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
