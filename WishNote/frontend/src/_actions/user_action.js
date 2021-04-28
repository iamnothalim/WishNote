import axios from "axios";
import { useSelector } from "react-redux";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, CHALLENGE_ME } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/auth/login", dataToSubmit)
    .then((response) => response.data);
  console.log('로그인 페이로드',request)
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  console.log('회원가입 데이터 들어갑니다!',dataToSubmit)
  const request = axios
    .post("/api/auth/register", dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/auth/check")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function charge(dataToSubmit){
  
  // const request = axios
  //   .post("/api/auth/charge",dataToSubmit)
}