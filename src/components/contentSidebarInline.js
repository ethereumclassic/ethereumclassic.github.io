/* This Sidebar requires Tailwind CSS v2.0+ */
import React from "react";
import tw from "twin.macro";
import Icon from "./icon";

import Link from "./link";

export default function ContentSidebarInline({ items }) {
  const item = items.find(({ current }) => current);
  if (!item) {
    return null;
  }
  return (
    <div tw="bg-backdrop-dark -mx-2 px-2 -mt-8 mb-8">
      <div tw="border-b border-shade-lighter pt-3">
        <div tw="-mb-px space-y-1">
          <Link
            to={item.link}
            tw="flex items-center space-x-2 pl-2 font-bold text-shade-neutral hover:text-shade-darker"
          >
            <Icon icon={item.icon} tw="h-4" />
            <div>{item.name}</div>
          </Link>
          <div tw="flex text-sm max-w-full overflow-y-auto">
            {item.navItems.map(({ key, link, name, current }) => (
              <Link
                to={link}
                key={key}
                css={[
                  tw`p-2 border-b-2 border-transparent`,
                  current
                    ? tw` border-primary-neutral text-primary-dark`
                    : tw`hover:text-shade-neutral hover:border-shade-neutral`,
                ]}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
