import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Disclaimer from "./disclaimer";

import FormattedDate from "./formattedDate";
import Icon from "./icon";
import Link from "./link";
import Md from "./markdownDynamic";

function SubItem({ children, icon, ...rest }) {
  return (
    <div tw="text-shade-light flex items-center mr-4" {...rest}>
      {icon && <Icon icon={icon} tw="h-3 mr-1" />}
      <span tw="whitespace-nowrap">{children}</span>
    </div>
  );
}

export default function ContentHeader({ mdx, i18n, pre, ...rest }) {
  const { ui, section } = useGlobals();
  const preHeader = pre || section?.header || {};
  const globalDisclaimer = section?.globalDisclaimer;
  const articleHeader = mdx?.headings?.[0]?.value;
  const { title, date, author, updated } = mdx?.meta || i18n;
  const header = articleHeader || title;
  const disclaimer = mdx?.meta?.disclaimer || i18n.disclaimer;
  const info = mdx?.meta?.info || i18n.info;
  const tags = mdx?.meta?.tags
    ?.map((tag) => ({
      key: tag,
      name: ui.tagNames[tag] || tag,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <div tw="flex" {...rest}>
        <div tw="flex-auto">
          <div tw="space-y-2">
            {preHeader && (
              <Link
                tw="!text-primary-dark !no-underline text-xl leading-6 font-semibold font-display"
                to={preHeader.link}
              >
                {preHeader.title}
              </Link>
            )}
            {header && (
              <h1 tw="!mb-2 !leading-snug text-2xl font-bold text-shade-darkest sm:text-3xl">
                {header}
              </h1>
            )}
          </div>
          <div tw="flex flex-wrap">
            {date && (
              <SubItem title={ui.published}>
                <FormattedDate long date={date} />
              </SubItem>
            )}
            {updated && (
              <SubItem icon="update" title={ui.updated}>
                <FormattedDate long date={updated} />
              </SubItem>
            )}
            {author && (
              <SubItem icon="pen" title={ui.author}>
                {author}
              </SubItem>
            )}
            {tags && (
              <SubItem icon="tag" title={ui.tags}>
                {tags.map(({ name }) => name).join(", ")}
              </SubItem>
            )}
          </div>
        </div>
        {disclaimer && (
          <div tw="hidden md:block ml-4">
            <Disclaimer type="micro" text={disclaimer} />
          </div>
        )}
      </div>
      {globalDisclaimer && (
        <div tw="text-xs mt-4 text-shade-light italic">{ui.disclaimer}</div>
      )}
      {info && (
        <Md tw="text-sm bg-backdrop-light p-3 my-6 shadow-sm rounded-md" unwrap>
          {info}
        </Md>
      )}
    </>
  );
}
