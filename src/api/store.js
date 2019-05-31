import fortniteAPI from "./fortniteAPI";
import {fortniteApiToken} from "./config";

export const getCurrentStoreItems = async () => {
  const res = await fortniteAPI.get("store/get", {
    headers: { "Content-Type": "application/json", Authorization: {fortniteApiToken} }
  });
  return res;
};

export const getUpcomingStoreItems = async () => {
  const res = await fortniteAPI.get("upcoming/get", {
    headers: { "Content-Type": "application/json", Authorization: {fortniteApiToken} }
  });
  return res;
};

export const getAllStoreItems = async () => {
  const res = await fortniteAPI.get("items/list", {
    headers: { "Content-Type": "application/json", Authorization: {fortniteApiToken} }
  });
  return res;
};
export const getRandomStoreItems = async () => {
  const res = await fortniteAPI.get("items/random", {
    headers: { "Content-Type": "application/json", Authorization: {fortniteApiToken} }
  });
  return res;
};

export const getPopularStoreItems = async () => {
  const res = await fortniteAPI.get("items/popular", {
    headers: { "Content-Type": "application/json", Authorization: {fortniteApiToken} }
  });
  return res;
};
