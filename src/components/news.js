import React from "react";
import "twin.macro";

import NewsFilters from "./newsFilters";
import NewsItem from "./newsItem";
import Pagination from "./pagination";
import Link from "./link";

import Icon from "./icon";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Disclaimer from "./disclaimer";
import TwContainer from "./twContainer";

export default function News({ pageContext, data, i18n }) {
  const { isDefaultLocale, locale } = useLocalization();
  // TODO make top padding match other pages
  return (
    <TwContainer grid>
      <main tw="col-span-full md:col-span-9 relative mt-5 md:mt-8">
        <div tw="flex space-x-2">
          <div tw="flex-auto space-y-1 mb-2">
            <h1 tw="text-2xl font-bold text-shade-darker">{i18n.title}</h1>
            <p tw="text-sm text-shade-neutral">{i18n.description}</p>
          </div>
          <div tw="hidden lg:block">
            <Disclaimer type="mini" />
          </div>
        </div>
        <div tw="md:hidden space-y-1 sm:space-y-3 mt-4">
          <NewsFilters {...{ pageContext, i18n }} inline />
        </div>
        <div tw="sticky z-20 top-14 bg-backdrop-dark mb-4 pt-1 mt-1">
          <Pagination {...{ pageContext }} scrollTo="content-top" />
        </div>
        <div
          id="content-top"
          tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3"
        >
          {pageContext.currentPage === 1 && pageContext.filter !== "blog" && (
            <>
              <div tw="lg:hidden col-span-full">
                <Disclaimer type="inline" />
              </div>
              <Link
                tw="col-span-full border-2 rounded-lg border-dashed text-shade-light  bg-backdrop-light border-shade-lighter hover:text-shade-neutral hover:bg-backdrop-dark flex items-center justify-center space-x-4 p-3"
                to="https://github.com/ethereumclassic.github.io"
              >
                <Icon icon="plus" tw="h-5" />
                <div>Earn ETC by submitting your own links!</div>
              </Link>
            </>
          )}
          {data.items.edges.map(({ node }) => (
            <NewsItem key={node.id} {...node} lines={3} />
          ))}
        </div>
      </main>
      <aside tw="hidden md:block md:col-span-3">
        <div tw="sticky top-20 space-y-4">
          <NewsFilters {...{ pageContext, i18n }} />
          <div tw="text-center">
            <Link
              to={isDefaultLocale ? "/rss.xml" : `/rss-${locale}.xml`}
              icon="feed"
              button
            >
              {i18n.rss}
            </Link>
          </div>
        </div>
      </aside>
    </TwContainer>
  );
}
