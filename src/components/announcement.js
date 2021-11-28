import React from "react";
import tw from "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import useLocaleItems from "../utils/useLocaleItems";

import Icon from "./icon";
import Link from "./link";

import Md from "./markdownDynamic";
import TwContainer from "./twContainer";

const palette = {
  yellow: {
    bg: tw`bg-yellow-600`,
    icon: tw`bg-yellow-800`,
    link: tw`text-yellow-600 hover:bg-yellow-50`,
  },
  green: {
    bg: tw`bg-green-600`,
    icon: tw`bg-green-800`,
    link: tw`text-green-600 hover:bg-green-50`,
  },
  indigo: {
    bg: tw`bg-indigo-600`,
    icon: tw`bg-indigo-800`,
    link: tw`text-indigo-600 hover:bg-indigo-50`,
  },
  red: {
    bg: tw`bg-red-600`,
    icon: tw`bg-red-800`,
    link: tw`text-red-600 hover:bg-red-50`,
  },
};

export default function Announcement() {
  const {
    ui: { announcement },
  } = useGlobals();
  const { basePath } = useLocaleItems();
  if (!announcement.enabled) {
    return null;
  }
  if (announcement.landingOnly && basePath !== "") {
    return null;
  }
  const col = palette[announcement.color || "green"];
  return (
    <div css={[tw`z-20 relative`, col.bg]}>
      <TwContainer tw="py-2">
        <div tw="flex items-center justify-between flex-wrap">
          <div tw="flex-1 flex items-center">
            <span css={[tw`flex p-2 rounded-lg`, col.icon]}>
              <Icon
                icon={announcement.icon}
                tw="h-6 text-white"
                aria-hidden="true"
              />
            </span>
            <Md tw="ml-3 text-sm font-medium text-white line-clamp-2">
              {announcement.text}
            </Md>
          </div>
          {announcement.button && (
            <div tw="w-auto pl-2">
              <Link
                icon="right"
                to={announcement.button.link}
                // button TODO this is annoying
                css={[
                  tw`flex items-center justify-center px-2 pr-3 sm:pr-2 sm:px-4 py-2 border border-transparent rounded-md shadow-sm sm:text-sm font-medium bg-white`,
                  col.link,
                ]}
              >
                <span tw="hidden sm:inline">{announcement.button.text}</span>
              </Link>
            </div>
          )}
        </div>
      </TwContainer>
    </div>
  );
}
