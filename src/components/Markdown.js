import React from 'react';
import ReactMarkdown from 'react-markdown';

import Link from './Link';

function unwrapParagraphs(props) {
  const { children } = props;
  if (children.length === 1 && children[0].type === 'p') {
    return children[0].props.children;
  }
  return children;
}

function localizeLinks(props) {
  const { children, href } = props;
  return <Link to={href}>{children}</Link>;
}

export default ({ children, unwrap }) => {
  if (children === undefined) {
    return null;
  }
  const renderers = { link: localizeLinks };
  if (unwrap) {
    renderers.root = unwrapParagraphs;
  }
  return <ReactMarkdown source={children} renderers={renderers} />;
};
