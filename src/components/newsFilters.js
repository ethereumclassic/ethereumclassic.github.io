import React from "react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import Icon from "./icon";

function NewsFilterBlock({ items, title, icon, inline }) {
  return (
    <div
      css={[
        tw`text-sm`,
        !inline && tw`border-shade-lighter border-l pl-6 py-2`,
      ]}
    >
      <div
        css={[
          tw`inline-flex space-x-2 text-sm items-baseline uppercase tracking-widest text-shade-light select-none`,
          !inline ? tw`flex items-center mb-2` : tw`mr-2`,
        ]}
      >
        <Icon icon={icon} tw="h-3 w-3" />
        <span>{title}</span>
      </div>
      {items.map(({ key, link, name, selected }) => (
        <LocalizedLink
          key={key}
          to={link}
          css={[
            tw`inline-flex items-center hocus:text-shade-darker text-shade-neutral mr-2 mb-1 px-1.5 py-0.5 bg-backdrop-light shadow-sm rounded-md hover:bg-shade-lightest`,
            selected
              ? tw`font-bold text-primary-dark bg-primary-lightest`
              : tw`font-normal`,
          ]}
        >
          {key === "blog" && <Icon icon="news" tw="w-3 mr-2" />}
          <span>{name}</span>
        </LocalizedLink>
      ))}
    </div>
  );
}

export default function NewsFilters({ i18n, pageContext, inline }) {
  const {
    ui: { tagNames, tags },
  } = useGlobals();
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
        title={tags}
        items={allTags
          .map((tag) => ({
            key: tag,
            link: `/${basePath}/tag/${tag}`,
            name: tagNames[tag] || tag,
            selected: filter === tag,
          }))
          // sort by name but make `blog` appear first
          .sort((a, b) => {
            if (a.key === "blog") return -1;
            if (b.key === "blog") return 1;
            return a.name.localeCompare(b.name);
          })}
      />
    </>
  );
}
