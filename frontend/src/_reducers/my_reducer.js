import { CHALLENGE_MY } from "../_actions/types";
import {CREATE_CHALLENGE} from "../_actions/types";
const initialState = {
  challengeData: {},
};

//현재 상태 정의, payload 정의
export default function (state = initialState, action) {
  switch (action.type) {
    case CHALLENGE_MY:
      return { ...state, challengeData: action.payload };
    case CREATE_CHALLENGE:
      return {...state,challengeData: action.payload};
      default:
      return state;
  }
}
