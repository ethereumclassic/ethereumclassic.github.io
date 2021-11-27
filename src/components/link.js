import tw from "twin.macro";
import { isString } from "lodash";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import Button from "./button";
import LinkIcon from "./linkIcon";
import { useRedirectedUrl } from "../utils/redirectsProvider";

const isHash = (str) => /^#/.test(str);
const isInternal = (to) => /^\/(?!\/)/.test(to);

export default function Link({
  button,
  icon,
  children,
  href,
  to,
  showExternal,
  notLocalized,
  iconLeft,
  ...props
}) {
  const url = useRedirectedUrl(href || to);
  const isExternal = isHash(url) || !isInternal(url);
  const LinkCompBase = isExternal ? "a" : LocalizedLink;
  const LinkComp = button ? Button : LinkCompBase;
  const iconName = icon || (showExternal && isExternal && "external");
  const nowrap = isString(children) && children.length < 20;
  const linkProps = isExternal
    ? { href: url, target: "_blank" }
    : { to: url, notLocalized };
  return (
    <LinkComp
      {...props}
      {...linkProps}
      as={button ? LinkCompBase : null}
      css={[nowrap ? tw`whitespace-nowrap` : tw`break-words`]}
    >
      <LinkIcon big={props.big} sibling={children} icon={iconLeft} left />
      {children}
      <LinkIcon big={props.big} sibling={children} icon={iconName} />
    </LinkComp>
  );
}
