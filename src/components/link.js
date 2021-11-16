import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

export default function Link({ button, icon, ...props }) {
  // TODO handle Icon
  return (
    <LocalizedLink {...props} css={[button && tw`px-2 py-2 bg-blue-300`]} />
  );
}
