import React from "react";
// TODO replace favicon with pre-rendered string?
import { renderToString } from "react-dom/server";

import { Helmet } from "react-helmet";
import "twin.macro";
import { theme } from "twin.macro";

import SeoHelper from "./seoHelper";

import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import { etc as EtcLogo } from "../utils/icons";
import { useTheme } from "../utils/themeProvider";
import useSiteMetadata from "../utils/useSiteMetadata";

export default function Seo({
  data,
  i18n,
  location: { pathname: path },
  pageContext: { basePath },
}) {
  const { ui } = useGlobals();
  const { siteUrl, socialImage, i18nDev } = useSiteMetadata();
  const { isDark } = useTheme();
  const is404 = basePath === "404";
  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}${socialImage}`; // LODO extract first image from MDX, somehow
  const pageTitle = data?.mdx?.meta?.title || i18n.title || ui.title;
  const title = pageTitle.includes(ui.title)
    ? pageTitle
    : `${pageTitle} - ${ui.title}`;
  const author = data?.mdx?.meta?.author || i18n.author;
  const updated = data?.mdx?.meta?.updated || i18n.updated;
  const published = data?.mdx?.meta?.published || i18n.published;
  const description = [
    data?.mdx?.meta?.seo,
    i18n.seo,
    i18n.description,
    data?.mdx?.excerpt,
    ui.seo,
    ui.description,
  ]
    .find((i) => i)
    .slice(0, 250)
    .replace(/\n/g, "");

  let category = "general";
  if (basePath.startsWith("blog/")) {
    category = "blog";
  }
  // TODO use config
  // exclude these from search categories as we add them manually...
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
      <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title}>
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
        {!is404 && [
          <meta key="description" name="description" content={description} />,
          <meta key="image" name="image" content={image} />,
          category && (
            <meta
              key="article:section"
              property="article:section"
              content={category}
            />
          ),
          author && (
            <meta
              key="article:author"
              property="article:author"
              content={author}
            />
          ),
          published && (
            <meta
              key="article:published_time"
              property="article:published_time"
              content={new Date(published).toISOString()}
            />
          ),
          updated && (
            <meta
              key="article:modified_time"
              property="article:modified_time"
              content={new Date(updated).toISOString()}
            />
          ),
          // social og tags
          <meta
            key="og:site_name"
            property="og:site_name"
            content={ui.title}
          />,
          <meta key="og:title" property="og:title" content={title} />,
          <meta
            key="og:description"
            property="og:description"
            content={description}
          />,
          <meta key="og:image" property="og:image" content={image} />,
          <meta key="og:locale" property="og:locale" content={ui.metaLocale} />,
          <meta key="og:url" property="og:url" content={url} />,
          // twitter tags
          <meta key="twitter:card" name="twitter:card" content="summary" />,
          <meta key="twitter:title" name="twitter:title" content={title} />,
          <meta
            key="twitter:description"
            name="twitter:description"
            content={description}
          />,
          <meta key="twitter:image" name="twitter:image" content={image} />,
        ]}
      </Helmet>
      {i18nDev && <SeoHelper meta={meta} />}
    </>
  );
}
