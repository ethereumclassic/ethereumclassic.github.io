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

export default function AppsItem({ item, showType = true, ...rest }) {
  const {
    ui: { appTypes },
  } = useGlobals();
  const { title, authorLink, date, image, type, author, description, links } =
    item;
  console.log(item);
  const appType = appTypes[type];
  const col = appColors[appType.color] || appColors.default;
  return (
    <Modal
      content={
        <div tw="max-w-2xl mx-auto">
          <div tw="pointer-events-auto bg-backdrop-light rounded-xl shadow-lg p-6">
            <div tw="flex space-x-4">
              {image && (
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  tw="w-24 h-24 sm:w-52 sm:h-52 bg-white rounded-lg"
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
                {links && (
                  <div tw="mt-6">
                    {links.map((link) => (
                      <Link
                        id={link.name}
                        button
                        secondary
                        to={link.link}
                        tw="mr-1 mb-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
                <div tw="text-secondary-dark text-sm mt-4">
                  <Icon icon="warning" tw="h-4 mr-1 inline" />
                  <b>Warning: </b>
                  This user-submitted app is NOT vetted and NOT guarunteed to be
                  safe; use at your own risk, and always do your own research!
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
      {...rest}
    >
      <div
        className="group"
        css={[
          tw`h-20 relative flex cursor-pointer shadow-md rounded-md overflow-hidden items-center border border-shade-lightest`,
          col.fg,
        ]}
      >
        <div css={[tw`absolute inset-0 dark:opacity-30`, col.bg]} />
        {image && (
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            tw="h-20 w-20 bg-white"
          />
        )}
        <div tw="p-2 pl-4 z-10">
          <div tw="text-lg line-clamp-2 leading-tight">{title}</div>
          <div tw="overflow-ellipsis opacity-60">
            {showType ? appType.name : author}
          </div>
        </div>
      </div>
    </Modal>
  );
}
