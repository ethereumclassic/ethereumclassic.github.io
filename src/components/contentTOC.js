import React, { Fragment } from "react";
import { kebabCase } from "lodash";
import tw from "twin.macro";

import Icon from "./icon";

// TODO automatically detect active state when scrolling

function LinkItems({ items, depth = 0 }) {
  return (
    <>
      {items.map(({ title, items: subItems }, i) => (
        <Fragment key={title || i}>
          {title && (
            <a
              css={[
                tw`hocus:text-gray-800 text-gray-500 font-bold block`,
                [tw`pl-2`, tw`pl-4`, tw`pl-6`, tw`pl-8`][depth] || tw`pl-8`,
              ]}
              href={`#${kebabCase(title.toLowerCase())}`}
            >
              {title}
            </a>
          )}
          {subItems && <LinkItems items={subItems} depth={depth + 1} />}
        </Fragment>
      ))}
    </>
  );
}

function generateToc(item, i18n = item) {
  // TODO resolve refs higher up else to keep it dry?
  if (item.title) {
    return {
      title: item.title,
      items: (item.items || [])
        .map((i) => generateToc(i, i18n))
        .filter((i) => i),
    };
  }
  return null;
}

export default function TableOfContents({ mdx, i18n }) {
  // if H1 is queried, we skip one
  const items = mdx?.headings[0]
    ? mdx.toc.items[0].items
    : mdx?.toc?.items ?? [generateToc(i18n)].filter((i) => i)[0]?.items;

  if (!items?.length) {
    return null;
  }
  return (
    <div tw="text-sm border-gray-300 border-l space-y-3 pl-6">
      <div tw="flex items-center space-x-3 uppercase tracking-widest text-gray-400 select-none">
        <Icon icon="contents" tw="h-3" />
        <span>Contents</span>
      </div>
      <div
        tw="max-h-screen overflow-y-auto space-y-1.5"
        css={{ maxHeight: "70vh" }}
      >
        <LinkItems items={items} />
      </div>
    </div>
  );
}
