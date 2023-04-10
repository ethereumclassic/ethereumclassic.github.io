import React from "react";
import "twin.macro";

import NewsFilters from "./newsFilters";
import NewsItem from "./newsItem";
import Pagination from "./pagination";
import Link from "./link";

import Icon from "./icon";
import Disclaimer from "./disclaimer";
import TwContainer from "./twContainer";
import NoItems from "./noItems";
import RssLink from "./rssLink";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function News({ pageContext, data, i18n }) {
  const {
    ui: { tagNames },
  } = useGlobals();
  return (
    <TwContainer grid>
      <main tw="col-span-full md:col-span-9 relative mt-5 md:mt-8">
        <div tw="flex space-x-2">
          <div tw="flex-auto space-y-1 mb-2">
            <h1 tw="text-2xl font-bold text-shade-darker">
              <Link to="/news">{i18n.title}</Link>
            </h1>
            {pageContext.filter && (
              <h2 tw="font-display text-primary-dark leading-6 font-semibold tracking-wide text-lg">
                {tagNames[pageContext.filter] || pageContext.filter}
              </h2>
            )}
          </div>
          <div tw="hidden lg:block">
            <Disclaimer type="mini" text="verify" />
          </div>
        </div>
        <div id="content-top" tw="absolute mt-20" />
        <div tw="md:hidden space-y-1 sm:space-y-3 mt-4">
          <NewsFilters {...{ pageContext, i18n }} inline />
        </div>
        <div tw="sticky z-20 top-14 bg-backdrop-dark mb-4 pt-1 mt-1">
          <Pagination {...{ pageContext }} scrollTo="content-top" />
        </div>
        <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {pageContext.currentPage === 1 && !pageContext.isDefaultLocale && (
            <Link
              notLocalized
              tw="text-sm col-span-full bg-primary-lightest text-primary-neutral border border-primary-lighter hover:bg-primary-lighter hover:text-primary-dark rounded-md flex items-center justify-center space-x-4 p-3"
              to={pageContext.filterBase}
            >
              <Icon icon="language" tw="h-5" />
              <div>{i18n.changeLanguage}</div>
            </Link>
          )}
          {pageContext.currentPage === 1 && pageContext.filter !== "blog" && (
            <>
              <div tw="lg:hidden col-span-full">
                <Disclaimer type="inline" text="verify" />
              </div>
              <Link
                tw="text-sm col-span-full border-2 rounded-lg border-dashed text-shade-light  bg-backdrop-light border-shade-lighter hover:text-shade-neutral hover:bg-backdrop-dark flex items-center justify-center space-x-4 p-3"
                to="https://github.com/ethereumclassic/ethereumclassic.github.io#contribute"
              >
                <Icon icon="plus" tw="h-5" />
                <div>{i18n.support}</div>
              </Link>
            </>
          )}
          {!data.items.edges.length && <NoItems />}
          {data.items.edges.map(({ node }) => (
            <NewsItem key={node.id} item={node} lines={3} />
          ))}
        </div>
      </main>
      <aside tw="hidden md:block md:col-span-3">
        <div tw="sticky top-20 space-y-4">
          <NewsFilters {...{ pageContext, i18n }} />
          <div tw="text-center">
            <RssLink icon="feed" button>
              {i18n.rss}
            </RssLink>
          </div>
        </div>
      </aside>
    </TwContainer>
  );
}
