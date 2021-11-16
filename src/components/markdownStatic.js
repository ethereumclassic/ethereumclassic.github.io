import React from "react";
import "twin.macro";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as linkedHeaders from "./linkedHeaders";

// TODO move this outside to be used everywhere

export default function MarkdownStatic({ mdx, i18n }) {
  return (
    <MDXProvider
      components={{
        ...linkedHeaders,
        Render: ({ data, component: C }) => <C {...i18n[data]} />,
      }}
    >
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  );
}
