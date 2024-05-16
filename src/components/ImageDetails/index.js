// ImageDetails.js

import {Component} from 'react'

class ImageDetails extends Component {
  render() {
    const {image} = this.props
    return (
      <div className="image-details">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    )
  }
}

export default ImageDetails
