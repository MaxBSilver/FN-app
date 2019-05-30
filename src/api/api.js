import axios from "axios";

const fortniteAPI = axios.create({
  baseURL: "https://fortnite-api.theapinetwork.com/"
});

export default fortniteAPI;