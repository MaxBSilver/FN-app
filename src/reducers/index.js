import { combineReducers } from "redux";
import { news } from "./newsReducer";
import { isLoading } from "./loadingReducer";
import { error } from "./errorReducer";
import { storeItems } from "./storeReducer";
import { cosmeticItems } from "./cosmeticsReducer";

const rootReducer = combineReducers({
  news,
  storeItems,
  isLoading,
  error,
  cosmeticItems
});

export default rootReducer;
