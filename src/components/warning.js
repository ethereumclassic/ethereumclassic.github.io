import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import Icon from "./icon";
import Link from "./link";

import Md from "./markdownDynamic";
import TwContainer from "./twContainer";

export default function Warning() {
  const {
    ui: { warning },
  } = useGlobals();
  // hide if hidden
  return (
    <div tw="bg-green-600 z-20 relative">
      <TwContainer tw="py-2">
        <div tw="flex items-center justify-between flex-wrap">
          <div tw="w-0 flex-1 flex items-center">
            <span tw="flex p-2 rounded-lg bg-green-800">
              <Icon
                icon={warning.icon}
                tw="h-6 text-white"
                aria-hidden="true"
              />
            </span>
            <Md tw="ml-3 font-medium text-white line-clamp-2">
              {warning.text}
            </Md>
          </div>
          {warning.button && (
            <div tw="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link
                icon="right"
                to={warning.button.link}
                tw="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-indigo-50"
              >
                {warning.button.text}
              </Link>
            </div>
          )}
          {/* <div tw="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              tw="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span tw="sr-only">Dismiss</span>
              <Icon icon="times" tw="h-6 text-white" aria-hidden="true" />
            </button>
          </div> */}
        </div>
      </TwContainer>
    </div>
  );
}
