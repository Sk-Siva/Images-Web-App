// src/components/ImageGrid/ImageGrid.js

import {Component} from 'react'
import ImageCard from '../ImageCard'
import './index.css'

class ImageGrid extends Component {
  render() {
    const {images, onImageHover} = this.props
    return (
      <div className="image-grid">
        {images.map(image => (
          <ImageCard key={image.id} image={image} onHover={onImageHover} />
        ))}
      </div>
    )
  }
}

export default ImageGrid
