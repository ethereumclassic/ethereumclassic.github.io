import React from "react";
import "twin.macro";
import { capitalize } from "lodash";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as linkedHeaders from "./linkedHeaders";
import Link from "./link";

import * as generics from "./genericAll";
import VideoFrame from "./videoFrame";

export default function MarkdownStatic({ mdx, i18n }) {
  return (
    <>
      <MDXProvider
        components={{
          // pass generic components so they can be used in markdown
          ...Object.keys(generics).reduce((o, key) => {
            const Comp = generics[key];
            return {
              ...o,
              [capitalize(key)]: ({ data, ...rest }) => (
                <Comp {...i18n[data]} {...rest} />
              ),
            };
          }, {}),
          a: (props) => <Link {...props} showExternal />,
          Video: VideoFrame,
          ...linkedHeaders,
          // dont render h1 as we query it and render elsewhere in header
          h1: () => null,
        }}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </>
  );
}
