import React from "react";
import "twin.macro";

import Link from "./link";
import Md from "./markdownDynamic";

function CellButton({ button, item }) {
  const link = item[button.key];
  const icon = button.icon || item[button.iconRef];
  if (!link) {
    return null;
  }
  return (
    <Link secondary button to={link} icon={icon} key={button.key}>
      {button.name}
    </Link>
  );
}

export default function GenericCells({ items, buttonItems = [] }) {
  return (
    <div tw="bg-backdrop-light shadow sm:rounded-md divide-y divide-shade-lighter">
      {items.map((item) => {
        const { key, link, name, description } = item;
        return (
          <div tw="p-4" key={key}>
            <div tw="flex">
              <h3 tw="!mt-2 flex-auto">
                <Link to={link} showExternal>
                  {name}
                </Link>
              </h3>
              <div tw="space-x-1">
                {buttonItems.map((button) => (
                  <CellButton key={button.key} button={button} item={item} />
                ))}
              </div>
            </div>
            <Md>{description}</Md>
          </div>
        );
      })}
    </div>
  );
}
