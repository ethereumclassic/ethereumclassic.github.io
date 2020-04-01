import React from 'react';

class VideoFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
  }

  render() {
    const { play } = this.state;
    if (!play) {
      return (
        <div className="video-frame not-playing" onClick={() => this.setState({ play: true })}>
          <div>
            <i className="fas fa-play" />
          </div>
        </div>
      );
    }
    const { title, src, youtube } = this.props;
    let link = src;
    if (youtube) {
      link = `https://www.youtube.com/embed/${youtube}?autoplay=1`;
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
