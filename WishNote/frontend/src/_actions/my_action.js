import axios from "axios";
import { CHALLENGE_MY } from "./types";

//챌린지 객체를 가져오는 액션 함수 정의
export function challengeMy() {
  const request = axios.get("/api/myPage").then((response) => response.data);
  return {
    type: CHALLENGE_MY,
    payload: request,
  };
}
