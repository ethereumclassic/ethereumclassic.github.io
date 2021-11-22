import React from "react";
import "twin.macro";

import NewsFilters from "./newsFilters";
import NewsItem from "./newsItem";
import NewsPagination from "./newsPagination";
import Link from "./link";

import Icon from "./icon";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Disclaimer from "./disclaimer";

export default function News({ pageContext, data, i18n }) {
  const { isDefaultLocale, locale } = useLocalization();
  // TODO make top padding match other pages
  return (
    <div tw="pb-10">
      <div tw="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <main tw="lg:col-span-9 relative">
          <div tw="flex py-10">
            <div tw="flex-auto space-y-1">
              <h1 tw="text-2xl font-bold text-gray-800">{i18n.title}</h1>
              <p tw="text-sm text-gray-500">{i18n.description}</p>
            </div>
            <Disclaimer />
          </div>
          <div tw="sticky z-20 top-16 bg-gray-100 pt-6 mb-6 -mx-4 px-4">
            <NewsPagination {...{ pageContext }} />
          </div>
          <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageContext.currentPage === 1 && (
              <Link
                tw="col-span-3 border-2 border-dashed border-gray-400 hover:bg-gray-200 flex items-center justify-center space-x-4 p-2"
                to="https://github.com/ethereumclassic.github.io"
              >
                <Icon icon="plus" tw="h-5" />
                <div>Earn ETC by submitting your own links!</div>
              </Link>
            )}
            {data.items.edges.map(({ node }) => (
              <NewsItem key={node.id} {...node} lines={3} />
            ))}
          </div>
        </main>
        <aside tw="col-span-3">
          <div tw="sticky top-24 space-y-4 mt-10">
            <NewsFilters {...{ pageContext, i18n }} />
            <Link
              to={isDefaultLocale ? "/rss.xml" : `/rss-${locale}.xml`}
              icon="feed"
              button
            >
              {i18n.rss}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
