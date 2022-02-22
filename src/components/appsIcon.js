import React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Icon from "./icon";

export default function AppsIcon({ image, title, icon, iconCol, big }) {
  if (image) {
    return (
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        css={[tw`h-24 w-24 bg-white rounded-lg`, big && tw`sm:w-52 sm:h-52`]}
      />
    );
  }
  return (
    <div
      css={[
        tw`h-24 w-24 overflow-hidden rounded-lg flex items-center justify-center`,
        iconCol,
        big && tw`sm:w-52 sm:h-52`,
      ]}
    >
      <Icon
        icon={icon || "etc"}
        css={[tw`w-16 h-16 rotate-12`, big && tw`sm:w-32 sm:h-32`]}
      />
    </div>
  );
}
