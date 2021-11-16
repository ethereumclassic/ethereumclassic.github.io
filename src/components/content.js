import React from "react";
import "twin.macro";

import ContentPrevNext from "./contentPrevNext";
import ContentSidebar from "./contentSidebar";
import ContentTOC from "./contentTOC";

import Generic from "./generic";
import Json from "./json";
import MarkdownStatic from "./markdownStatic";

// TODO potentially split this into two separate templates for better tree shaking

export default function Content({ data: { mdx }, i18n }) {
  // console.log(data);
  // return null;
  return (
    <div tw="py-10">
      <div tw="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <div tw="hidden lg:block lg:col-span-3 xl:col-span-2">
          <nav tw="sticky top-24 divide-y divide-gray-300">
            <ContentSidebar />
          </nav>
        </div>
        <main tw="lg:col-span-9 xl:col-span-7">
          <article tw="prose dark:prose-light max-w-none">
            {mdx ? (
              <MarkdownStatic mdx={mdx} i18n={i18n} />
            ) : (
              <Generic i18n={i18n} />
            )}
          </article>
          {/* <Json data={{ mdx, i18n }} /> */}
          <ContentPrevNext />
        </main>
        <aside tw="hidden xl:block xl:col-span-3">
          <div tw="sticky top-24 space-y-4">
            <ContentTOC mdx={mdx} i18n={i18n} />
          </div>
        </aside>
      </div>
    </div>
  );
}
