import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import LayoutPage from './LayoutPage';
import Link from './Link';
import DateFormatter from './DateFormatter';

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
    },
    pageContext: { i18n }
  } = props;
  return (
    <LayoutPage {...props}>
      {i18n.date && (
        <h3>
          <DateFormatter>{i18n.date}</DateFormatter>
          {'  '}
          <small>{i18n.author}</small>
        </h3>
      )}
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </LayoutPage>
  );
};

export default LayoutMarkdown;
