import React from "react";
import tw from "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import { useNavigation } from "../utils/navigationProvider";

import ContentFooter from "./contentFooter";
import ContentHeader from "./contentHeader";
import ContentSidebarInline from "./contentSidebarInline";
import ContentSidebarVertical from "./contentSidebarVertical";
import ContentTOC from "./contentTOC";
import Generic from "./generic";

import MarkdownStatic from "./markdownStatic";
import TwContainer from "./twContainer";

function mapToc(item, i18n = item) {
  if (item.title) {
    return {
      title: item.title,
      items: (item.items || []).map((i) => mapToc(i, i18n)).filter((i) => i),
    };
  }
  return null;
}

export default function Content({ data: { mdx, contributors }, i18n }) {
  // pull up the sidebar content to dynamically sho/hide columns for better alignment
  const { sub } = useNavigation();
  const toc = mdx?.headings[0]
    ? mdx?.toc.items[0].items
    : mdx?.toc.items ?? [mapToc(i18n)].filter((i) => i)[0]?.items;
  const showLeft = sub?.navItems.length > 0;
  const showRight = toc?.length > 0;
  return (
    <TwContainer grid>
      {showLeft && (
        <div tw="hidden md:block md:col-span-3 lg:col-span-2">
          <nav tw="sticky top-24 mt-10">
            <ContentSidebarVertical items={sub.navItems} />
          </nav>
        </div>
      )}
      <main
        css={[
          tw`col-span-full md:col-span-9 lg:col-span-8 xl:col-span-7 mt-10`,
          !showRight && showLeft && tw`lg:col-span-9 xl:col-span-8`,
          showRight &&
            !showLeft &&
            tw`md:col-span-full lg:col-start-2 xl:col-start-2 lg:col-span-8 xl:col-span-7`,
          !showRight &&
            !showLeft &&
            tw`lg:col-start-3 lg:col-span-8 md:col-span-full`,
        ]}
      >
        {showLeft && (
          <nav tw="sticky top-16 md:hidden z-40">
            <ContentSidebarInline items={sub.navItems} />
          </nav>
        )}
        <article tw="prose max-w-none">
          <ContentHeader {...{ mdx, i18n }} />
          {mdx ? (
            <MarkdownStatic {...{ mdx, i18n }} />
          ) : (
            <Generic {...{ i18n }} />
          )}
        </article>
        <ContentFooter {...{ mdx, i18n, contributors }} />
      </main>
      {showRight && (
        <aside
          css={[
            tw`hidden lg:block lg:col-span-2 xl:col-span-3 mt-10`,
            !showLeft && tw`lg:col-span-3`,
            // !showLeft && !showRight tw``,
          ]}
        >
          <div tw="sticky top-24 space-y-4 ">
            <ContentTOC items={toc} />
          </div>
        </aside>
      )}
    </TwContainer>
  );
}
