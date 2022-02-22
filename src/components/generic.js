import React, { Fragment } from "react";
import { isArray } from "lodash";

import * as generics from "./genericAll";
import GenericHeader from "./genericHeader";

const sortByDefault = ["buttons", "table"];

function sort(items, { filter, sort }) {
  if (!isArray(items)) {
    return items;
  }
  const filtered = !filter ? items : items.filter((i) => i[filter]);
  const sorted = !sort
    ? filtered
    : items.sort((a, b) =>
        `${a[sort]}`.toLowerCase().localeCompare(`${b[sort]}`.toLowerCase())
      );
  return sorted;
}

export default function Generic({ i18n }) {
  const items = i18n.items;
  return (
    <>
      {/* title is rendered in contentHeader */}
      <GenericHeader {...i18n} title={false} />
      {items &&
        (Array.isArray(items) ? items : [items]).map((item, i) => {
          const Component = generics[item.type] || generics.json;
          const sortedItems = sort(item.items, {
            sort: sortByDefault.includes(item.type) && "name",
            ...item, // pass item config to override sort options
          });
          return (
            <Fragment key={item.key}>
              <GenericHeader {...item} key="header" />
              <Component {...item} items={sortedItems} />
            </Fragment>
          );
        })}
    </>
  );
}
