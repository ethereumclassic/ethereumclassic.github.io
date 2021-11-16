import React from "react";
import ReactMarkdown from "react-markdown";
import "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

function unwrapParagraphs(props) {
  const { children } = props;
  if (children.length === 1 && children[0].type === "p") {
    return children[0].props.children;
  }
  return children;
}

function localizeLinks(props) {
  const { children, href } = props;
  return <LocalizedLink to={href}>{children}</LocalizedLink>;
}

export default function Markdown({ children, unwrap }) {
  if (children === undefined) {
    return null;
  }
  const components = { link: localizeLinks };
  if (unwrap) {
    components.root = unwrapParagraphs;
  }
  return <ReactMarkdown children={children} components={components} />;
}
