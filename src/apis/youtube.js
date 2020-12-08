import React from "react";
import axios from "axios";

const KEY = "AIzaSyAqAyYxH4LhWZCmD5TO--zUyAx1sQcaT3o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
