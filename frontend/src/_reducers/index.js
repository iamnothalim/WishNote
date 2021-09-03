import { combineReducers } from "redux";
import user from "./user_reducer";
import my from "./my_reducer";
import feed from "./feed_reducer";

const rootReducer = combineReducers({
  user,
  my,
  feed,
});

export default rootReducer;
