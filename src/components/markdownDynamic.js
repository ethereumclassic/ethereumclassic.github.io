import React from "react";
import ReactMarkdown from "react-markdown";
import "twin.macro";

import Link from "./link";

function unwrapParagraphs(props) {
  const { children } = props;
  if (children.length === 1 && children[0].type === "p") {
    return children[0].props.children;
  }
  return children;
}

export default function Markdown({ children, unwrap }) {
  if (children === undefined) {
    return null;
  }
  const components = {
    // link: localizeLinks,
    a: (props) => <Link {...props} showExternal />,
  };
  if (unwrap) {
    components.root = unwrapParagraphs;
  }
  return <ReactMarkdown children={children} components={components} />;
}
