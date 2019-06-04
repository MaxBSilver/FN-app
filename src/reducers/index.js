import { combineReducers } from "redux";
import { news } from "./newsReducer";
import { isLoading } from "./loadingReducer";
import { error } from "./errorReducer";
import { storeItems } from "./storeReducer";

const rootReducer = combineReducers({
  news,
  storeItems,
  isLoading,
  error
});

export default rootReducer;
