import React from "react";
import "twin.macro";
import { Popover } from "@headlessui/react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

import MainMenuSubMenu from "./mainMenuSubMenu";
import Icon from "./icon";

export default function MainMenuItem({ item }) {
  // No submenu
  if (!item.navItems) {
    return (
      <LocalizedLink
        to={item.link}
        tw="font-medium text-shade-neutral hover:text-shade-darkest"
      >
        {item.name}
      </LocalizedLink>
    );
  }
  // Item with MainMenuSubMenu
  return (
    <Popover tw="relative" className="group">
      {({ open }) => (
        <>
          <Popover.Button
            className="group"
            css={[
              tw`inline-flex items-center font-medium hover:text-shade-darkest`,
              open ? tw`text-shade-darkest` : tw`text-shade-neutral`,
            ]}
          >
            <span>{item.name}</span>
            <Icon
              icon="down"
              css={[
                tw`ml-2 w-2 group-hover:text-shade-neutral`,
                open ? tw`text-shade-neutral` : tw`text-shade-light`,
              ]}
              aria-hidden="true"
            />
          </Popover.Button>
          <MainMenuSubMenu items={item.navItems} />
        </>
      )}
    </Popover>
  );
}
