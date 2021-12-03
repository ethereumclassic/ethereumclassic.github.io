import React from "react";
import "twin.macro";

import Md from "./markdownDynamic";

export default function VideosHeader({ pageContext, data, i18n }) {
  // check if we are a tag
  const filter = (pageContext.filter && i18n.tags[pageContext.filter]) || {};
  return (
    <>
      {/* <Json {...{ pageContext, data, i18n }} /> */}
      <h1>{filter.title || i18n.title}</h1>
      {/* <ContentHeader i18n={i18n} /> */}
      {filter.description && <Md>{filter.description}</Md>}
      {/* <div tw="flex-auto space-y-1 mb-2">
        <h1 tw="text-2xl font-bold text-shade-darker">{i18n.title}</h1>
        <p tw="text-sm text-shade-neutral">{i18n.description}</p>
      </div> */}
    </>
  );
}
