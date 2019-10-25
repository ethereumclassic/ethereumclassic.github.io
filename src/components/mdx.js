import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import MdxLink from './mdxLink';
import TeamImageWrapper from './teamImageWrapper';

const Mdx = ({ code, components }) => {
  return (
    <MDXProvider
      components={{
        a: MdxLink,
        'team-image': TeamImageWrapper,
        ...components
      }}
    >
      <MDXRenderer>{code}</MDXRenderer>
    </MDXProvider>
  );
};

export default Mdx;
