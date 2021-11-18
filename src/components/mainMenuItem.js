import React from "react";
import "twin.macro";
import { Popover } from "@headlessui/react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";

import MainMenuSubMenu from "./mainMenuSubMenu";
import Icon from "./icon";

export default function MainMenuItem({ item }) {
  // No MainMenuSubMenu
  if (!item.navItems) {
    return (
      <LocalizedLink
        to={item.link}
        tw="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        {item.name}
      </LocalizedLink>
    );
  }
  // Item with MainMenuSubMenu
  return (
    <Popover tw="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="group"
            css={[
              tw`bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
              open ? tw`text-gray-900` : tw`text-gray-500`,
            ]}
          >
            <span>{item.name}</span>
            <Icon
              icon="down"
              css={[
                tw`ml-2 h-5 w-5 group-hover:text-gray-500`,
                open ? tw`text-gray-600` : tw`text-gray-400`,
              ]}
              aria-hidden="true"
            />
          </Popover.Button>
          {/* TODO other options like rendering below the list as per template */}
          <MainMenuSubMenu items={item.navItems} />
        </>
      )}
    </Popover>
  );
}
// <a href="#" tw="text-base font-medium text-gray-500 hover:text-gray-900">
//   Pricing
// </a>
// <a href="#" tw="text-base font-medium text-gray-500 hover:text-gray-900">
//   Docs
// </a>

// <Popover tw="relative">
//   {({ open }) => (
//     <>
//       <Popover.Button
//         className="group"
//         css={[
//           tw`bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
//           open ? tw`text-gray-900` : tw`text-gray-500`,
//         ]}
//       >
//         <span>More</span>
//         <ChevronDownIcon
//           css={[
//             tw`ml-2 h-5 w-5 group-hover:text-gray-500`,
//             open ? tw`text-gray-600` : tw`text-gray-400`,
//           ]}
//           aria-hidden="true"
//         />
//       </Popover.Button>

//       <ClassNames>
//         {({ css }) => (
//           <Transition
//             as={Fragment}
//             enter={css(tw`transition ease-out duration-200`)}
//             enterFrom={css(tw`opacity-0 translate-y-1`)}
//             enterTo={css(tw`opacity-100 translate-y-0`)}
//             leave={css(tw`transition ease-in duration-150`)}
//             leaveFrom={css(tw`opacity-100 translate-y-0`)}
//             leaveTo={css(tw`opacity-0 translate-y-1`)}
//           >
//             <Popover.Panel tw="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
//               <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                 <div tw="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                   {resources.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       tw="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
//                     >
//                       <item.icon
//                         tw="flex-shrink-0 h-6 w-6 text-indigo-600"
//                         aria-hidden="true"
//                       />
//                       <div tw="ml-4">
//                         <p tw="text-base font-medium text-gray-900">
//                           {item.name}
//                         </p>
//                         <p tw="mt-1 text-sm text-gray-500">
//                           {item.description}
//                         </p>
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//                 <div tw="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
//                   <div>
//                     <h3 tw="text-sm tracking-wide font-medium text-gray-500 uppercase">
//                       Recent Posts
//                     </h3>
//                     <ul role="list" tw="mt-4 space-y-4">
//                       {recentPosts.map((post) => (
//                         <li key={post.id} tw="text-base truncate">
//                           <a
//                             href={post.href}
//                             tw="font-medium text-gray-900 hover:text-gray-700"
//                           >
//                             {post.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div tw="mt-5 text-sm">
//                     <a
//                       href="#"
//                       tw="font-medium text-indigo-600 hover:text-indigo-500"
//                     >
//                       {" "}
//                       View all posts{" "}
//                       <span aria-hidden="true">&rarr;</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </Popover.Panel>
//           </Transition>
//         )}
//       </ClassNames>
//     </>
//   )}
// </Popover>
