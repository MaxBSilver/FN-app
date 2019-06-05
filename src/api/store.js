import { fortniteAPI } from "./api";
import { fortniteApiToken } from "./config";
import { isLoading, hasErrored, setStore } from "../actions";

export const getCurrentStoreItems = async () => {
  const res = await fortniteAPI.get("store/get", {
    headers: {
      "Content-Type": "application/json",
      Authorization:  fortniteApiToken 
    }
  });
  return res;
};
export const getCurrentStoreItemsThunk = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await getCurrentStoreItems();
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      dispatch(setStore(response.data.data));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};

