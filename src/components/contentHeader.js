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
    <div tw="text-shade-light flex items-center" {...rest}>
      {icon && <Icon icon={icon} tw="h-3 mr-1" />}
      {children}
    </div>
  );
}

export default function ContentHeader({ mdx, i18n, pre, ...rest }) {
  const { ui, section } = useGlobals();
  const preHeader = pre || section?.header || {};
  const articleHeader = mdx?.headings?.[0]?.value;
  const { title, date, author, updated } = mdx?.meta || i18n;
  const header = articleHeader || title;
  const disclaimer = mdx?.meta?.disclaimer || i18n.disclaimer;
  const info = mdx?.meta?.info || i18n.info;
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
          <div tw="flex space-x-4">
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
          </div>
        </div>
        {disclaimer && (
          <div tw="hidden md:block ml-4">
            <Disclaimer type="micro" text={disclaimer} />
          </div>
        )}
      </div>
      {info && (
        <Md tw="text-sm bg-backdrop-light p-3 my-6 shadow-sm rounded-md" unwrap>
          {info}
        </Md>
      )}
    </>
  );
}
