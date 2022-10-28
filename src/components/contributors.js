import React, { Fragment } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "twin.macro";
import { uniqBy } from "lodash";

import Link from "./link";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function Contributors({ contributors }) {
  const { ui } = useGlobals();
  if (!contributors.edges.length) {
    return null;
  }
  // dedupe in case appears multiple times due to i18n
  const uniqueContributors = uniqBy(
    contributors.edges,
    ({ node: { githubId: id } }) => id
  );
  return (
    <div tw="space-y-4">
      <div tw="text-shade-neutral text-sm">{ui.contributors}</div>
      <div tw="line-height[0.3em]">
        {uniqueContributors.map(({ node: { githubId, githubImage } }, i) => (
          <Fragment key={githubId}>
            {i % 6 === 0 && <br tw="block sm:hidden" />}
            {i % 8 === 0 && <br tw="hidden sm:block" />}
            <Link
              className="group"
              tw="inline-flex items-center text-shade-darker font-bold -mr-1.5 leading-normal"
              to={`https://github.com/${githubId}`}
            >
              <GatsbyImage
                key={githubId}
                image={getImage(githubImage)}
                tw="h-10 w-10 rounded-full ring-2 ring-shade-lightest transition-all group-hover:ring-shade-darker bg-white"
                alt={githubId}
              />
              <div tw="transition-all max-w-0 opacity-0 group-hover:opacity-100 group-hover:max-w-xs">
                <div tw="ml-2 mr-5">
                  <div tw="whitespace-nowrap max-width[9em] overflow-ellipsis overflow-hidden block text-sm">
                    {githubId}
                  </div>
                </div>
              </div>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
