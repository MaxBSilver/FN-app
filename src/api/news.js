import API from "./api";
import token from "./config";

export const getCurrentStoreItems = async () => {
  const res = await API.get("store/get", {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};

export const getUpcomingStoreItems = async () => {
  const res = await API.get("upcoming/get", {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};

export const getAllStoreItems = async () => {
  const res = await API.get("items/list", {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};
