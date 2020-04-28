import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import LayoutPage from './LayoutPage';
import Link from './Link';

const components = {
  a: ({ href, ...props }) => <Link to={href} {...props} />,
  table: props => (
    <div className="table">
      <table {...props} />
    </div>
  )
};

const LayoutMarkdown = props => {
  const {
    data: {
      markdown: { body }
    }
  } = props;
  return (
    <LayoutPage {...props}>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </LayoutPage>
  );
};

export default LayoutMarkdown;
