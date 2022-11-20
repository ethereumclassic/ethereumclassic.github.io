import React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";

import useLocaleItems from "../utils/useLocaleItems";
import Icon from "./icon";

function LocaleButton({
  locale: { flag, key, name, enabled },
  config: { locale, defaultLocale, basePath },
}) {
  const LinkComp = enabled ? Link : "a";
  return (
    <LinkComp
      to={
        !enabled
          ? null
          : key === defaultLocale
          ? `/${basePath}`
          : `/${key}/${basePath}`
      }
      css={[
        tw`p-3 hover:bg-shade-lightest flex items-center space-x-2 rounded-md`,
        locale === key ? tw`font-bold` : tw`font-normal`,
        !enabled && tw`opacity-50 cursor-not-allowed`,
      ]}
    >
      <Icon
        icon={flag || key}
        fallback="language"
        alt={name}
        tw="h-6 w-6 rounded-full"
      />
      <span tw="ml-3 block truncate">{name}</span>
    </LinkComp>
  );
}

export default function LocaleButtons() {
  const config = useLocaleItems();
  return (
    <div tw="grid grid-cols-2 md:grid-cols-3 -m-4 overflow-y-auto max-h-[50vh]">
      {config.localeItems.map((locale) => (
        <LocaleButton key={locale.key} locale={locale} config={config} />
      ))}
    </div>
  );
}
