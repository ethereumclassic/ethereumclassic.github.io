import React, { Fragment } from "react";

import { resolveRefs } from "../utils/helpers";

import Json from "./json";

import GenericLinks from "./genericLinks";
import GenericButtons from "./genericButtons";
import GenericCells from "./genericCells";
import GenericTable from "./genericTable";
import GenericVideos from "./genericVideos";
import GenericHeader from "./genericHeader";

const components = {
  buttons: GenericButtons,
  links: GenericLinks,
  table: GenericTable,
  videos: GenericVideos,
  info: GenericCells,
  json: Json,
};

export default function Generic({ i18n }) {
  const content = i18n.items || [{ TODO: i18n }];
  return (
    <>
      <GenericHeader {...i18n} H="h1" />
      {content &&
        (Array.isArray(content) ? content : [content]).map((_item, i) => {
          const item = resolveRefs(_item, i18n);
          const Component = components[item.type] || components.json;
          return (
            <Fragment key={item.key || `${content.key}-${i}`}>
              <GenericHeader {...item} />
              <Component {...item} />
            </Fragment>
          );
        })}
    </>
  );
}
