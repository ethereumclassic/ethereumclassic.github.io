import React from "react";
import tw from "twin.macro";

import Disclaimer from "./disclaimer";
import Link from "./link";
import NewsItem from "./newsItem";

export default function NewsReel({ items, i18n }) {
  if (items.length === 0) {
    return null;
  }
  return (
    <div tw="space-y-4">
      <div tw="flex space-x-6">
        <div tw="flex-auto flex-row flex space-x-6">
          <h3 tw="text-2xl font-bold text-shade-darkest">{i18n.title}</h3>
          <div tw="hidden lg:block">
            <Disclaimer type="inline" text="verify" />
          </div>
        </div>
        <div>
          <Link button secondary icon="right" to="/news">
            {i18n.button}
          </Link>
        </div>
      </div>
      <div tw="lg:hidden">
        <Disclaimer type="inline" text="verify" />
      </div>
      <div tw="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map(({ node }, i) => (
          <NewsItem
            key={node.id}
            monochrome
            item={node}
            css={[
              tw`hidden`,
              i <= 2 && tw`block`,
              i <= 3 && tw`md:block`,
              i > 3 && tw`lg:block`,
            ]}
          />
        ))}
      </div>
    </div>
  );
}
