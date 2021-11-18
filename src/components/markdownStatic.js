import React from "react";
import "twin.macro";
import { capitalize } from "lodash";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as linkedHeaders from "./linkedHeaders";
import Link from "./link";

import * as generics from "./genericAll";

export default function MarkdownStatic({ mdx, i18n }) {
  return (
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
  );
}
