import React from "react";
import "twin.macro";
import Link from "./link";

export default function ContentSubMenu({ items }) {
  return (
    <div>
      {items.map(({ key, link, name }) => {
        return (
          <Link big primary button key={key} to={link}>
            {name}
          </Link>
        );
      })}
    </div>
    // <pre tw="overflow-x-scroll border-2 p-3 max-h-80">
    //   {JSON.stringify(children || rest, null, 2)}
    // </pre>
  );
}
