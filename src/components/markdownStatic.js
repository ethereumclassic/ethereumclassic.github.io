import React from "react";
import "twin.macro";
import { capitalize } from "lodash";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as linkedHeaders from "./linkedHeaders";
import Link from "./link";

import Generic from "./generic";
import * as generics from "./genericAll";
import VideoFrame from "./videoFrame";

export default function MarkdownStatic({ mdx, i18n }) {
  return (
    <>
      <MDXProvider
        components={{
          // fix react warnings about descendant figures
          p: (props) => {
            if (props.children?.props?.originalType === "figure") {
              return props.children;
            } else {
              return <p {...props} />;
            }
          },
          // style image wrappers
          figure: (props) => <figure tw="text-center font-bold" {...props} />,
          span: (props) => {
            if (props.className === "gatsby-resp-image-wrapper") {
              return (
                <span
                  tw="mx-auto rounded-2xl bg-white shadow-md overflow-hidden text-center"
                  {...props}
                />
              );
            } else {
              return <span {...props} />;
            }
          },
          // linked headers
          ...linkedHeaders,
          // dont render h1 as we query it and render elsewhere in header
          h1: () => null,
          // handle internal/external links
          a: (props) => <Link {...props} showExternal />,
          // video component
          Video: VideoFrame,
          // add generic itself, to pass "items" array
          Generic: ({ data, ...rest }) => {
            return <Generic i18n={i18n[data]} {...rest} />;
          },
          // add individual generic components e.g. table, videos,
          ...Object.keys(generics).reduce((o, key) => {
            const Comp = generics[key];
            return {
              ...o,
              [capitalize(key)]: ({ data, ...rest }) => (
                <Comp {...i18n[data]} {...rest} />
              ),
            };
          }, {}),
        }}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </>
  );
}
