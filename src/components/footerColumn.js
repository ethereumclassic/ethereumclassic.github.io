import React from "react";
import "twin.macro";
import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

export default function FooterColumn({ item: { name, navItems } }) {
  return (
    <div>
      <h3 tw="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        {name}
      </h3>
      <ul tw="mt-4 space-y-4">
        {navItems.map(({ key, name, link }) => (
          <li key={key}>
            <LocalizedLink
              to={link}
              tw="text-base text-gray-500 hover:text-gray-900"
            >
              {name}
            </LocalizedLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
