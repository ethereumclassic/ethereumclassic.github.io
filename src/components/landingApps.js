import React from "react";
import tw from "twin.macro";

import AppsItem from "./appsItem";
import LandingSubHeader from "./landingSubHeader";

export default function LandingApps({ items, i18n }) {
  return (
    <>
      <div>
        <LandingSubHeader
          title={i18n.title}
          button={i18n.button}
          link="/services/apps"
        />
        <div tw="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
          {items.map(({ node }, i) => (
            <AppsItem
              key={node.id}
              item={node}
              monochrome
              hash={false}
              showType={false}
              css={[
                tw`hidden`,
                // i <= 3 && tw`block`,
                i <= 7 && tw`block`,
                i > 7 && tw`md:block`,
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
