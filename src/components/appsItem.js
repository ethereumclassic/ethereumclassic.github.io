import React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import FormattedDate from "./formattedDate";
import * as appColors from "./appsColors";
import Modal from "./modal";
import Md from "./markdownDynamic";
import Link from "./link";
import Icon from "./icon";

export default function AppsItem({ item, showType = true }) {
  const {
    ui: { appTypes, appLinks },
  } = useGlobals();
  const { title, authorLink, date, image, type, author, description } = item;
  const appType = appTypes[type];
  const col = appColors[appType.color] || appColors.default;
  return (
    <Modal
      content={
        <div tw="max-w-2xl mx-auto">
          <div tw="pointer-events-auto bg-backdrop-light rounded-xl shadow-lg p-4">
            <div tw="flex space-x-4">
              {image && (
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  tw="w-24 h-24 sm:w-44 sm:h-44 bg-white rounded-lg"
                />
              )}
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
                <div tw="mt-6">
                  {["app", "homepage", "twitter", "github"]
                    .filter((t) => item[t])
                    .map((t) => (
                      <Link button secondary to={item[t]} tw="mr-1 mb-1">
                        {appLinks[t]}
                      </Link>
                    ))}
                </div>
                <div tw="text-secondary-dark text-sm">
                  <Icon icon="warning" tw="h-4 mr-1 inline" />
                  <b>Warning: </b>
                  This app is NOT vetted or guarunteed to be safe; use at your
                  own risk, and always do your own research!
                </div>
              </div>
            </div>
            {description && (
              <div tw="mt-4">
                <div tw="max-h-[30vh] overflow-y-auto">
                  <Md tw="prose max-w-full">{description}</Md>
                </div>
              </div>
            )}
          </div>
        </div>
      }
      css={[
        col.bg,
        tw`h-20 flex cursor-pointer relative shadow-sm rounded-md overflow-hidden items-center bg-opacity-30 hover:bg-opacity-50`,
      ]}
    >
      {image && (
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          tw="h-20 w-20 bg-white"
        />
      )}
      <div tw="p-2 pl-4 text-shade-darkest">
        <div tw="text-lg line-clamp-2 leading-tight">{title}</div>
        <div tw="text-shade-neutral overflow-ellipsis">
          {showType ? appType.name : author}
        </div>
      </div>
    </Modal>
  );
}
