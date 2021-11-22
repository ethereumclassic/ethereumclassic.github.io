import React from "react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import dedupeStrings from "../utils/dedupeStrings";
import FormattedDate from "./formattedDate";

export default function NewsItem({ date, author, link, title, source, blog }) {
  return (
    <LocalizedLink
      to={link}
      css={[
        tw`bg-white hover:bg-gray-300 p-2`,
        blog && tw`border-2 border-red-200`,
      ]}
    >
      <div tw="text-gray-400">
        <FormattedDate date={date} />
        <div>{dedupeStrings(author, source)}</div>
      </div>
      {title}
    </LocalizedLink>
  );
}
