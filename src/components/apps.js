import React from "react";
import "twin.macro";

import Link from "./link";

import Icon from "./icon";

import AppsItem from "./appsItem";

export default function Apps({ pageContext, data, i18n }) {
  return (
    <>
      {pageContext.currentPage === 1 && pageContext.filter === undefined && (
        <>
          <Link
            tw="text-sm col-span-full border-2 rounded-lg border-dashed text-shade-light bg-backdrop-light border-shade-lighter hover:text-shade-neutral hover:bg-backdrop-dark flex items-center justify-center space-x-4 p-3"
            to="https://github.com/ethereumclassic.github.io"
          >
            <Icon icon="plus" tw="h-5" />
            <div>Support ETC by submitting your own apps!</div>
          </Link>
        </>
      )}
      {data.items.edges.map(({ node }) => (
        <AppsItem key={node.id} item={node} showType={!pageContext.filter} />
      ))}
    </>
  );
}
