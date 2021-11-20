import tw from "twin.macro";
import { isString } from "lodash";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import Button from "./button";
import LinkIcon from "./linkIcon";

const isHash = (str) => /^#/.test(str);
const isInternal = (to) => /^\/(?!\/)/.test(to);

export default function Link({
  button,
  icon,
  children,
  href,
  to,
  showExternal,
  iconLeft,
  ...props
}) {
  const url = href || to;
  const isExternal = isHash(url) || !isInternal(url);
  const LinkCompBase = isExternal ? "a" : LocalizedLink;
  const LinkComp = button ? Button : LinkCompBase;
  const linkProps = isExternal ? { href: url, target: "_blank" } : { to: url };
  const iconName = icon || (showExternal && isExternal && "external");
  const nowrap = isString(children) && children.length < 20;
  return (
    <LinkComp
      {...props}
      {...linkProps}
      as={button ? LinkCompBase : null}
      css={[nowrap ? tw`whitespace-nowrap` : tw`break-words`]}
    >
      <LinkIcon sibling={children} icon={iconLeft} left />
      {children}
      <LinkIcon sibling={children} icon={iconName} />
    </LinkComp>
  );
}
