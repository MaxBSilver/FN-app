import { fortniteAPI } from "./api";
import { fortniteApiToken } from "./config";
import { isLoading, hasErrored, setCosmeticItems } from "../actions";

export const getAllCosmetics = async () => {
  const res = await fortniteAPI.get("items/list", {
    headers: {
      "Content-Type": "application/json",
      Authorization: fortniteApiToken
    }
  });
  return res;
};
export const getAllCosmeticsThunk = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await getAllCosmetics();
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      dispatch(setCosmeticItems(response.data.data));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
