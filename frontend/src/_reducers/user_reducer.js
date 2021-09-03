import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  CHARGE_USER,
} from "../_actions/types";

const initialState = {
  userData: {
    feedData: { feedCategory: ["a"], feedCreatedAt: ["a"], feedTitle: ["a"] },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    // case LOGIN_USER:
    //   return { ...state, user: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case CHARGE_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
