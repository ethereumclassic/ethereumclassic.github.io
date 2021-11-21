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
    <div>
      <div>Contributors; todo, add a message</div>
      <div tw="flex -space-x-2 overflow-hidden">
        {contributors.edges.map(
          ({ node: { githubId, localImage, locale } }) => (
            <Link
              to={`https://github.com/ethereumclassic/ethereumclassic.github.io/commits?author=${githubId}`}
            >
              <GatsbyImage
                key={githubId}
                image={getImage(localImage)}
                tw="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"
                alt={githubId}
              />
              <div tw="hidden hover:block">Hello</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
