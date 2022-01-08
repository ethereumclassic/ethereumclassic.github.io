import React from "react";
import tw from "twin.macro";
import Icon from "./icon";
import Link from "./link";

export default function ContentSubMenu({ items }) {
  return (
    <div tw="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map(({ key, link, longName, name, description, icon }) => {
        return (
          <Link
            key={key}
            to={link}
            css={[
              tw`flex-1 space-y-1 px-4 py-2 shadow-sm bg-secondary-lightest text-secondary-darkest hover:bg-secondary-lighter relative overflow-hidden`,
            ]}
          >
            {icon && (
              <Icon icon={icon} tw="h-20 opacity-20 absolute -right-1 -top-1" />
            )}
            <div tw="font-bold text-lg">{longName || name}</div>
            {description && <div tw="text-sm line-clamp-2">{description}</div>}
          </Link>
        );
      })}
    </div>
    // <pre tw="overflow-x-scroll border-2 p-3 max-h-80">
    //   {JSON.stringify(children || rest, null, 2)}
    // </pre>
  );
}
