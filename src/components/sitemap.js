import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";
import useLocaleItems from "../utils/useLocaleItems";

export default function Sitemap({
  data: {
    pages: { edges },
  },
}) {
  const { defaultLocale, locale: pageLocale } = useLocalization();
  const { localeItems } = useLocaleItems();

  function Branch({
    root,
    name = "",
    isPage,
    locale,
    children,
    links,
    isDefaultRoot,
    path = "",
  }) {
    const fullPath = `${path}${name}`;
    const text = isPage ? name : fullPath;
    const isActive = root && pageLocale === locale;
    if (name.startsWith("404")) {
      return null;
    }
    return (
      <div
        tw="pl-2"
        css={[name === "page" && tw`flex`, isActive && tw`bg-blue-100`]}
      >
        {root ? (
          <div>
            I am root of {localeItems.find(({ key }) => key === locale).name},{" "}
            {isDefaultRoot && "yes"}
          </div>
        ) : (
          <div>
            {links[fullPath] ? (
              <Link tw="text-pink-600" to={fullPath}>
                {text}
              </Link>
            ) : (
              text
            )}
          </div>
        )}
        <div>
          <div css={[name === "page" && tw`flex`]}>
            {children &&
              children.map((item) => (
                <Branch
                  isPage={name === "page"}
                  key={item.name}
                  links={links}
                  path={`${path}${name}${isDefaultRoot ? "" : "/"}`}
                  {...item}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }

  // const tree = orderBy(data, ({ node }))
  let defaults = [];
  const links = {};
  const siteMap = edges
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
    }, [])
    .concat({
      root: true,
      children: defaults,
      isDefaultRoot: true,
      locale: defaultLocale,
    });

  return (
    <>
      <Branch children={siteMap} links={links} />
    </>
  );
}
