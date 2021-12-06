import React from "react";
import tw from "twin.macro";
import LandingSubHeader from "./landingSubHeader";

import VideosItem from "./videosItem";

export default function LandingVideos({ items }) {
  return (
    <>
      <div>
        <LandingSubHeader
          title="Latest Videos"
          button="All Videos"
          link="/videos"
        />
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
