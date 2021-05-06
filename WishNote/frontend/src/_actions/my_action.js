import axios from "axios";
import { CHALLENGE_MY } from "./types";
import {CREATE_CHALLENGE,PARTICIPATE_CHALLENGE} from "./types";
//챌린지 객체를 가져오는 액션 함수 정의
export function challengeMy(dataToSubmit) {
  console.log("dataToSubmit", dataToSubmit);
  const request = axios
    .post("/api/challenge/state", dataToSubmit)
    .then((response) => response.data);
  console.log("request", request);
  return {
    type: CHALLENGE_MY,
    payload: request,
  };
}

export function createChallenge(dataToSubmit){
  const request = axios
    .post("/api/challenge", dataToSubmit)
    .then((response) => response.data);

  return {
    type: CREATE_CHALLENGE,
    payload: request,
  };
}

export function participateChallenge(challengeName){
  const request = axios
    .post("/api/challenge/state/participate",challengeName)
    .then((response) => response.data);

  return {
    type: PARTICIPATE_CHALLENGE,
    payload: request,
  };
}