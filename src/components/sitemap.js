import { Link } from "gatsby";
import React, { useState } from "react";
import tw from "twin.macro";
import {
  useGlobals,
  useLocalization,
} from "../../plugins/translations-plugin/src/components/localizationProvider";
import useLocaleItems from "../utils/useLocaleItems";
import Button from "./button";
import ContentHeader from "./contentHeader";

import TwContainer from "./twContainer";

function Branch({
  root,
  name = "",
  locale,
  children,
  links,
  isDefaultRoot,
  pageLocale,
  localeItems,
  selected,
  parentPage,
  parentRoot,
  path = "",
}) {
  const isPage = name === "page";
  const fullPath = `${path}${name}`;
  const text = parentPage ? name : fullPath;
  if (name.startsWith("404")) {
    return null;
  }
  if (root && selected && selected !== locale) {
    return null;
  }

  return (
    <div css={[parentRoot && tw`flex-auto`]}>
      <div
        css={[
          isPage && tw`flex`,
          root &&
            tw`flex flex-wrap bg-gray-200 p-6 pl-2 mb-2 rounded-3xl space-x-4 space-y-4`,
          parentRoot &&
            tw`bg-white shadow-md rounded-lg max-h-80 overflow-x-auto text-sm py-2`,
        ]}
      >
        {root ? (
          <div tw="text-xl font-bold w-full pb-2 pl-4">
            {localeItems.find(({ key }) => key === locale).name}
          </div>
        ) : (
          <div css={!parentPage ? tw`px-2 py-1` : tw`px-0.5 py-1`}>
            {links[fullPath] ? (
              <Link tw="text-green-700" to={fullPath}>
                {text}
              </Link>
            ) : (
              <span>{text}</span>
            )}
          </div>
        )}
        {children &&
          children.map((item) => {
            return (
              <Branch
                {...{
                  ...item,
                  key: item.name,
                  parentPage: isPage,
                  parentRoot: root,
                  path: `${path}${name}${isDefaultRoot ? "" : "/"}`,
                  links,
                  pageLocale,
                  localeItems,
                  selected,
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default function Sitemap({
  i18n,
  data: {
    pages: { edges },
  },
}) {
  const { defaultLocale, locale: pageLocale } = useLocalization();
  const { localeItems } = useLocaleItems();
  const { ui } = useGlobals();
  const [selected, setSelected] = useState(false);

  let defaults = [];
  const links = {};
  const locales = edges
    .reduce(
      (r, { node: { path } }) => {
        links[path] = true;
        path
          .slice(1)
          .split("/")
          .reduce((o, name) => {
            var temp = (o.children = o.children || []).find(
              (q) => q.name === name
            );
            if (!temp) o.children.push((temp = { name }));
            return temp;
          }, r);
        return r;
      },
      { children: [] }
    )
    .children.reduce((o, item) => {
      if (item.name.length === 2) {
        return o.concat({
          root: true,
          locale: item.name,
          ...item,
        });
      } else {
        defaults.push(item);
        return o;
      }
    }, []);

  const siteMap = [
    {
      root: true,
      children: defaults,
      isDefaultRoot: true,
      locale: defaultLocale,
    },
  ].concat(locales);

  return (
    <TwContainer>
      <ContentHeader i18n={i18n} tw="mt-10 mb-6" />
      <div tw="flex">
        <div tw="space-x-2 flex-auto">
          {localeItems
            .filter(({ enabled }) => enabled)
            .concat([{ key: false, name: ui.allLanguages }])
            .map((locale) => (
              <Button
                key={locale.key}
                primary={locale.key === selected}
                onClick={() => setSelected(locale.key)}
              >
                {locale.name}
              </Button>
            ))}
        </div>
        <div>
          <Button secondary icon="sitemap" as={"a"} href="/sitemap.xml">
            sitemap.xml
          </Button>
        </div>
      </div>
      <Branch
        {...{ children: siteMap, links, pageLocale, localeItems, selected }}
      />
    </TwContainer>
  );
}
