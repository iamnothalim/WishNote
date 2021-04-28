import { CHALLENGE_ME } from "../_actions/types";
const initialState = {
  data: {},
};

//현재 상태 정의, payload 정의
export default function (state = {}, action) {
  switch (action.type) {
    case CHALLENGE_ME:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
