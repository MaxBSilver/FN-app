import API from "./api";
import token from "./config";

export const getChallenges = async () => {
  const res = await API.get("challenges/get?season=current", {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};
