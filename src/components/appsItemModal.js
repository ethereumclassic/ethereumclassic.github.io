import React from "react";
import tw from "twin.macro";

import FormattedDate from "./formattedDate";
import Md from "./markdownDynamic";
import Link from "./link";
import Icon from "./icon";
import AppsIcon from "./appsIcon";

const checklist = [
  { key: "verifiedContract", text: "Verified Contract" },
  { key: "openSource", text: "Open Source" },
  { key: "teamSite", text: "Team Site" },
  { key: "audit", text: "Audited" },
  { key: "testSuite", text: "Test Suite" },
  { key: "ipfsFrontend", text: "IPFS Frontend" },
];

function ChecklistSection({ item, ...rest }) {
  const rating = checklist.reduce((n, { key }) => n + (item[key] ? 1 : 0), 0);
  return (
    <div tw="text-sm">
      <div tw="flex items-center space-x-4 my-2">
        <span>Trust Checklist Level {rating}</span>
        <div tw="flex space-x-1 text-shade-lighter">
          {checklist.map((_i, i) => (
            <Icon
              key={i}
              icon={i < rating ? "check" : "times"}
              tw="h-3"
              css={[i < rating && tw`text-primary-neutral`]}
            />
          ))}
        </div>
      </div>
      {/* TODO make this behave like table, auto width */}
      <div tw="grid grid-cols-3 gap-x-3 gap-y-1">
        {checklist.map(({ key, text }) => {
          const isChecked = !!item[key];
          const Comp = isChecked ? Link : "div";
          return (
            <Comp
              key={key}
              to={isChecked && item[key]}
              css={[
                tw`flex items-center space-x-2`,
                isChecked &&
                  tw`text-primary-neutral font-bold hover:text-primary-dark`,
              ]}
            >
              <Icon icon={isChecked ? "check" : "times"} tw="h-3" />
              <span>{text}</span>
            </Comp>
          );
        })}
      </div>
    </div>
  );
}

function LinksSection({ links, ...rest }) {
  return (
    <>
      <div tw="text-secondary-dark text-sm mt-4">
        <Icon icon="warning" tw="h-4 mr-1 inline" />
        <b>Warning: </b>
        This user-submitted app is NOT vetted and NOT guarunteed to be safe; use
        at your own risk, and always do your own research!
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
    </>
  );
}

export default function AppsItemModal({ item, appType, trueCol }) {
  const { image, title, date, authorLink, author, links, description } = item;
  return (
    <div tw="max-w-2xl mx-auto text-shade-light">
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
            <div tw="text-2xl flex-auto text-shade-darkest font-display font-bold">
              {title}
            </div>
            <div tw="text-xl text-shade-dark">
              {authorLink ? (
                <Link showExternal to={authorLink}>
                  {author}
                </Link>
              ) : (
                author
              )}
            </div>
            <div tw="hidden sm:block">
              <ChecklistSection item={item} />
              {/* <LinksSection links={links} /> */}
            </div>
          </div>
        </div>
        <div tw="sm:hidden">
          <ChecklistSection item={item} />
        </div>
        <LinksSection links={links} />
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
