import React, { Fragment } from "react";
import { kebabCase } from "lodash";
import tw from "twin.macro";

import Icon from "./icon";
import { resolveRefs } from "../utils/helpers";

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

function generateToc(_item, i18n) {
  // TODO resolve refs higher up else to keep it dry?
  const item = resolveRefs(_item, i18n);
  const content = item.content || item.contentItems || item.items || [];
  if (item.title) {
    return {
      title: item.title,
      items: content.map((i) => generateToc(i, i18n)).filter((i) => i),
    };
  }
  return null;
}

export default function TableOfContents({ mdx, i18n }) {
  const items = mdx?.toc?.items ?? [generateToc(i18n, i18n)].filter((i) => i);
  if (!items.length) {
    return null;
  }
  return (
    <div tw="text-sm border-gray-300 border-l space-y-3 pl-6">
      <div tw="mb-4 flex items-center space-x-2 uppercase tracking-widest text-gray-400 select-none">
        <Icon icon="contents" size={12} />
        <span>Contents</span>
      </div>
      <LinkItems items={items} />
    </div>
  );
}
