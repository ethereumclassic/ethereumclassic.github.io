import React from "react";
import tw from "twin.macro";

import AppsItem from "./appsItem";
import LandingSubHeader from "./landingSubHeader";

export default function LandingApps({ items }) {
  return (
    <>
      <div>
        <LandingSubHeader
          title="Latest Applications"
          button="All Apps"
          link="/services/apps"
        />
        <div tw="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map(({ node }, i) => (
            <AppsItem
              id={node.id}
              item={node}
              monochrome
              hash={false}
              showType={false}
              css={[
                tw`hidden`,
                i <= 3 && tw`block`,
                i <= 5 && tw`sm:block`,
                i > 5 && tw`lg:block`,
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
