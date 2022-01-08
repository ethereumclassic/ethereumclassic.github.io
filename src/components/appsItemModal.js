import React from "react";
import tw from "twin.macro";

import FormattedDate from "./formattedDate";
import Md from "./markdownDynamic";
import Link from "./link";
import Icon from "./icon";
import AppsIcon from "./appsIcon";

function LinksSection({ links, ...rest }) {
  return (
    <div {...rest} tw="text-shade-light">
      <div tw="flex items-center space-x-2 my-2">
        <span>Trust Checklist:</span>
        <div tw="flex space-x-1 text-shade-lighter">
          <Icon icon="star" tw="h-3" tw="text-primary-neutral" />
          <Icon icon="star" tw="h-3" tw="text-primary-neutral" />
          <Icon icon="star" tw="h-3" />
          <Icon icon="star" tw="h-3" />
          <Icon icon="star" tw="h-3" />
        </div>
      </div>
      <div tw="grid grid-cols-3 gap-x-4 gap-y-1">
        {[
          { key: "openSource", text: "Open Source", on: true },
          { key: "teamSite", text: "Team Site" },
          { key: "audited", text: "Audited" },
          { key: "testSuite", text: "Test Suite" },
          { key: "ipfs", text: "IPFS Frontend", on: true },
        ].map(({ key, text, on }) => (
          <div
            key={key}
            css={[
              tw`flex items-center space-x-2`,
              on && tw`text-primary-neutral font-bold`,
            ]}
          >
            <Icon icon={on ? "check" : "times"} tw="h-3" />
            <span>{text}</span>
          </div>
        ))}
      </div>
      {links && (
        <div tw="mt-6">
          {links.map((link) => (
            <Link id={link.name} button secondary to={link.link} tw="mr-1 mb-1">
              {link.name}
            </Link>
          ))}
        </div>
      )}
      <div tw="text-secondary-dark text-sm mt-4">
        <Icon icon="warning" tw="h-4 mr-1 inline" />
        <b>Warning: </b>
        This user-submitted app is NOT vetted and NOT guarunteed to be safe; use
        at your own risk, and always do your own research!
      </div>
    </div>
  );
}

export default function AppsItemModal({ item, appType, trueCol }) {
  const { image, title, date, authorLink, author, links, description } = item;
  return (
    <div tw="max-w-2xl mx-auto">
      <div tw="pointer-events-auto bg-backdrop-light rounded-xl shadow-lg p-6">
        <div tw="flex space-x-6">
          <AppsIcon
            image={image}
            title={title}
            icon={appType.icon}
            iconCol={trueCol.icon}
            big
          />
          <div tw="flex-1">
            <div tw="text-sm text-shade-neutral space-x-2">
              <span>{appType.name}</span>
              <FormattedDate date={date} />
            </div>
            <div tw="text-2xl flex-auto text-shade-darkest">{title}</div>
            <div tw="text-xl text-shade-dark">
              {authorLink ? (
                <Link showExternal to={authorLink}>
                  {author}
                </Link>
              ) : (
                author
              )}
            </div>
            <LinksSection links={links} tw="hidden sm:block" />
          </div>
        </div>
        <LinksSection links={links} tw="sm:hidden" />
        {description && (
          <div tw="mt-4">
            <div tw="max-h-[30vh] overflow-y-auto">
              <Md tw="prose max-w-full">{description}</Md>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
