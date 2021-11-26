import React from "react";
import tw from "twin.macro";

import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";

export default function SocialIcons() {
  const {
    ui: { socialItems, socialHilight },
  } = useGlobals();
  return (
    <div tw="space-y-3">
      <div tw="text-xs font-bold text-indigo-400">{socialHilight}</div>
      <div tw="flex space-x-6">
        {socialItems.map(({ key, name, icon, link, hilight }) => (
          <a
            key={key}
            href={link}
            css={[
              hilight
                ? tw`text-indigo-400 hover:text-indigo-500`
                : tw`text-gray-400 hover:text-gray-500`,
            ]}
          >
            <span tw="sr-only">{name}</span>
            <div tw="relative">
              {hilight && (
                <Icon
                  icon="down"
                  tw="absolute h-4 w-full -top-3 animate-bounce"
                />
              )}
              <Icon icon={icon} tw="h-6" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
