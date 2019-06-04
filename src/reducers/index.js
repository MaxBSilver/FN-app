import { combineReducers } from "redux";
import { news } from "./newsReducer";
import { isLoading } from "./loadingReducer";
import { error } from "./errorReducer";

const rootReducer = combineReducers({
  news,
  isLoading,
  error
});

export default rootReducer;
