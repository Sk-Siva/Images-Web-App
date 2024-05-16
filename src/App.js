// App.js

import {Component} from 'react'
import SearchBar from './components/SearchBar'
import ImageGrid from './components/ImageGrid'
import ImageCard from './components/ImageCard'
import Shimmer from './components/Shimmer'
import ImageDetails from './components/ImageDetails'
import {fetchData} from './components/Api'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      images: [],
      loading: false,
      hoveredImage: null,
    }
  }

  handleSearch = async query => {
    this.setState({loading: true})
    try {
      const data = await fetchData(query)
      this.setState({images: data})
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    this.setState({loading: false})
  }

  handleImageHover = image => {
    this.setState({hoveredImage: image})
  }

  render() {
    const {images, loading, hoveredImage} = this.state

    return (
      <div className="bg-con">
        <div>
          <img
            className="image"
            alt="logo"
            src="https://res.cloudinary.com/dz8wat8bb/image/upload/v1715865893/search_img_logo_fnaksm.jpg"
          />
          <SearchBar onSearch={this.handleSearch} />
        </div>

        {loading ? (
          <Shimmer />
        ) : (
          <ImageGrid images={images} onImageHover={this.handleImageHover} />
        )}
        {hoveredImage && <ImageDetails image={hoveredImage} />}
      </div>
    )
  }
}

export default App
