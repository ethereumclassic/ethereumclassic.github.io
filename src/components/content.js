import React from "react";
import "twin.macro";
import ContentHeader from "./contentHeader";

import ContentPrevNext from "./contentPrevNext";
import ContentSidebar from "./contentSidebar";
import ContentTOC from "./contentTOC";
import Contributors from "./contributors";
import Divider from "./divider";
import Generic from "./generic";
import Json from "./json";
import MarkdownStatic from "./markdownStatic";
import TwContainer from "./twContainer";

export default function Content({ data: { mdx, contributors }, i18n }) {
  return (
    <TwContainer grid>
      <div tw="hidden md:block md:col-span-3 lg:col-span-2">
        <nav tw="sticky top-24 divide-y divide-gray-300 mt-10">
          <ContentSidebar />
        </nav>
      </div>
      <main tw="col-span-full md:col-span-9 lg:col-span-7 mt-10">
        <article tw="prose dark:prose-light max-w-none">
          <ContentHeader {...{ mdx, i18n }} />
          {mdx ? (
            <MarkdownStatic {...{ mdx, i18n }} />
          ) : (
            <Generic {...{ i18n }} />
          )}
        </article>
        {/* <Json data={{ mdx, i18n }} /> */}
        <Divider />
        <Contributors contributors={contributors} />
        <ContentPrevNext />
      </main>
      <aside tw="hidden lg:block lg:col-span-3 mt-10">
        <div tw="sticky top-24 space-y-4 ">
          <ContentTOC {...{ mdx, i18n }} />
        </div>
      </aside>
    </TwContainer>
  );
}
