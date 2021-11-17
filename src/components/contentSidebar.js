/* This Sidebar requires Tailwind CSS v2.0+ */
import React from "react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

import { useNavigation } from "../utils/navigationProvider";
import Icon from "./icon";

function SidebarItem({ item: { name, link, icon, current } }) {
  return (
    <LocalizedLink
      to={link}
      className="group"
      css={[
        tw`flex items-center px-3 py-2 text-sm font-medium rounded-md`,
        current
          ? tw`bg-gray-100 text-gray-900`
          : tw`text-gray-500 hover:bg-gray-50 hover:text-gray-900`,
      ]}
      aria-current={current ? "page" : undefined}
    >
      <Icon
        icon={icon}
        css={[
          tw`flex-shrink-0 -ml-1 mr-3 h-6 w-6`,
          current
            ? tw`text-gray-500`
            : tw`text-gray-400 group-hover:text-gray-500`,
        ]}
        aria-hidden="true"
      />
      <span tw="truncate">{name}</span>
    </LocalizedLink>
  );
}

function SideBarSubItem({ item: { name, key, link, current } }) {
  return (
    <LocalizedLink
      to={link}
      className="group"
      css={[
        tw`flex items-center px-3 py-2 text-sm font-light text-gray-600 hover:text-gray-900 hover:bg-gray-50`,
        current ? tw`text-gray-800 font-bold` : tw`text-gray-600 font-light`,
      ]}
    >
      <span tw="truncate">{name}</span>
    </LocalizedLink>
  );
}

export default function Sidebar() {
  const { sub } = useNavigation();
  if (!sub?.navItems) {
    return null;
  }
  return (
    <nav aria-label="Sidebar">
      <div tw="space-y-1">
        {sub.navItems.map((item) => (
          <div key={item.key}>
            <SidebarItem item={item} />
            {item.navItems && item.current && (
              <div
                tw="ml-3 mb-2 border-l-2 border-gray-300"
                aria-labelledby="projects-headline"
              >
                {item.navItems.map((subItem) => (
                  <SideBarSubItem key={subItem.key} item={subItem} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
