import React from "react";
import "twin.macro";

import Pagination from "./pagination";
import Link from "./link";

import Icon from "./icon";
import VideosItem from "./videosItem";
import Content from "./content";
import VideosHeader from "./videosHeader";

export default function Videos({ pageContext, data, i18n }) {
  return (
    <Content max i18n={{ disclaimer: true }}>
      <VideosHeader {...{ pageContext, i18n }} />
      <div tw="sticky z-20 top-32 md:top-14 bg-backdrop-dark mb-4 pt-1 mt-1">
        <Pagination {...{ pageContext }} />
      </div>
      <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
        {pageContext.currentPage === 1 && pageContext.filter !== "conferences" && (
          <>
            <Link
              tw="col-span-full border-2 rounded-lg border-dashed text-shade-light  bg-backdrop-light border-shade-lighter hover:text-shade-neutral hover:bg-backdrop-dark flex items-center justify-center space-x-4 p-3"
              to="https://github.com/ethereumclassic.github.io"
            >
              <Icon icon="plus" tw="h-5" />
              <div>Earn ETC by submitting your own videos!</div>
            </Link>
          </>
        )}
        {data.items.edges.map(({ node }) => (
          <VideosItem key={node.id} item={node} />
        ))}
      </div>
    </Content>
  );
}
