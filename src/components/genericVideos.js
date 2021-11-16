import React from "react";
import Md from "./markdownDynamic";
import Link from "./link";
import VideoFrame from "./videoFrame";

import { h4 as H4 } from "./linkedHeaders";

export default function GenericVideos({ items }) {
  return (
    <>
      {items.map(({ key, title, description, link, youtube, timestamp }) => (
        <div key={key} className="video-item">
          <H4>{title}</H4>
          <Md>{description}</Md>
          <div className="video-container">
            <VideoFrame title={title} youtube={youtube} timestamp={timestamp} />
            <Link to={link} className="video-link">
              {link}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
