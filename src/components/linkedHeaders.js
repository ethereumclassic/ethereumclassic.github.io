import React from "react";
import "twin.macro";
import { kebabCase, isString, isArray } from "lodash";

function getChildText(children) {
  if (!children) {
    return null;
  }
  if (isArray(children)) {
    return children.map(getChildText).join("");
  }
  return isString(children)
    ? children
    : getChildText(children?.props?.children);
}

function generateHeader(HX) {
  return function Header({ children, text, ...props }) {
    const idText = text || getChildText(children);
    if (!idText) {
      return <HX {...props}>{children}</HX>;
    }
    const id = kebabCase(idText.toLocaleLowerCase());
    return (
      <HX {...props} id={id}>
        {/* don't wrap in a link if the child is a link */}
        {children?.props?.href || children?.props?.to ? (
          children
        ) : (
          <a href={`#${id}`} tw="!no-underline hover:!underline">
            {children}
          </a>
        )}
      </HX>
    );
  };
}

export const h1 = generateHeader("h1");
export const h2 = generateHeader("h2");
export const h3 = generateHeader("h3");
export const h4 = generateHeader("h4");
export const h5 = generateHeader("h5");
export const h6 = generateHeader("h6");
