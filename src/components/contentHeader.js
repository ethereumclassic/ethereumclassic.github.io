import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Disclaimer from "./disclaimer";

import FormattedDate from "./formattedDate";
import Icon from "./icon";
import Link from "./link";

function SubItem({ children, icon, ...rest }) {
  return (
    <div tw="text-gray-400 flex items-center" {...rest}>
      {icon && <Icon icon={icon} tw="h-3 mr-1" />}
      {children}
    </div>
  );
}

export default function ContentHeader({ mdx, i18n }) {
  const { ui, section } = useGlobals();
  const articleHeader = mdx?.headings[0]?.value;
  const { title, date, author, updated } = mdx?.meta || i18n;
  const header = articleHeader || title;
  const showDisclaimer = mdx?.meta?.disclaimer || i18n.disclaimer;
  return (
    <>
      <div tw="flex">
        <div tw="flex-auto">
          <div tw="space-y-2">
            {section?.header && (
              <Link
                tw="!text-green-600 !no-underline text-xl leading-6 font-semibold tracking-wide uppercase"
                to={section.header.link}
              >
                {section.header.title}
              </Link>
            )}
            {header && (
              <h1 tw="!mb-2 text-2xl font-bold text-gray-900 leading-tight sm:text-3xl ">
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
          <div>
            <Disclaimer inline micro />
          </div>
        )}
      </div>
    </>
  );
}
