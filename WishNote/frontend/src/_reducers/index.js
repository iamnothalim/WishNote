import { combineReducers } from "redux";
import user from "./user_reducer";
import my from "./my_reducer";
import calendar from "./calendar_reducer";

const rootReducer = combineReducers({
  user,
  my,
  calendar,
});

export default rootReducer;
