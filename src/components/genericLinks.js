import React, { Fragment } from "react";
import "twin.macro";

import Link from "./link";
import Md from "./markdownDynamic";

export default function ContentItemLinks({ items }) {
  return (
    <>
      {items.map(({ key, link, name, tip, description }) => (
        <Fragment key={key}>
          <h3>
            <Link to={link} showExternal>
              {name}
            </Link>
            {tip && (
              <>
                {"  "}
                <small>{tip}</small>
              </>
            )}
          </h3>
          <Md>{description}</Md>
        </Fragment>
      ))}
    </>
  );
}
