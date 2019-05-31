import axios from "axios";
export const fortniteAPI = axios.create({
  baseURL: "https://fortnite-api.theapinetwork.com/"
});

export const fortniteTrackerAPI = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/"
});


