import API from "./api";
import token from "./config";

export const getBrNews = async () => {
  const res = await API.get("br_motd/get", {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};

export const getStwNews = async () => {
  const res = await API.get("stw_motd/get", {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};
