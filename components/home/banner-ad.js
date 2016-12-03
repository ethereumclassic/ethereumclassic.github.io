import React, { PropTypes, Component } from 'react'

export default class BannerAd extends Component {
  render () {
    const { image, alt, link } = this.props
    return (
      <a href={link} className="feature-banner" target="_blank">
        <img src={image} alt={alt} />
      </a>
    )
  }
}

BannerAd.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
}
