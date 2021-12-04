/* This Sidebar requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import tw from "twin.macro";

import Icon from "./icon";
import Link from "./link";

function Item({ item: { name, link, icon, current } }) {
  return (
    <Link
      to={link}
      className="group"
      css={[
        tw`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-shade-lightest hover:text-shade-darkest`,
        current ? tw`text-shade-darkest` : tw`text-shade-neutral`,
      ]}
    >
      <Icon
        icon={icon}
        css={[
          tw`flex-shrink-0 -ml-1 mr-2 h-4`,
          current
            ? tw`text-shade-neutral`
            : tw`text-shade-light group-hover:text-shade-neutral`,
        ]}
      />
      <span tw="truncate">{name}</span>
    </Link>
  );
}

function SubItem({ small, item: { name, link, current } }) {
  return (
    <Link
      to={link}
      className="group"
      css={[
        tw`flex items-center px-3 py-2 text-sm font-light text-shade-neutral hover:bg-shade-lightest hover:text-shade-darkest`,
        current
          ? tw`text-shade-darker font-bold`
          : tw`text-shade-neutral font-light`,
        small && tw`py-1 border-l-2 pl-3 border-shade-lighter`,
      ]}
    >
      <span tw="truncate">{name}</span>
    </Link>
  );
}

export default function ContentSidebarVertical({ items }) {
  return (
    <div css={[tw`space-y-1 -ml-1`]}>
      {items.map((item) => (
        <div key={item.key}>
          <Item item={item} />
          {item.navItems && item.current && (
            <div
              tw="ml-3 mb-2 border-l-2 border-shade-lighter"
              aria-labelledby="projects-headline"
            >
              {item.navItems.map((subItem) => (
                <Fragment key={subItem.key}>
                  <SubItem item={subItem} />
                  {subItem.current &&
                    (subItem.navItems || []).map((subSubItem) => (
                      <SubItem key={subSubItem.key} item={subSubItem} small />
                    ))}
                </Fragment>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
