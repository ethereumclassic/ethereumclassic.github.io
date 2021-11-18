import React, { Fragment } from "react";

import { resolveRefs } from "../utils/helpers";

import * as generics from "./genericAll";
import GenericHeader from "./genericHeader";

export default function Generic({ i18n }) {
  const items = i18n.items || [{ TODO: i18n }];
  return (
    <>
      <GenericHeader {...i18n} H="h1" />
      {items &&
        (Array.isArray(items) ? items : [items]).map((_item, i) => {
          const item = resolveRefs(_item, i18n);
          const Component = generics[item.type] || generics.json;
          return (
            <Fragment key={item.key}>
              <GenericHeader {...item} key="header" />
              <Component {...item} />
            </Fragment>
          );
        })}
    </>
  );
}
