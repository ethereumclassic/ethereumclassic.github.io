import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import LayoutPage from './LayoutPage';

const LayoutMarkdown = props => {
  const {
    data: {
      markdown: { body }
    }
  } = props;
  return (
    <LayoutPage {...props}>
      <MDXRenderer>{body}</MDXRenderer>
    </LayoutPage>
  );
};

export default LayoutMarkdown;
