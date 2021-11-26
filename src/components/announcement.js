import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import Icon from "./icon";
import Link from "./link";

import Md from "./markdownDynamic";
import TwContainer from "./twContainer";

export default function Announcement() {
  const {
    ui: { announcement },
  } = useGlobals();
  // hide if hidden
  return (
    <div tw="bg-green-600 z-20 relative">
      <TwContainer tw="py-2">
        <div tw="flex items-center justify-between flex-wrap">
          <div tw="flex-1 flex items-center">
            <span tw="flex p-2 rounded-lg bg-green-800">
              <Icon
                icon={announcement.icon}
                tw="h-6 text-white"
                aria-hidden="true"
              />
            </span>
            <Md tw="ml-3 font-medium text-white line-clamp-2">
              {announcement.text}
            </Md>
          </div>
          {announcement.button && (
            <div tw="w-auto">
              <Link
                icon="right"
                to={announcement.button.link}
                // button TODO this is annoying
                tw="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50"
              >
                {announcement.button.text}
              </Link>
            </div>
          )}
        </div>
      </TwContainer>
    </div>
  );
}
