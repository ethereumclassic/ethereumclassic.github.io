import React from "react";
import "twin.macro";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Link from "./link";
import Markdown from "./markdownDynamic";

export default function About({ i18n, data }) {
  const sorted = data.contributors.group.sort(
    (a, b) => b.totalCount - a.totalCount
  );
  return (
    <div tw="mx-auto max-w-4xl pt-20 px-4">
      <div tw="m-auto prose text-center">
        <h1>{i18n.title}</h1>
        <Markdown>{i18n.description}</Markdown>
      </div>
      <div tw="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 pt-10">
        {sorted.map(({ edges }) => {
          const [
            {
              node: { githubId, githubImage },
            },
          ] = edges;
          return (
            <Link
              key={githubId}
              className="group"
              tw="flex flex-col text-shade-neutral space-y-2 hover:text-shade-darkest"
              to={`https://github.com/${githubId}`}
            >
              <GatsbyImage
                key={githubId}
                image={getImage(githubImage)}
                tw="rounded-md shadow-md aspect-h-1 aspect-w-1"
                alt={githubId}
              />
              <div tw="whitespace-nowrap text-sm overflow-ellipsis text-center">
                {githubId}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
