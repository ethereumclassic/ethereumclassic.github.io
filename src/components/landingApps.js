import React from "react";
import tw from "twin.macro";
import Link from "./link";

import AppsItem from "./appsItem";

export default function LandingApps({ items }) {
  return (
    <>
      <div>
        <div tw="flex space-x-2 mb-8">
          <h3 tw="flex-1 text-xl font-bold">Latest Applications</h3>
          <Link button secondary to="/services/apps" icon="right">
            All Apps
          </Link>
        </div>
        <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {items.map(({ node }, i) => (
            <AppsItem
              id={node.id}
              item={node}
              css={[i >= 4 && tw`hidden sm:block`]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
