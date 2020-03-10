import React from 'react';
// import ButtonLink from './buttonLink';
import Link from './link';
import html from '../i18n/html';

import VideoFrame from './videoFrame';

const VideoGroup = ({ title, items, header }) => {
  return (
    <div className="video-group">
      {title && <h3>{title}</h3>}
      {header}
      {items.map(({ name, text, link, youtube, timestamp }) => (
        <div className="video-item">
          <h4>{name}</h4>
          {text && <p>{html(text)}</p>}
          <VideoFrame title={name} youtube={youtube} timestamp={timestamp} />
          <Link to={link} />
        </div>
      ))}
    </div>
  );
};

export default VideoGroup;
