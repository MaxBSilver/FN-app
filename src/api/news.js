import { fortniteAPI } from "./api";
import { fortniteApiToken } from "./config";
import { isLoading, hasErrored, setNews } from "../actions";

export const getBrNews = async () => {
  const res = await fortniteAPI.get("br_motd/get", {
    headers: {
      "Content-Type": "application/json",
      Authorization: fortniteApiToken
    }
  });
  return res;
};

export const getBrNewsThunk = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await getBrNews();
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      dispatch(setNews(response.data.data));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};

export const getStwNews = async () => {
  const res = await fortniteAPI.get("stw_motd/get", {
    headers: {
      "Content-Type": "application/json",
      Authorization: fortniteApiToken
    }
  });
  return res;
};

