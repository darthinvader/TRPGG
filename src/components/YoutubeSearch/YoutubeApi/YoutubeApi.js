import axios from "axios";

const { REACT_APP_YOUTUBE_API_KEY: youtube_key } = process.env;

const youtubeSearchRequest = axios.create({
  method: "GET",
  baseURL: "https://youtube.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: youtube_key,
  },
});

export default youtubeSearchRequest;
