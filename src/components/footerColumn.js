import React from "react";
import "twin.macro";
import Link from "./link";
import RssLink from "./rssLink";

export default function FooterColumn({ item: { name, navItems } }) {
  return (
    <div>
      <h3 tw="text-sm font-semibold text-shade-light tracking-wider uppercase">
        {name}
      </h3>
      <ul tw="mt-4 space-y-2 md:space-y-4">
        {navItems.map(({ key, name, link, rss }) => {
          const Comp = rss ? RssLink : Link;
          return (
            <li key={key}>
              <Comp
                to={link}
                tw="text-sm md:text-base text-shade-neutral hover:text-shade-darkest"
              >
                {name}
              </Comp>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
