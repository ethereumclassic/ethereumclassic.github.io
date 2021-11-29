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
        // flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-dark bg-backdrop-light hover:bg-secondary-lightest
        tw`!no-underline !font-medium !text-shade-neutral px-4 py-2 text-sm inline-flex items-center border border-transparent shadow-sm leading-4 bg-backdrop-light rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-secondary-lightest`,
        primary &&
          tw`!text-shade-lightest bg-secondary-dark hover:bg-secondary-darker focus:ring-secondary-neutral`,
        secondary &&
          tw`!text-secondary-darker bg-secondary-lightest hover:bg-secondary-lighter focus:ring-secondary-neutral`,
        big && tw`!text-lg m-1 shadow-lg hover:scale-110`,
        round ? tw`rounded-full p-2` : tw`rounded-md`,
      ]}
      {...props}
    >
      <LinkIcon big={big} sibling={children} icon={iconLeft} left />
      {children}
      <LinkIcon big={big} sibling={children} icon={icon} />
    </Comp>
  );
}
