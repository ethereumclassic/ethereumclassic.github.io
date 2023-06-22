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
import { Helmet } from "react-helmet";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function VideosItem({ item, featured, hash = true, ...rest }) {
  const {
    author,
    title,
    uploaded,
    youtube,
    slug,
    authorYoutube,
    description,
    videoImage,
  } = item;
  const { ui } = useGlobals();

  return (
    <div {...rest}>
      <Modal
        slug={hash && slug}
        cinema
        content={
          <TwContainer>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <div tw="pointer-events-auto">
              <div tw="mb-4 text-sm opacity-60">{ui.disclaimer}</div>
              <VideoFrame youtube={youtube} autoplay />
              <div tw="space-y-4 mt-4">
                <div tw="flex text-lg space-x-4">
                  <div tw="flex-auto font-bold">{title}</div>
                  {author && authorYoutube ? (
                    <Link
                      showExternal
                      to={`https://youtube.com/${authorYoutube}`}
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
        css={[
          tw`cursor-pointer relative border border-shade-lightest bg-backdrop-light shadow-sm rounded-md overflow-hidden text-shade-darker hover:text-shade-darkest hover:bg-primary-lightest`,
          featured &&
            tw`bg-primary-lightest text-primary-darkest hover:bg-primary-lighter`,
        ]}
        className="group"
      >
        {featured && (
          <>
            <Icon
              icon="star"
              tw="absolute rotate-6 top-2 right-2 z-10 h-6 w-6 blur-sm text-black opacity-60"
            />
            <Icon
              icon="star"
              tw="absolute rotate-6 top-2 right-2 z-10 h-6 w-6 text-white"
            />
          </>
        )}
        <div tw="aspect-w-16 aspect-h-9 w-full overflow-hidden">
          {videoImage ? (
            <GatsbyImage
              image={getImage(videoImage)}
              alt={title}
              tw="w-auto transition-all -mx-0.5 group-hover:scale-110"
            />
          ) : (
            <div tw="flex bg-primary-lighter">
              <Icon
                icon="questionMark"
                tw="m-10 flex-auto text-primary-lightest"
              />
            </div>
          )}
        </div>
        <div tw="px-3 py-2 line-clamp-4 font-medium text-sm">{title}</div>
        <div
          css={[
            tw`text-shade-light px-3 py-2 text-xs flex items-center space-x-2 border-t border-t-shade-lightest`,
            featured && tw`text-primary-dark border-t-primary-lighter`,
          ]}
        >
          <div tw="overflow-ellipsis overflow-hidden whitespace-nowrap flex-auto">
            {author}
          </div>
          <FormattedDate
            tw="overflow-ellipsis overflow-hidden whitespace-nowrap"
            date={uploaded}
          />
        </div>
      </Modal>
    </div>
  );
}
