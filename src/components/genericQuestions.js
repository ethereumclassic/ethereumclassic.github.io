import React, { Fragment } from "react";
import "twin.macro";
import { Disclosure } from "@headlessui/react";

import Md from "./markdownDynamic";
import Icon from "./icon";

// TODO noscript show all

export default function GenericLinks({ items }) {
  return (
    <div tw="divide-y divide-shade-lighter">
      {items.map(({ key, question, answer }) => (
        <div tw="py-5">
          <Disclosure key={key}>
            {({ open }) => (
              <>
                <Disclosure.Button tw="flex items-center space-x-2 text-left text-shade-dark hover:text-shade-darkest text-lg font-bold">
                  <div>
                    <Icon icon={open ? "down" : "right"} tw="w-5 h-5" />
                  </div>
                  <div>{question}</div>
                </Disclosure.Button>
                <Disclosure.Panel tw="mt-5">
                  <Md unwrap>{answer}</Md>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
