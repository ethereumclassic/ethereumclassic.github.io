import React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import FormattedDate from "./formattedDate";
import VideosModal from "./videosModal";
import Icon from "./icon";

export default function VideosItem({ item, featured }) {
  const { author, title, date, videoImage } = item;
  return (
    <VideosModal
      className="group"
      css={[
        tw`cursor-pointer relative border border-shade-lighter bg-backdrop-light shadow-sm rounded-md overflow-hidden text-shade-darker hover:text-shade-darkest hover:bg-primary-lightest`,
        featured && tw`hover:bg-secondary-lightest`,
      ]}
      item={item}
    >
      {featured && (
        <>
          <Icon
            icon="star"
            tw="absolute rotate-6 top-2 right-2 z-20 h-6 w-6 text-white"
          />
          <Icon
            icon="star"
            tw="absolute rotate-6 top-2 right-2 z-10 h-6 w-6 blur-sm text-black opacity-60"
          />
        </>
      )}
      <div tw="aspect-w-16 aspect-h-9 w-full -my-0.5">
        <GatsbyImage image={getImage(videoImage)} alt={title} />
      </div>
      <div
        css={[
          tw`text-primary-darkest bg-primary-lightest px-3 py-2 text-sm flex items-center`,
          featured && tw`bg-secondary-lighter text-secondary-darkest`,
        ]}
      >
        <div tw="overflow-ellipsis overflow-hidden whitespace-nowrap flex-auto">
          {author}
        </div>
        <FormattedDate
          tw="overflow-ellipsis overflow-hidden whitespace-nowrap"
          date={date}
        />
      </div>
      <div tw="px-4 py-2">
        <div tw="line-clamp-3">{title}</div>
      </div>
    </VideosModal>
  );
}
