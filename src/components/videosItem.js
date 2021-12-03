import React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import FormattedDate from "./formattedDate";
import VideosModal from "./videosModal";

export default function VideosItem({ item }) {
  const { author, title, date, localImage } = item;
  return (
    <VideosModal
      tw="cursor-pointer relative border border-shade-lighter bg-backdrop-light shadow-sm rounded-sm overflow-hidden text-shade-darker hover:text-shade-darkest hover:bg-primary-lightest"
      item={item}
    >
      <GatsbyImage
        image={getImage(localImage)}
        tw="aspect-w-16 aspect-h-9 w-full"
        alt={title}
      />
      <div
        css={[
          tw`text-primary-darkest bg-primary-lightest px-3 py-2 text-sm`,
          // blog && tw`bg-primary-lighter`,
        ]}
      >
        <FormattedDate
          tw="overflow-ellipsis overflow-hidden whitespace-nowrap w-full"
          date={date}
        />
        <div tw="font-bold overflow-ellipsis overflow-hidden whitespace-nowrap w-full">
          {author}
        </div>
      </div>
      <div tw="line-clamp-3 p-4">{title}</div>
    </VideosModal>
  );
}
