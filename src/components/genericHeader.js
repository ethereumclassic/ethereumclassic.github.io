import React from "react";

import Md from "./markdownDynamic";
import * as linkedHeaders from "./linkedHeaders";

export default function GenericHeader({
  title,
  description,
  subtitle,
  H = "h2",
}) {
  if (!title && !description) {
    return null;
  }
  const C = linkedHeaders[H];
  return (
    <>
      {title && (
        <C text={title}>
          {title}
          {subtitle && <small>{` ${subtitle}`}</small>}
        </C>
      )}
      <Md>{description}</Md>
    </>
  );
}
