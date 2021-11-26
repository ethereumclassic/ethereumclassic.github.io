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
      css={[
        // flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-indigo-50
        tw`!no-underline !font-medium !text-gray-600 px-4 py-2 text-sm inline-flex items-center mb-1 mr-1 border border-transparent shadow-sm leading-4 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-green-50`,
        primary &&
          tw`!text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
        secondary &&
          tw`!text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500`,
        big && tw`!text-lg m-1 shadow-lg hover:scale-110`,
        round ? tw`rounded-full` : tw`rounded-md`,
      ]}
      {...props}
    >
      <LinkIcon big={big} sibling={children} icon={iconLeft} left />
      {children}
      <LinkIcon big={big} sibling={children} icon={icon} />
    </Comp>
  );
}
