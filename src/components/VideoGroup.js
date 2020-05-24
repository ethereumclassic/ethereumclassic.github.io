import React from 'react';
import Md from './Markdown';
import Link from './Link';
import VideoFrame from './VideoFrame';

const VideoGroup = ({ data: { items } }) => {
  return (
    <div className="video-group">
      {items.map(({ key, title, description, link, youtube, timestamp }) => (
        <div key={key} className="video-item">
          <h4>{title}</h4>
          <Md>{description}</Md>
          <div className="video-container">
            <VideoFrame title={title} youtube={youtube} timestamp={timestamp} />
            <Link to={link} className="video-link">
              {link}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGroup;
