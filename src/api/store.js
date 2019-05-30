import API from "./api";
import token from "./config";

export const getCurrentStore = async () => {
  const res = await API.get("store/get", {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};
