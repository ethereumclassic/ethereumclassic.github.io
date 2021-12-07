import React from "react";
// TODO replace with pre-rendered string
import { renderToString } from "react-dom/server";

import { Helmet } from "react-helmet";
import "twin.macro";
import { theme } from "twin.macro";

import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import dedupeStrings from "../utils/dedupeStrings";
import { etc as EtcLogo } from "../utils/icons";
import { useTheme } from "../utils/themeProvider";
import useSiteMetadata from "../utils/useSiteMetadata";

export default function Seo(props) {
  const { ui } = useGlobals();
  const { siteUrl, socialImage } = useSiteMetadata();
  const { isDark } = useTheme();

  const url = `${siteUrl}${props.path}`;
  const image = `${siteUrl}${socialImage}`; // TODO extract image from MDX
  const title = dedupeStrings(
    props.data?.mdx?.meta?.title || props.i18n.title,
    ui.title,
    " - "
  );
  const description = [
    props.data?.mdx?.meta?.description,
    props.i18n.description,
    props.data?.mdx?.excerpt,
    ui.description,
  ].find((i) => i);

  const logo = renderToString(
    <EtcLogo
      color={`%23${(isDark
        ? theme`colors.gray.100`
        : theme`colors.green.400`
      ).slice(1)}`}
    />
  );

  return (
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
      <meta name="twitter:description" content={ui.description} />
      <meta name="twitter:image" content={image} />
      {/* fix viewport on some mobile browsers */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=0.88888888, minimum-scale=0.88888888"
      />
    </Helmet>
  );
}
