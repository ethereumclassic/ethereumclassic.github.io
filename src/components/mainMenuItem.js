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
        tw="text-base font-medium text-shade-neutral hover:text-shade-darkest"
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
              tw`rounded-md inline-flex items-center text-base font-medium hover:text-shade-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-neutral`,
              open ? tw`text-shade-darkest` : tw`text-shade-neutral`,
            ]}
          >
            <span>{item.name}</span>
            <Icon
              icon="down"
              css={[
                tw`ml-2 h-5 w-5 group-hover:text-shade-neutral`,
                open ? tw`text-shade-neutral` : tw`text-shade-light`,
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
// <a href="#" tw="text-base font-medium text-shade-neutral hover:text-shade-darkest">
//   Pricing
// </a>
// <a href="#" tw="text-base font-medium text-shade-neutral hover:text-shade-darkest">
//   Docs
// </a>

// <Popover tw="relative">
//   {({ open }) => (
//     <>
//       <Popover.Button
//         className="group"
//         css={[
//           tw`bg-backdrop-light rounded-md inline-flex items-center text-base font-medium hover:text-shade-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-neutral`,
//           open ? tw`text-shade-darkest` : tw`text-shade-neutral`,
//         ]}
//       >
//         <span>More</span>
//         <ChevronDownIcon
//           css={[
//             tw`ml-2 h-5 w-5 group-hover:text-shade-neutral`,
//             open ? tw`text-shade-neutral` : tw`text-shade-light`,
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
//               <div tw="rounded-lg shadow-lg ring-1 ring-shade-darkest ring-opacity-5 overflow-hidden">
//                 <div tw="relative grid gap-6 bg-backdrop-light px-5 py-6 sm:gap-8 sm:p-8">
//                   {resources.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       tw="-m-3 p-3 flex items-start rounded-lg hover:bg-shade-lightest"
//                     >
//                       <item.icon
//                         tw="flex-shrink-0 h-6 w-6 text-secondary-dark"
//                         aria-hidden="true"
//                       />
//                       <div tw="ml-4">
//                         <p tw="text-base font-medium text-shade-darkest">
//                           {item.name}
//                         </p>
//                         <p tw="mt-1 text-sm text-shade-neutral">
//                           {item.description}
//                         </p>
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//                 <div tw="px-5 py-5 bg-shade-lightest sm:px-8 sm:py-8">
//                   <div>
//                     <h3 tw="text-sm tracking-wide font-medium text-shade-neutral uppercase">
//                       Recent Posts
//                     </h3>
//                     <ul role="list" tw="mt-4 space-y-4">
//                       {recentPosts.map((post) => (
//                         <li key={post.id} tw="text-base truncate">
//                           <a
//                             href={post.href}
//                             tw="font-medium text-shade-darkest hover:text-shade-dark"
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
//                       tw="font-medium text-secondary-dark hover:text-secondary-neutral"
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
