import React from "react";
import "twin.macro";

import { useNavigation } from "../utils/navigationProvider";
import Icon from "./icon";
import Link from "./link";

function MenuItem({ name, description, link, icon }) {
  return (
    <Link to={link} tw="flex-row sm:space-y-2">
      <div tw="flex items-center space-x-2">
        <Icon icon={icon} tw="h-4" />
        <div>{name}</div>
      </div>
      {description && (
        <div tw="line-clamp-1 sm:line-clamp-2 text-sm text-gray-400">
          {description}
        </div>
      )}
    </Link>
  );
}

export default function MobileMenuItems() {
  const { main } = useNavigation();
  return (
    <div tw="p-4 pt-0 space-y-3 sm:space-y-6 divide-y divide-gray-200 divide-solid">
      {main
        .filter(({ hideMobile }) => !hideMobile)
        .map(({ key, name, navItems = [] }) => (
          <div key={key} tw="space-y-2 sm:space-y-4 pt-4">
            <div tw="text-sm font-semibold text-gray-400 tracking-wider uppercase">
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
  );
}
