import React, { Fragment } from "react";
import "twin.macro";

import Link from "./link";
import Md from "./markdownDynamic";

export default function GenericLinks({ items, showLink }) {
  return (
    <>
      {items.map(({ key, link, name, description }) => (
        <Fragment key={key}>
          <h3>
            <Link to={link} showExternal tw="mr-2">
              {name}
            </Link>
            {showLink && (
              <Link
                to={link}
                tw="!no-underline hover:!underline !text-shade-light"
              >
                <small tw="font-normal font-sans text-shade-light">
                  {link.split("://").pop()}
                </small>
              </Link>
            )}
          </h3>
          <Md>{description}</Md>
        </Fragment>
      ))}
    </>
  );
}
