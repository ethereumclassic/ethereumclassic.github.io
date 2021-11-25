import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import tw from "twin.macro";
import { navigate } from "gatsby-link";

import useLocaleItems from "../utils/useLocaleItems";
import Icon from "./icon";

export default function LocaleDropdown() {
  const { locale, locales, defaultLocale, basePath, localeItems, current } =
    useLocaleItems();

  return (
    <Listbox
      value={current}
      onChange={(selected) => {
        if (selected === locale || !locales[selected].enabled) {
          return;
        }
        navigate(
          selected === defaultLocale
            ? `/${basePath}`
            : `/${selected}/${basePath}`
        );
      }}
    >
      {({ open }) => (
        <>
          <div tw="mt-1 relative">
            <Listbox.Button tw="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span tw="flex items-center">
                <Icon
                  icon={current.key}
                  alt=""
                  tw="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span tw="ml-3 block truncate">{current.name}</span>
              </span>
              <span tw="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Icon icon="up" tw="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Listbox.Options tw="absolute left-0 bottom-11 z-10 bg-white shadow-lg max-h-72 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {localeItems.map(({ key, name, enabled }) => (
                <Listbox.Option key={key} value={key} as={Fragment}>
                  {({ active }) => (
                    <li
                      css={[
                        tw`cursor-default select-none relative py-2 pl-3 pr-10`,
                        active
                          ? tw`text-white bg-indigo-600`
                          : tw`text-gray-900`,
                        !enabled && tw`opacity-50 cursor-not-allowed`,
                      ]}
                    >
                      <div tw="flex items-center">
                        <Icon
                          icon={key}
                          alt={name}
                          tw="flex-shrink-0 h-5 rounded-full"
                        />
                        <span
                          css={[
                            tw`ml-3 block truncate`,
                            locale === key
                              ? tw`font-semibold`
                              : tw`font-normal`,
                          ]}
                        >
                          {name}
                        </span>
                      </div>

                      {locale === key ? (
                        <span
                          css={[
                            tw`absolute inset-y-0 right-0 flex items-center pr-3`,
                            active ? tw`text-white` : tw`text-indigo-600`,
                          ]}
                        >
                          <Icon icon="check" tw="h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
}
