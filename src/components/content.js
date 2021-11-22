import React from "react";
import "twin.macro";

import ContentPrevNext from "./contentPrevNext";
import ContentSidebar from "./contentSidebar";
import ContentTOC from "./contentTOC";
import Contributors from "./contributors";

import Generic from "./generic";
import Json from "./json";
import MarkdownStatic from "./markdownStatic";

export default function Content({ data: { mdx, contributors }, i18n }) {
  // if we have content, resolve refs
  return (
    <div tw="py-10">
      <div tw="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <div tw="hidden lg:block lg:col-span-2">
          <nav tw="sticky top-24 divide-y divide-gray-300">
            <ContentSidebar />
          </nav>
        </div>
        <main tw="lg:col-span-7">
          <article tw="prose dark:prose-light max-w-none">
            {mdx ? (
              <MarkdownStatic mdx={mdx} i18n={i18n} />
            ) : (
              <Generic i18n={i18n} />
            )}
          </article>
          {/* <Json data={{ mdx, i18n }} /> */}
          <Contributors contributors={contributors} />
          <ContentPrevNext />
        </main>
        <aside tw="hidden lg:block lg:col-span-3">
          <div
            tw="sticky top-24 space-y-4 max-h-screen overflow-y-auto"
            css={{ maxHeight: "70vh" }}
          >
            <ContentTOC mdx={mdx} i18n={i18n} />
          </div>
        </aside>
      </div>
    </div>
  );
}
