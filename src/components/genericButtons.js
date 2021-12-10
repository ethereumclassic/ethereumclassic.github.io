import React, { Fragment } from "react";

import "twin.macro";

import Link from "./link";

export default function ContentItemButtons({ items }) {
  return (
    <>
      {items.map(({ key, name, link, primary, secondary }) => (
        <Link
          key={key}
          to={link}
          button
          {...{ primary, secondary }}
          tw="mr-1 mb-1"
        >
          {name}
        </Link>
      ))}
    </>
  );
}
