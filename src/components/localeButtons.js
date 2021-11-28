import React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";

import useLocaleItems from "../utils/useLocaleItems";
import Icon from "./icon";

export default function LocaleButtons() {
  const { locale, defaultLocale, basePath, localeItems } = useLocaleItems();
  return (
    <div tw="grid grid-cols-3 -m-3 overflow-y-auto" css={{ maxHeight: "60vh" }}>
      {localeItems.map(({ key, name, enabled }) => (
        <Link
          key={key}
          to={
            enabled &&
            (key === defaultLocale ? `/${basePath}` : `/${key}/${basePath}`)
          }
          css={[
            tw`px-3 py-3 hover:bg-shade-lightest flex items-center space-x-2`,
            locale === key ? tw`font-bold` : tw`font-normal`,
            !enabled && tw`opacity-50 cursor-not-allowed`,
          ]}
        >
          <Icon icon={key} alt={name} tw="flex-shrink-0 h-6 w-6 rounded-full" />
          <span tw="ml-3 block truncate">{name}</span>
        </Link>
      ))}
    </div>
  );
}
