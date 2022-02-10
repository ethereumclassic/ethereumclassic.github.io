import React from "react";
// LODO replace with pre-rendered string?
import { renderToString } from "react-dom/server";

import { Helmet } from "react-helmet";
import "twin.macro";
import { theme } from "twin.macro";

import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import dedupeStrings from "../utils/dedupeStrings";
import { etc as EtcLogo } from "../utils/icons";
import { useTheme } from "../utils/themeProvider";
import useSiteMetadata from "../utils/useSiteMetadata";

export default function Seo({ data, i18n, path, pageContext: { basePath } }) {
  const { ui } = useGlobals();
  const { siteUrl, socialImage } = useSiteMetadata();
  const { isDark } = useTheme();

  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}${socialImage}`; // LODO extract first image from MDX, somehow
  const title = dedupeStrings(
    data?.mdx?.meta?.title || i18n.title,
    ui.title,
    " - "
  );
  const author = data?.mdx?.meta?.author || i18n.author;
  const updated = data?.mdx?.meta?.updated || i18n.updated;
  const published = data?.mdx?.meta?.published || i18n.published;
  const description = [
    data?.mdx?.meta?.seo,
    i18n.seo,
    i18n.description,
    data?.mdx?.excerpt,
    ui.description,
  ]
    .find((i) => i)
    .slice(0, 250)
    .replace(/\n/g, "");

  let category = "general";
  if (basePath.startsWith("blog/")) {
    category = "blog";
  }
  // exclude these from search as we add them manually...
  if (
    ["", "404", "news", "videos", "services/apps", "sitemap"].includes(basePath)
  ) {
    category = null;
  }
  const logo = renderToString(
    <EtcLogo
      color={`%23${(isDark
        ? theme`colors.gray.100`
        : theme`colors.green.400`
      ).slice(1)}`}
    />
  );
  const meta = {
    title,
    description,
    author,
    category,
    published,
    image,
    updated,
  };
  return (
    <>
      <Helmet title={title}>
        {/* favicon, with fallback */}
        <link
          rel="icon"
          href={`data:image/svg+xml;utf8,${logo}`}
          type="image/svg+xml"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* language */}
        <html lang={ui.htmlLang} />
        {/* meta head */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        {category && <meta property="article:section" content={category} />}
        {author && <meta property="article:author" content={author} />}
        {published && (
          <meta
            property="article:published_time"
            content={new Date(published).toISOString()}
          />
        )}
        {updated && (
          <meta
            property="article:modified_time"
            content={new Date(updated).toISOString()}
          />
        )}
        {/* social og tags */}
        <meta property="og:site_name" content={ui.title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content={ui.metaLocale} />
        <meta property="og:url" content={url} />
        {/* twitter tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      {/* LODO only show in i18n editing mode */}
      {false && (
        <div tw="z-50 fixed p-2 left-1/4 border border-shade-lighter rounded-xl shadow bottom-2 right-2 bg-backdrop-dark">
          <table>
            <tbody>
              {["title", "description"].map((key) => (
                <tr key={key}>
                  <td tw="pr-2 opacity-60 align-top">{key}</td>
                  <td>{meta[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
