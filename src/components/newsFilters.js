import React from "react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

import Icon from "./icon";

function NewsFilterBlock({ items, title, icon }) {
  return (
    <div tw="text-sm border-gray-300 border-l space-y-3 pl-6">
      <div tw="mb-4 flex items-center space-x-2 uppercase tracking-widest text-gray-400 select-none">
        <Icon icon={icon} tw="h-3" />
        <span>{title}</span>
      </div>
      <div tw="leading-relaxed">
        {items.map(({ key, link, name, selected }) => (
          <React.Fragment key={key}>
            <LocalizedLink
              key={key}
              to={link}
              css={[
                tw`hocus:text-gray-800 text-gray-500  whitespace-nowrap mr-2`,
                selected ? tw`font-bold text-gray-800` : tw`font-normal`,
              ]}
            >
              {name}
            </LocalizedLink>{" "}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function NewsFilters({ i18n, pageContext }) {
  const { allYears, allTags, basePath, filter } = pageContext;
  return (
    <div tw="space-y-6">
      <NewsFilterBlock
        icon="calendar"
        title={i18n.years}
        items={allYears.map((year) => ({
          key: year,
          link: `/${basePath}/year/${year}`,
          name: year,
          selected: `${filter}` === year,
        }))}
      />
      <NewsFilterBlock
        icon="tag"
        title={i18n.tags}
        items={allTags.map((tag) => ({
          key: tag,
          link: `/${basePath}/tag/${tag}`,
          name: i18n.tagNames[tag] || tag,
          selected: filter === tag,
        }))}
      />
    </div>
  );
}
