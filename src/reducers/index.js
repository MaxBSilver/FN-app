import { combineReducers } from "redux";
import { isLoading, hasErrored, news } from "./newsReducer";

const rootReducer = combineReducers({
  news,
  isLoading,
  error: hasErrored
});

export default rootReducer;
