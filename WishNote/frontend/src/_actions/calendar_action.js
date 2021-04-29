import { createAction } from "redux-actions";
import {
  SELECTED_DAY,
  SELECTED_WEEK,
  SELECTED_MONTH,
  SELECTED_YEAR,
  SELECT,
} from "./types";

//action creator
export const selectedDay = createAction(SELECTED_DAY);
export const selectedWeek = createAction(SELECTED_WEEK);
export const selectedMonth = createAction(SELECTED_MONTH);
export const selectedYear = createAction(SELECTED_YEAR);
export const select = createAction(SELECT);
