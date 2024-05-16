// src/components/ImageCard/ImageCard.js

import React from 'react'
import './index.css'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({isHovered: true})
  }

  handleMouseLeave = () => {
    this.setState({isHovered: false})
  }

  render() {
    const {image, onHover} = this.props
    const {isHovered} = this.state

    return (
      <div
        className="image-card"
        onMouseEnter={() => {
          this.handleMouseEnter()
          onHover(image)
        }}
        onMouseLeave={this.handleMouseLeave}
      >
        {isHovered && (
          <div className="image-details">
            <h3>{image.alt_description}</h3>
            <p>{image.description || 'No description available.'}</p>
          </div>
        )}
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    )
  }
}

export default ImageCard
