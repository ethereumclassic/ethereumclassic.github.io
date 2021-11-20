import React from "react";
import "twin.macro";
import { capitalize } from "lodash";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as linkedHeaders from "./linkedHeaders";
import Link from "./link";

import * as generics from "./genericAll";
import FormattedDate from "./formattedDate";

export default function MarkdownStatic({ mdx, i18n }) {
  return (
    <>
      {mdx.meta.title && <linkedHeaders.h1>{mdx.meta.title}</linkedHeaders.h1>}
      {mdx.meta.date && <FormattedDate date={mdx.meta.date} />}
      {mdx.meta.author && <div>{mdx.meta.author}</div>}
      <MDXProvider
        components={{
          // pass generic components so they can be used in markdown
          ...Object.keys(generics).reduce((o, key) => {
            const Comp = generics[key];
            return {
              ...o,
              [capitalize(key)]: ({ data }) => <Comp {...i18n[data]} />,
            };
          }, {}),
          a: (props) => <Link {...props} showExternal />,
          ...linkedHeaders,
        }}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </>
  );
}
