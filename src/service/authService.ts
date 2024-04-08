import { request } from "./axios.ts";
import { Login, Register } from "./type/Auth.ts";

export function test() {
  return request({
    method: "GET",
    url: "/",
  });
}

export function register(data: Register) {
  return request({
    method: "POST",
    url: "auth/sign-up",
    data: data,
  });
}

export function login(data: Login) {
  return request({
    method: "POST",
    url: "auth/sign-in",
    data: data,
  });
}

export function logout() {
  return request({
    method: "POST",
    url: "auth/logout",
  });
}
