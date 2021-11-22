import React from "react";
import "twin.macro";
import dedupeStrings from "../utils/dedupeStrings";
import Disclaimer from "./disclaimer";
import FormattedDate from "./formattedDate";
import Link from "./link";
import NewsItem from "./newsItem";

export default function NewsReel({ items }) {
  return (
    <div tw="space-y-4">
      <div tw="flex">
        <div tw="flex-auto flex space-x-6">
          <h3 tw="text-2xl font-bold text-gray-800">Latest News</h3>
          <div>
            <Disclaimer inline gray />
          </div>
        </div>
        <div>
          <Link button secondary icon="right" to="/news">
            All News
          </Link>
        </div>
      </div>
      <div tw="grid grid-cols-5 gap-4">
        {items.edges.map(({ node }) => (
          <NewsItem {...node} />
        ))}
      </div>
    </div>
  );
}
