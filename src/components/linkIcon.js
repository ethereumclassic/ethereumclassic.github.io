import tw from "twin.macro";

import Icon from "./icon";

export default function LinkIcon({ big, icon, sibling }) {
  if (!icon) {
    return null;
  }
  return (
    <Icon
      icon={icon}
      aria-hidden="true"
      css={[
        tw`inline`,
        big ? tw`h-4` : tw`h-3`,
        sibling && (big ? tw`ml-2.5` : tw`ml-1.5`),
        icon === "external" && tw`opacity-50`,
      ]}
    />
  );
}
