import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

import Icon from "./icon";

const isHash = (str) => /^#/.test(str);
const isInternal = (to) => /^\/(?!\/)/.test(to);

export default function Link({
  button,
  icon,
  primary,
  secondary,
  children,
  href,
  big,
  round,
  to,
  showExternal, // TODO use this in markdown etc
  ...props
}) {
  const url = href || to;
  const isExternal = isHash(url) || !isInternal(url);
  const LinkComp = isExternal ? "a" : LocalizedLink;
  const linkProps = isExternal ? { href: url, target: "_blank" } : { to: url };
  // TODO autoamtic URL rewriting for old content
  const btnStyle = [tw`inline`, children && tw`ml-1`, big ? tw`h-5` : tw`h-3`];
  return (
    <LinkComp
      {...props}
      {...linkProps}
      css={[
        !button
          ? tw`whitespace-nowrap`
          : tw`!no-underline !font-normal inline-flex items-center px-3 py-2 mb-1 border border-transparent shadow-sm leading-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2`,
        primary &&
          tw`text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
        secondary &&
          tw`text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500`,
        button &&
          !primary &&
          !secondary &&
          tw`border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500`,
        big && tw`!text-lg m-1`,
        round ? tw`rounded-full` : tw`rounded-md`,
      ]}
    >
      {children}
      {icon && <Icon icon={icon} css={btnStyle} aria-hidden="true" />}
      {!button && showExternal && isExternal && !icon && (
        <Icon icon="external" css={[tw`opacity-50`].concat(btnStyle)} />
      )}
    </LinkComp>
  );
}
