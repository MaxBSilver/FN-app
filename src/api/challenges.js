import fortniteAPI from "./api";
import { fortniteApiToken } from "./config";

export const getChallenges = async () => {
  const res = await fortniteAPI.get("challenges/get?season=current", {
    headers: {
      "Content-Type": "application/json",
      Authorization: fortniteApiToken
    }
  });
  return res;
};
