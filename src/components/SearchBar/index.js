// SearchBar.js

import {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }
  }

  handleChange = event => {
    this.setState({query: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {query} = this.state
    this.props.onSearch(query)
  }

  render() {
    const {query} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          placeholder="Search images"
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar
