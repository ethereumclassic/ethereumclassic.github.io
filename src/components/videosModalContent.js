import React from "react";
import tw from "twin.macro";

import VideoFrame from "./videoFrame";
import Md from "./markdownDynamic";
import Link from "./link";

export default function VideosModalContent({
  item: { title, youtube, description, author, authorYoutube },
}) {
  return (
    <>
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
    </>
  );
}
