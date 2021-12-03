import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Disclaimer from "./disclaimer";

import FormattedDate from "./formattedDate";
import Icon from "./icon";
import Link from "./link";

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
  const showDisclaimer = mdx?.meta?.disclaimer || i18n.disclaimer;
  return (
    <div tw="flex" {...rest}>
      <div tw="flex-auto">
        <div tw="space-y-2">
          {preHeader && (
            <Link
              tw="!text-primary-dark !no-underline text-xl leading-6 font-semibold tracking-wide uppercase"
              to={preHeader.link}
            >
              {preHeader.title}
            </Link>
          )}
          {header && (
            <h1 tw="!mb-2 text-2xl font-bold text-shade-darkest leading-tight sm:text-3xl ">
              {header}
            </h1>
          )}
        </div>
        <div tw="flex space-x-4">
          {date && (
            <SubItem title={ui.published}>
              <FormattedDate date={date} />
            </SubItem>
          )}
          {updated && (
            <SubItem icon="update" title={ui.updated}>
              <FormattedDate date={updated} />
            </SubItem>
          )}
          {author && (
            <SubItem icon="pen" title={ui.author}>
              {author}
            </SubItem>
          )}
        </div>
      </div>
      {showDisclaimer && (
        <div tw="hidden md:block">
          <Disclaimer type="micro" />
        </div>
      )}
    </div>
  );
}
