const API_URL = 'https://api.unsplash.com/search/photos'
const ACCESS_KEY = 'R8h0mOP7aDKpn0OBSVvEEfCPDvIe249sd2oaUjkOjaI' // Replace with your Unsplash Access Key

export const fetchData = async query => {
  try {
    const response = await fetch(
      `${API_URL}?query=${query}&client_id=${ACCESS_KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    return data.results // The API response contains an array of image objects under the 'results' key
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }
}
