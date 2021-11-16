import React from "react";
import LocalizedLink from "./localizedLink";

const isHash = (str) => /^#/.test(str);
const isInternal = (to) => /^\/(?!\/)/.test(to);

// Only use <LocalizedLink /> for internal links
export default function MdxLink({ href, ...props }) {
  if (isHash(href) || !isInternal(href)) {
    return <a {...props} href={href} />;
  } else {
    return <LocalizedLink {...props} to={href} />;
  }
}
