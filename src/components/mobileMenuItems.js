import React from "react";
import "twin.macro";

import { useNavigation } from "../utils/navigationProvider";
import DarkModeSwitcher from "./darkModeSwitcher";
import Icon from "./icon";
import Link from "./link";
import LocaleSelector from "./localeSelector";

function MenuItem({ name, description, link, icon }) {
  return (
    <Link to={link} tw="flex-row sm:space-y-2">
      <div tw="flex text-sm font-bold items-center space-x-2">
        <Icon icon={icon} tw="h-3.5 text-secondary-dark" />
        <div>{name}</div>
      </div>
      {description && (
        <div tw="line-clamp-2 text-xs text-shade-light">{description}</div>
      )}
    </Link>
  );
}

export default function MobileMenuItems() {
  const { main } = useNavigation();
  return (
    <>
      <div tw="p-4 pt-0 space-y-3 sm:space-y-6 divide-y divide-shade-lighter divide-solid overflow-y-auto max-h-[80vh]">
        {main
          .filter(({ hideMobile }) => !hideMobile)
          .map(({ key, name, navItems = [] }) => (
            <div key={key} tw="pt-4">
              <div tw="hidden sm:block pb-2 text-sm font-semibold text-shade-light tracking-wider uppercase">
                {name}
              </div>
              <div tw="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {navItems.map((item) => (
                  <MenuItem {...item} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
