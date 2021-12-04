import React from "react";
import "twin.macro";

import ContentHeader from "./contentHeader";

import Md from "./markdownDynamic";

export default function VideosHeader({ pageContext, data, i18n }) {
  // check if we are a tag
  const filter = pageContext.filter && i18n.tags[pageContext.filter];
  const content = filter || i18n;
  content.disclaimer = true;
  return (
    <>
      <ContentHeader i18n={content} />
      {content.description && <Md>{content.description}</Md>}
    </>
  );
}
