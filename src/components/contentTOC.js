import React, { Fragment } from "react";
import tw from "twin.macro";

import scrollToElement from "../utils/scrollToElement";
import urlSafe from "../utils/urlSafe";

import Icon from "./icon";

// LODO automatically detect active state when scrolling

function LinkItems({ items, depth = 0 }) {
  return (
    <>
      {items.map(({ title, items: subItems }, i) => {
        const target = title && urlSafe(title);
        return (
          <Fragment key={title || i}>
            {title && (
              <a
                css={[
                  tw`hocus:text-shade-darker text-shade-neutral font-bold block overflow-ellipsis overflow-hidden max-w-full`,
                  [
                    tw`lg:pl-0 xl:pl-0`,
                    tw`lg:pl-1 xl:pl-2`,
                    tw`lg:pl-2 xl:pl-4`,
                    tw`lg:pl-3 xl:pl-6`,
                  ][depth] || tw`lg:pl-4 xl:pl-8`,
                ]}
                href={`#${target}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(target);
                  window.history.replaceState(
                    undefined,
                    undefined,
                    `#${target}`
                  );
                }}
              >
                {title}
              </a>
            )}
            {subItems && <LinkItems items={subItems} depth={depth + 1} />}
          </Fragment>
        );
      })}
    </>
  );
}

export default function TableOfContents({ items }) {
  return (
    <div tw="text-sm border-shade-lighter border-l space-y-3 -mr-3 pl-5">
      <div tw="flex items-center space-x-3 uppercase tracking-widest text-shade-light select-none">
        <Icon icon="contents" tw="h-3" />
        <span>Contents</span>
      </div>
      <div tw="overflow-y-auto overflow-x-hidden space-y-3 tracking-tight leading-tight max-h-[70vh]">
        <LinkItems items={items} />
      </div>
    </div>
  );
}
