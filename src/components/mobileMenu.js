/* This Header requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import "twin.macro";
import { Popover, Transition } from "@headlessui/react";

import Icon from "./icon";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#" },
  { name: "Contact Sales", href: "#" },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export default function MobileMenu() {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div tw="pt-5 pb-6 px-5">
            <div tw="flex items-center justify-between">
              <div>
                <img
                  tw="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div tw="-mr-2">
                <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span tw="sr-only">Close menu</span>
                  <Icon icon="times" tw="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div tw="mt-6">
              <nav tw="grid gap-y-8">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    tw="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <Icon
                      icon="menu"
                      tw="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span tw="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div tw="py-6 px-5 space-y-6">
            <div tw="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                tw="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                tw="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  tw="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div>
              <a
                href="#"
                tw="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p tw="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{" "}
                <a href="#" tw="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
