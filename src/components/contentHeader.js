import React from "react";
import "twin.macro";

import FormattedDate from "./formattedDate";

export default function ContentHeader({ mdx, i18n }) {
  // TODO author etc.
  // const title =
  const articleHeader = mdx?.headings[0]?.value;
  const { title, date, author, updated } = mdx?.meta || i18n;
  const header = articleHeader || title;
  return (
    <>
      {header && <h1>{header}</h1>}
      {date && <FormattedDate date={date} />}
      {updated && (
        <span>
          Last updated <FormattedDate date={updated} />
        </span>
      )}
      {author && <div>{author}</div>}
    </>
  );
}
