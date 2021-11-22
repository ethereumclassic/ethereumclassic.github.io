import React, { Fragment } from "react";

import "twin.macro";

// import { filterAndSortItems } from "../utils";

import Link from "./link";

export default function ContentItemButtons({ items }) {
  // TODO options for sorting
  // const items = filterAndSortItems(_i || _i2 || [], { filter, sort });
  return (
    <>
      {items.map(({ key, name, link, primary, secondary }) => (
        <Link key={key} to={link} button {...{ primary, secondary }}>
          {name}
        </Link>
      ))}
    </>
  );
}
