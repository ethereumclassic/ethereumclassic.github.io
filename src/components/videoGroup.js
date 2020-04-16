import React from 'react';
// import ButtonLink from './buttonLink';
import Link from './link';
import renderMarkdown from './renderMarkdown';

import VideoFrame from './videoFrame';

const VideoGroup = ({ title, items, header }) => {
  return (
    <div className="video-group">
      {title && <h3>{title}</h3>}
      {header}
      {items.map(({ key, name, text, link, youtube, timestamp }) => (
        <div key={key} className="video-item">
          <h4>{name}</h4>
          {renderMarkdown(text, { unwrap: false })}
          <div className="video-container">
            <VideoFrame title={name} youtube={youtube} timestamp={timestamp} link={link} />
            <Link to={link} className="video-link" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGroup;
