import React from "react";
import tw from "twin.macro";
import Link from "./link";

import VideosItem from "./videosItem";

export default function LandingVideos({ items }) {
  return (
    <>
      <div>
        <div tw="flex space-x-2 mb-8">
          <h3 tw="flex-1 text-xl font-bold">Latest Videos</h3>
          <Link button secondary to="/videos" icon="right">
            All Videos
          </Link>
        </div>
        <div tw="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
          {items.map(({ node }, i) => (
            <VideosItem
              id={node.id}
              item={node}
              css={[
                i === 0 && tw`lg:col-span-full`,
                i >= 2 && tw`hidden sm:block`,
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
