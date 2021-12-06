import React from "react";
import tw from "twin.macro";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

import dedupeStrings from "../utils/dedupeStrings";
import FormattedDate from "./formattedDate";
import Icon from "./icon";
import Link from "./link";

export default function NewsItem({
  date,
  author,
  link,
  title,
  source,
  newsType,
  locale,
  lines = 2,
  ...rest
}) {
  const blog = newsType === "blog";
  const {
    defaultLocale,
    globals: {
      ui: { newsTypes },
    },
  } = useLocalization();
  const type = newsTypes[newsType] || {};
  const localeLink =
    link && blog && defaultLocale !== locale ? `/${locale}${link}` : link;
  const LinkComp = link ? Link : "div";
  return (
    <LinkComp
      notLocalized={link}
      to={localeLink}
      css={[
        tw`relative cursor-pointer  border border-shade-lightest bg-backdrop-light shadow-sm rounded-sm overflow-hidden text-shade-darker hover:text-shade-darkest hover:bg-primary-lightest`,
        type.prefix && tw`hover:bg-shade-lightest`,
      ]}
      {...rest}
    >
      <div
        css={[
          tw`text-primary-darkest bg-primary-lightest px-3 py-2 text-sm`,
          blog && tw`bg-primary-lighter`,
          type.prefix && tw`bg-shade-lightest text-shade-dark`,
        ]}
      >
        <div tw="absolute top-2 right-2 z-10 select-none flex opacity-40 items-center">
          <Icon icon={type.icon} tw="h-3.5 w-3.5" />
        </div>
        <FormattedDate
          tw="overflow-ellipsis overflow-hidden whitespace-nowrap w-full"
          date={date}
        />
        <div tw="overflow-ellipsis overflow-hidden whitespace-nowrap w-full">
          {dedupeStrings(author, source)}
        </div>
      </div>
      <div
        css={[
          tw`mx-3 my-2 line-clamp-3 font-medium text-sm`,
          [tw`line-clamp-1`, tw`line-clamp-2`, tw`line-clamp-3`][lines - 1],
        ]}
      >
        {type.prefix}
        {title}
      </div>
    </LinkComp>
  );
}
