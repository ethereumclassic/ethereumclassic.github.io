import React from "react";
import tw from "twin.macro";

import FormattedDate from "./formattedDate";
import Md from "./markdownDynamic";
import Link from "./link";
import Icon from "./icon";
import AppsIcon from "./appsIcon";
import { Helmet } from "react-helmet";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

const checklist = [
  "verifiedContract",
  "openSource",
  "audit",
  "testSuite",
  "ipfsFrontend",
];

function ChecklistSection({ item }) {
  const {
    ui: { appModal: i18n },
  } = useGlobals();
  const rating = checklist.reduce((n, key) => n + (item[key] ? 1 : 0), 0);
  return (
    <div tw="text-sm">
      <div tw="flex items-center space-x-4 my-2">
        <span>
          {i18n.checkListRating} {rating}
        </span>
        <div tw="flex space-x-1 text-shade-lighter">
          {checklist
            .filter((_i, i) => i < rating)
            .map((_i, i) => (
              <Icon key={i} icon={"check"} tw="h-3 text-primary-neutral" />
            ))}
        </div>
      </div>
      {/* LODO make this behave like table, auto width */}
      <div tw="flex flex-wrap">
        {checklist.map((key) => {
          const isChecked = !!item[key];
          const Comp = isChecked ? Link : "div";
          return (
            <Comp
              key={key}
              to={isChecked && item[key]}
              css={[
                tw`inline-flex items-center space-x-2 mr-4 mb-2`,
                isChecked &&
                  tw`text-primary-neutral font-bold hover:text-primary-dark`,
              ]}
            >
              <Icon
                icon={isChecked ? "check" : "questionMark"}
                tw="h-3 flex-1"
              />
              <span tw="flex-shrink whitespace-nowrap overflow-ellipsis">
                {i18n[key]}
              </span>
            </Comp>
          );
        })}
      </div>
    </div>
  );
}

function LinksSection({ links }) {
  const {
    ui: { appModal: i18n },
  } = useGlobals();
  return (
    <>
      <div tw="text-secondary-dark text-sm mt-4">
        <Icon icon="warning" tw="h-4 mr-1 inline" />
        <Md unwrap>{i18n.warning}</Md>
      </div>
      {links && (
        <div tw="mt-6">
          {links.map(({ name, link, icon }, i) => (
            <Link
              id={name}
              icon={icon}
              button
              primary={i === 0}
              secondary={i > 0}
              to={link}
              tw="mr-1 mb-1"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default function AppsItemModal({ item, appType, trueCol }) {
  const {
    ui: { appModal: i18n },
  } = useGlobals();
  const { image, title, date, authorLink, author, links, description } = item;
  return (
    <div tw="max-w-2xl mx-auto text-shade-light">
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
            <div tw="text-sm text-shade-neutral">{appType.name}</div>
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
            <div tw="mb-3">
              {i18n.added} <FormattedDate date={date} />
            </div>
            <div tw="hidden sm:block">
              <ChecklistSection item={item} />
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
