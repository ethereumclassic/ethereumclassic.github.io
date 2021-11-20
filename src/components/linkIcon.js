import tw from "twin.macro";

import Icon from "./icon";

export default function LinkIcon({ big, icon, sibling, left }) {
  if (!icon) {
    return null;
  }
  return (
    <Icon
      icon={icon}
      aria-hidden="true"
      css={[
        tw`inline`,
        big ? tw`h-4 mx-2.5` : tw`h-3 mx-1.5`,
        !sibling && tw`mx-0`,
        left ? tw`ml-0` : tw`mr-0`,
        icon === "external" && tw`opacity-50`,
      ]}
    />
  );
}
