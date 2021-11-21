import tw from "twin.macro";

import LinkIcon from "./linkIcon";

// TODO combine with link
export default function Button({
  as,
  icon,
  primary,
  secondary,
  children,
  big,
  round,
  iconLeft,
  ...props
}) {
  const Comp = as || "button";
  return (
    <Comp
      {...props}
      css={[
        tw`!no-underline !font-normal inline-flex items-center px-3 py-2 mb-1 mr-1 border border-transparent shadow-sm leading-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2`,
        primary &&
          tw`!text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
        secondary &&
          tw`!text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500`,
        !primary &&
          !secondary &&
          tw`border-gray-300 !text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500`,
        big && tw`!text-lg m-1`,
        round ? tw`rounded-full` : tw`rounded-md`,
      ]}
    >
      <LinkIcon sibling={children} icon={iconLeft} left />
      {children}
      <LinkIcon sibling={children} icon={icon} />
    </Comp>
  );
}
