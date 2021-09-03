// import {
//   SELECTED_DAY,
//   SELECTED_WEEK,
//   SELECTED_MONTH,
//   SELECTED_YEAR,
//   SELECT,
// } from "../_actions/types";
// import { handleActions } from "redux-actions";

// //initial state
// let today = new Date();
// let currentDay = today.getDate();
// let currentWeek = today.getDay();
// let currentMonth = today.getMonth() + 1;
// let currentYear = today.getFullYear();
// const initialState = {
//   currentDay: currentDay,
//   currentWeek: currentWeek,
//   currentMonth: currentMonth,
//   currentYear: currentYear,
// };

// export default handleActions(
//   {
//     [SELECTED_DAY]: ({ currentDay }) => ({ currentDay: currentDay }),
//     [SELECTED_WEEK]: ({ currentWeek }) => ({ currentWeek: currentWeek }),
//     [SELECTED_MONTH]: ({ currentMonth }) => ({ currentMonth: currentMonth }),
//     [SELECTED_YEAR]: ({ currentYear }) => ({ currentYear: currentYear }),
//     //현재 날짜 state를 선택된 날짜로 수정한다.
//     [SELECT]: (state, action) => {
//       return {
//         ...state,
//         currentDay: action.payload.currentDay,
//         currentWeek: action.payload.currentWeek,
//         currentMonth: action.payload.currentMonth,
//         currentYear: action.payload.currentYear,
//       };
//     },
//   },
//   initialState
// );
