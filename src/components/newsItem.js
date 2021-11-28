import React from "react";
import tw from "twin.macro";

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
  blog,
  lines = 2,
  ...rest
}) {
  return (
    <Link
      notLocalized
      to={link}
      tw="relative bg-backdrop-light shadow-sm rounded-sm overflow-hidden text-shade-darker hover:text-shade-darkest hover:bg-primary-lightest"
      {...rest}
    >
      <div
        css={[
          tw`text-primary-darkest bg-primary-lighter px-3 py-2 text-sm`,
          blog && tw`bg-primary-darker text-shade-lightest`,
        ]}
      >
        {blog && (
          <div tw="absolute top-2 right-2 z-10 select-none">
            <Icon icon="etc" tw="opacity-50 h-6" />
          </div>
        )}
        <FormattedDate
          tw="overflow-ellipsis overflow-hidden whitespace-nowrap w-full"
          date={date}
        />
        <div tw="font-bold overflow-ellipsis overflow-hidden whitespace-nowrap w-full">
          {dedupeStrings(author, source)}
        </div>
      </div>
      <div
        css={[
          tw`m-3`,
          [
            tw`line-clamp-1`,
            tw`line-clamp-2`,
            tw`line-clamp-3`,
            tw`line-clamp-4`,
            tw`line-clamp-5`,
            tw`line-clamp-6`,
          ][lines - 1],
        ]}
      >
        {title}
      </div>
    </Link>
  );
}
