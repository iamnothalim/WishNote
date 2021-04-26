import { combineReducers } from "redux";
import user from "./user_reducer";
import my from "./my_reducer";

const rootReducer = combineReducers({
  user,
  my,
});

export default rootReducer;
