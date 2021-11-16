import React from "react";
import "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

import Icon from "./icon";
import PopDownMenu from "./popDownMenu";

const SubMenuItem = ({ item: { name, icon, link, description } }) => {
  return (
    <LocalizedLink
      to={link}
      tw="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <Icon
        icon={icon}
        tw="flex-shrink-0 h-6 w-6 text-indigo-600"
        aria-hidden="true"
      />
      <div tw="ml-4">
        <p tw="text-base font-medium text-gray-900">{name}</p>
        <p tw="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </LocalizedLink>
  );
};

export default function MainMenuSubMenu({ items }) {
  return (
    <PopDownMenu>
      {items.map((item) => (
        <SubMenuItem key={item.key} item={item} />
      ))}
      {/* 
        TODO add some calls to action
        via PopDownMenu cta
      */}
    </PopDownMenu>
  );
}
