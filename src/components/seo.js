import React from "react";
// TODO replace favicon with pre-rendered string?
import { renderToString } from "react-dom/server";

import { Helmet } from "react-helmet";
import "twin.macro";
import { theme } from "twin.macro";

import SeoHelper from "./seoHelper";

import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";
import { etc as EtcLogo } from "../utils/icons";
import { useTheme } from "../utils/themeProvider";
import useSiteMetadata from "../utils/useSiteMetadata";
import useLocaleItems from "../utils/useLocaleItems";

export default function Seo({ data, i18n, path, pageContext: { basePath } }) {
  const {
    globals: { ui },
    dev: i18nDev,
  } = useLocalization();
  const { current } = useLocaleItems();
  const { siteUrl, socialImage } = useSiteMetadata();
  const { isDark } = useTheme();

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
      <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title}>
        {i18nDev &&
          current.editor && [
            <script type="text/javascript">
              {`var _jipt = []; _jipt.push(['project', '${i18nDev}']);`}
            </script>,
            <script
              type="text/javascript"
              src="//cdn.crowdin.com/jipt/jipt.js"
            />,
          ]}

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
      {i18nDev && current.editor && <SeoHelper meta={meta} />}
    </>
  );
}
