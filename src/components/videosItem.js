import React from "react";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import FormattedDate from "./formattedDate";
import Modal from "./modal";
import Icon from "./icon";
import Md from "./markdownDynamic";
import VideoFrame from "./videoFrame";
import Link from "./link";
import TwContainer from "./twContainer";

export default function VideosItem({ item, featured }) {
  const {
    author,
    title,
    date,
    youtube,
    authorYoutube,
    description,
    videoImage,
  } = item;
  return (
    <Modal
      cinema
      content={
        <TwContainer>
          <div tw="pointer-events-auto">
            <VideoFrame youtube={youtube} autoplay />
            <div tw="space-y-4 mt-4">
              <div tw="flex text-lg space-x-4">
                <div tw="flex-auto font-bold">{title}</div>
                {author && authorYoutube ? (
                  <Link
                    showExternal
                    to={`https://youtube.com/channel/${authorYoutube}`}
                  >
                    {author}
                  </Link>
                ) : (
                  <div>{author}</div>
                )}
              </div>
              {description && <Md styleLinks>{description}</Md>}
            </div>
          </div>
        </TwContainer>
      }
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
      <div tw="aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <GatsbyImage
          image={getImage(videoImage)}
          alt={title}
          tw="w-auto transition-all -mx-px group-hover:scale-110"
        />
      </div>
      <div
        css={[
          tw`text-primary-darkest bg-primary-lightest px-3 py-2 text-sm flex items-center space-x-2`,
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
    </Modal>
  );
}
