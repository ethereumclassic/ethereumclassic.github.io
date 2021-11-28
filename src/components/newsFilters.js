import React from "react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

import Icon from "./icon";

function NewsFilterBlock({ items, title, icon, inline }) {
  return (
    <div
      css={[
        tw`text-sm`,
        inline
          ? tw`flex items-start space-x-4`
          : tw`border-shade-light border-l space-y-3 pl-6`,
      ]}
    >
      <div>
        <div
          css={[
            tw`flex text-sm items-center space-x-2 uppercase tracking-widest text-shade-light select-none`,
            inline && tw`w-16`,
          ]}
        >
          <Icon icon={icon} tw="h-3" />
          <span>{title}</span>
        </div>
      </div>
      <div tw="md:leading-relaxed flex-shrink">
        {items.map(({ key, link, name, selected }) => (
          <React.Fragment key={key}>
            <LocalizedLink
              key={key}
              to={link}
              css={[
                tw`hocus:text-shade-darker text-shade-neutral  whitespace-nowrap mr-2`,
                selected ? tw`font-bold text-shade-darker` : tw`font-normal`,
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

export default function NewsFilters({ i18n, pageContext, inline }) {
  const { allYears, allTags, basePath, filter } = pageContext;
  return (
    <>
      <NewsFilterBlock
        inline={inline}
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
        inline={inline}
        icon="tag"
        title={i18n.tags}
        items={allTags.map((tag) => ({
          key: tag,
          link: `/${basePath}/tag/${tag}`,
          name: i18n.tagNames[tag] || tag,
          selected: filter === tag,
        }))}
      />
    </>
  );
}
