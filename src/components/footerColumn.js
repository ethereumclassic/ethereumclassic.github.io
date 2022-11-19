import React from "react";
import "twin.macro";
import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import RssLink from "./rssLink";

export default function FooterColumn({ item: { name, navItems } }) {
  return (
    <div>
      <h3 tw="text-sm font-semibold text-shade-light tracking-wider uppercase">
        {name}
      </h3>
      <ul tw="mt-4 space-y-2 md:space-y-4">
        {navItems.map(({ key, name, link, rss }) => (
          <li key={key}>
            {rss ? (
              <RssLink>{name}</RssLink>
            ) : (
              <LocalizedLink
                to={link}
                tw="text-sm md:text-base text-shade-neutral hover:text-shade-darkest"
              >
                {name}
              </LocalizedLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
