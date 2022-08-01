import axios from "axios";
// import {REACT_APP_NASA_ENDPOINT,REACT_APP_NASA_API_KEY}  from "./const"

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
    }
    
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// https://api.nasa.gov/planetary/apod?api_key=V8P0GZStzgsohs4IzTlZs0oBaFj8OpsdQsk6PteM

export default {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod${nasaApiKey}`)
  },
}