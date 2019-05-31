import { fortniteAPI } from "./api";
import { fortniteApiToken } from "./config";

export const getBrNews = async () => {
  const res = await fortniteAPI.get("br_motd/get", {
    headers: { "Content-Type": "application/json", Authorization: fortniteApiToken }
  });
  return res;
};

export const getStwNews = async () => {
  const res = await fortniteAPI.get("stw_motd/get", {
    headers: { "Content-Type": "application/json", Authorization: fortniteApiToken }
  });
  return res;
};
