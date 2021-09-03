import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, CHARGE_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/auth/login", dataToSubmit)
    .then((response) => response.data);
  console.log("로그인 페이로드", request);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get("/api/auth/logout")
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
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

export function charge(dataToSubmit, id) {
  let body = {
    dataToSubmit,
    id,
  };
  const request = axios
    .post("/api/auth/charge", body)
    .then((response) => response.data);

  return {
    type: CHARGE_USER,
    payload: request,
  };
}
