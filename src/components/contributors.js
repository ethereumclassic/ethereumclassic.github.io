import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "twin.macro";
import Json from "./json";
import Link from "./link";

export default function Contributors({ contributors }) {
  if (!contributors) {
    return null;
  }
  return (
    <div tw="space-y-6">
      <div>Contributors: todo, add a message about becoming a contributor</div>
      <div tw="flex -space-x-2">
        {contributors.edges.map(
          ({ node: { githubId, localImage, locale } }) => (
            <Link
              className="group"
              tw="flex items-center text-gray-800 font-bold"
              to={`https://github.com/ethereumclassic/ethereumclassic.github.io/commits?author=${githubId}`}
            >
              <GatsbyImage
                key={githubId}
                image={getImage(localImage)}
                tw="h-10 w-10 rounded-full ring-2 ring-gray-100 transition-all group-hover:ring-gray-800"
                alt={githubId}
              />
              <div tw="whitespace-nowrap overflow-ellipsis overflow-hidden transition-all max-w-0 opacity-0 group-hover:opacity-100 group-hover:max-w-xs">
                <span tw="ml-2 mr-5">{githubId}</span>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
