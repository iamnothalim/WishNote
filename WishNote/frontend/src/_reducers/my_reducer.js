import { CHALLENGE_ME } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case CHALLENGE_ME:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
