import React from "react";
import "twin.macro";

import Pagination from "./pagination";
import Content from "./content";
import ContentHeader from "./contentHeader";
import Markdown from "./markdownDynamic";

export default function TaggedContent({ children, pageContext, i18n }) {
  return (
    <Content max i18n={{ disclaimer: "verify" }}>
      <ContentHeader i18n={i18n} />
      {i18n.description && (
        <Markdown tw="prose max-w-2xl">{i18n.description}</Markdown>
      )}
      <div id="content-top" />
      <div tw="sticky z-20 top-32 md:top-14 bg-backdrop-dark mb-4 pt-1 mt-1">
        <Pagination {...{ pageContext }} scrollTo="content-top" />
      </div>
      <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
        {children}
      </div>
    </Content>
  );
}
