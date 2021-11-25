import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Disclaimer from "./disclaimer";

import FormattedDate from "./formattedDate";

function SubItem({ children }) {
  return <div tw="text-gray-400">{children}</div>;
}

export default function ContentHeader({ mdx, i18n }) {
  const { ui } = useGlobals();
  const articleHeader = mdx?.headings[0]?.value;
  const { title, date, author, updated } = mdx?.meta || i18n;
  const header = articleHeader || title;
  const showDisclaimer = mdx?.meta?.disclaimer || i18n.disclaimer;
  return (
    <>
      <div tw="flex">
        <div tw="flex-auto">
          {header && (
            <h1 tw="!mb-2 text-2xl font-bold text-gray-900 leading-tight sm:text-3xl ">
              {header}
            </h1>
          )}
          <div tw="flex space-x-4">
            {author && <SubItem>{author}</SubItem>}
            {date && (
              <SubItem>
                <FormattedDate date={date} />
              </SubItem>
            )}
            {updated && (
              <SubItem>
                {ui.updated} <FormattedDate date={updated} />
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
