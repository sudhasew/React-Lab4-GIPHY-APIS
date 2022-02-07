import axios from "axios";

export function getTrendingGif() {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  return axios
    .get<any>(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`
    )
    .then((response) => response.data);
}

export function getSearchGif(searchTerm: string) {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  return axios
    .get<any>(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=25&rating=g&q=${searchTerm}`
    )
    .then((response) => response.data);
}
