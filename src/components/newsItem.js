import React from "react";
import tw from "twin.macro";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

import dedupeStrings from "../utils/dedupeStrings";
import FormattedDate from "./formattedDate";
import Icon from "./icon";
import Link from "./link";

export default function NewsItem({
  lines = 3,
  monochrome,
  item: { date, author, link, title, source, newsType, locale },
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
  const colored = !monochrome && blog;
  return (
    <div {...rest}>
      <LinkComp
        notLocalized={link}
        to={localeLink}
        css={[
          tw`block cursor-pointer relative border border-shade-lightest bg-backdrop-light shadow-sm rounded-md overflow-hidden text-shade-darker hover:text-shade-darkest hover:bg-primary-lightest`,
          colored &&
            tw`bg-primary-lightest text-primary-darkest hover:bg-primary-lighter`,
        ]}
      >
        <Icon
          icon={type.icon}
          tw="float-right select-none opacity-20 mt-2 mx-2 h-3.5 w-3.5"
        />
        <div tw="px-3 py-2 font-medium text-sm">
          <span tw="font-normal">{type.prefix}</span>
          {title}
        </div>
        <div
          css={[
            tw`text-shade-light px-3 py-2 text-xs flex items-center space-x-3 border-t border-t-shade-lightest`,
            colored && tw`text-primary-dark border-t-primary-lighter`,
          ]}
        >
          <FormattedDate
            tw="overflow-ellipsis overflow-hidden whitespace-nowrap flex-shrink-0"
            date={date}
          />
          <div tw="overflow-ellipsis overflow-hidden whitespace-nowrap flex-auto text-right">
            {dedupeStrings(author, source)}
          </div>
        </div>
      </LinkComp>
    </div>
  );
}
