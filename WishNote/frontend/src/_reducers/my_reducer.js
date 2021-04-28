import { CHALLENGE_MY } from "../_actions/types";
const initialState = {
  challengeData: {
    challengeName: "챌린지 목록이 없습니다.",
  },
};

//현재 상태 정의, payload 정의
export default function (state = initialState, action) {
  switch (action.type) {
    case CHALLENGE_MY:
      return { ...state, challengeData: action.payload };
    default:
      return state;
  }
}