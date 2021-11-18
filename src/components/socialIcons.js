import React from "react";
import "twin.macro";

import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";

export default function SocialIcons() {
  const {
    ui: { socialItems },
  } = useGlobals();
  return (
    <div tw="flex space-x-6">
      {socialItems.map(({ key, name, icon, link }) => (
        <a key={key} href={link} tw="text-gray-400 hover:text-gray-500">
          <span tw="sr-only">{name}</span>
          <Icon icon={icon} tw="h-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
