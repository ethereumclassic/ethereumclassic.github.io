import React from "react";
import "twin.macro";

import ContentFooter from "./contentFooter";
import ContentHeader from "./contentHeader";
import ContentSidebar from "./contentSidebar";
import ContentTOC from "./contentTOC";
import Generic from "./generic";

import MarkdownStatic from "./markdownStatic";
import TwContainer from "./twContainer";

export default function Content({ data: { mdx, contributors }, i18n }) {
  return (
    <TwContainer grid>
      <div tw="hidden md:block md:col-span-3 lg:col-span-2">
        <nav tw="sticky top-24 mt-10">
          <ContentSidebar />
        </nav>
      </div>
      <main tw="col-span-full md:col-span-9 lg:col-span-7 mt-10">
        <ContentSidebar inline tw="sticky top-16 md:hidden z-40" />
        <article tw="prose dark:prose-light max-w-none">
          <ContentHeader {...{ mdx, i18n }} />
          {mdx ? (
            <MarkdownStatic {...{ mdx, i18n }} />
          ) : (
            <Generic {...{ i18n }} />
          )}
        </article>
        <ContentFooter {...{ mdx, i18n, contributors }} />
      </main>
      <aside tw="hidden lg:block lg:col-span-3 mt-10">
        <div tw="sticky top-24 space-y-4 ">
          <ContentTOC {...{ mdx, i18n }} />
        </div>
      </aside>
    </TwContainer>
  );
}
