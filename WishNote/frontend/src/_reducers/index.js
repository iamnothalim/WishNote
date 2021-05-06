import { combineReducers } from "redux";
import user from "./user_reducer";
import my from "./my_reducer";
import feed from "./feed_reducer";
import calendar from "./calendar_reducer";

const rootReducer = combineReducers({
  user,
  my,
  feed,
  calendar,
});

export default rootReducer;
