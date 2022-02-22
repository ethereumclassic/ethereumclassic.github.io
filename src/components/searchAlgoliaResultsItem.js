import React from "react";
import "twin.macro";
import { Snippet } from "react-instantsearch-dom";

import Icon from "./icon";
import Link from "./link";
import dedupeStrings from "../utils/dedupeStrings";
import Md from "./markdownDynamic";
import FormattedDate from "./formattedDate";

export default function ResultsItems({ title, hits, icon, external }) {
  return (
    <>
      <div tw="flex items-center text-sm bg-primary-darker text-primary-light tracking-widest font-semibold px-4 py-2 uppercase space-x-2">
        <Icon icon={icon} tw="h-3" />
        <div>{title}</div>
      </div>
      {hits.map((hit) => (
        <Link
          className="group"
          to={hit.url || hit.link}
          key={hit.objectID}
          tw="block text-shade-dark hover:text-shade-darker hover:bg-secondary-lightest px-4 py-2"
        >
          <div tw="flex items-center">
            <div tw="font-bold">
              {hit.title.replace(` - Ethereum Classic`, "")}
            </div>
          </div>
          <div tw="text-sm line-clamp-2 text-shade-neutral">
            {hit.content ? (
              <Snippet hit={hit} attribute="content" templates />
            ) : (
              <div tw="relative">
                {external && (
                  <Icon
                    icon="external"
                    tw="absolute top-0 right-0 h-4 opacity-10 group-hover:opacity-60"
                  />
                )}
                <div tw="inline space-x-2 pr-2 font-semibold">
                  <FormattedDate date={hit.date} />
                  <span>{dedupeStrings(hit.author, hit.source)}</span>
                </div>
                <Md unwrap noLinks tw="inline">
                  {hit.description}
                </Md>
              </div>
            )}
          </div>
        </Link>
      ))}
    </>
  );
}
