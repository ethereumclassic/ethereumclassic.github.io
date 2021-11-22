import React from "react";
import "twin.macro";
import dedupeStrings from "../utils/dedupeStrings";
import FormattedDate from "./formattedDate";
import Link from "./link";

export default function NewsReel({ items }) {
  return (
    <div tw="space-y-2">
      <div tw="flex">
        <div tw="flex-auto">Latest News</div>
        <div>
          <Link button secondary icon="right" to="/news">
            All News
          </Link>
        </div>
      </div>
      <div tw="grid grid-cols-5 gap-2">
        {items.edges.map(
          ({ node: { id, date, author, source, title, link } }) => (
            <Link notLocalized to={link} key={id} tw="bg-white p-3">
              <div tw="text-gray-400">
                <FormattedDate date={date} />
              </div>
              <div tw="text-gray-400">{dedupeStrings(author, source)}</div>
              <div>{title}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
