import React from "react";
import "twin.macro";

import Link from "./link";

import Icon from "./icon";
import VideosItem from "./videosItem";
import NoItems from "./noItems";

export default function Videos({ pageContext, data, i18n }) {
  return (
    <>
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
      {pageContext.currentPage === 1 && pageContext.filter === undefined && (
        <>
          <Link
            tw="text-sm col-span-full border-2 rounded-lg border-dashed text-shade-light  bg-backdrop-light border-shade-lighter hover:text-shade-neutral hover:bg-backdrop-dark flex items-center justify-center space-x-4 p-3"
            to="https://github.com/ethereumclassic/ethereumclassic.github.io#contribute"
          >
            <Icon icon="plus" tw="h-5" />
            <div>{i18n.support}</div>
          </Link>
          {data.featured.edges.map(({ node }) => (
            <VideosItem key={node.id} item={node} featured />
          ))}
        </>
      )}
      {!data.items.edges.length && <NoItems />}
      {data.items.edges.map(({ node }) => (
        <VideosItem key={node.id} item={node} />
      ))}
    </>
  );
}
