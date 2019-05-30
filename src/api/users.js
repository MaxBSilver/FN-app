import API from "./api";
import token from "./config";

export const getUserID = async username => {
  const res = await API.get(`users/id?username=${username}`, {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};

export const getUserMatches = async userID => {
  const res = await API.get(`/users/public/matches_v2?user_id=${userID}`, {
    headers: { "Content-Type": "application/json", Authorization: token }
  });
  return res;
};
