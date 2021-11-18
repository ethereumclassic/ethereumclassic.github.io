import React from "react";
import "twin.macro";

import NewsFilters from "./newsFilters";
import NewsItem from "./newsItem";
import NewsPagination from "./newsPagination";
import Link from "./link";

import Icon from "./icon";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function News(pageData) {
  const { isDefaultLocale, locale } = useLocalization();
  // TODO make top padding match other pages
  return (
    <div tw="pb-10">
      <div tw="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <main tw="lg:col-span-9 relative">
          <div tw="sticky top-4 bg-gray-100 pt-6 mb-6">
            <div tw="flex">
              <h1 tw="text-xl mb-6 flex-auto">News</h1>
              <small>TODO Disclaimer</small>
            </div>
            <NewsPagination {...pageData} />
          </div>
          <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {pageData.pageContext.currentPage === 1 && (
              <Link
                tw="col-span-3 border-2 border-dashed border-gray-400 hover:bg-gray-200 flex items-center justify-center space-x-4 p-2"
                to="https://github.com/ethereumclassic.github.io"
              >
                <Icon icon="plus" tw="h-5" />
                <div>Earn ETC by submitting your own links!</div>
              </Link>
            )}
            {pageData.data.items.edges.map(({ node }) => (
              <NewsItem key={node.id} id={node.link} {...node} />
            ))}
          </div>
        </main>
        <aside tw="block col-span-3">
          <div tw="sticky top-24 space-y-4">
            <NewsFilters {...pageData} />
            <div tw="mt-20">
              <Link
                to={isDefaultLocale ? "/rss.xml" : `/rss-${locale}.xml`}
                button
              >
                RSS
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
