import axios from "axios";
import { CHALLENGE_MY } from "./types";

//챌린지 객체를 가져오는 액션 함수 정의
export function challengeMy(dataToSubmit, id) {
  let body = {
    dataToSubmit,
    id,
  };
  console.log("body", body);
  const request = axios
    .get("/api/myPage/health")
    .then((response) => response.data);
  console.log("request", request);
  return {
    type: CHALLENGE_MY,
    payload: request,
  };
}
