import React from 'react';

class VideoFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
  }

  render() {
    const { play } = this.state;
    const { title, src, youtube, timestamp } = this.props;
    const thumb = `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`;
    if (!play) {
      return (
        <div className="video-frame not-playing" onClick={() => this.setState({ play: true })}>
          <div className="play">
            <i className="fas fa-play" />
          </div>
          <div className="preview" style={{ backgroundImage: `url("${thumb}")` }} />
        </div>
      );
    }
    let link = src;
    if (youtube) {
      link = `https://www.youtube.com/embed/${youtube}?autoplay=1`;
    }
    if (timestamp) {
      link = `${link}&start=${timestamp}`;
    }
    return (
      <iframe
        className="video-frame"
        title={title}
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
}
export default VideoFrame;
