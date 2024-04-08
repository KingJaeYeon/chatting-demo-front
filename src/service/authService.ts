import { request } from "./axios.ts";
import { Login, Register } from "./type/Auth.ts";

export function test() {
  return request({
    method: "GET",
    url: "/",
  });
}

export function register(data: Register) {
  console.log(data.icon);
  const formData = new FormData();
  formData.append("displayName", data.displayName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("icon", data.icon);

  return request({
    method: "POST",
    url: "auth/sign-up",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
}

export function login(data: Login) {
  return request({
    method: "POST",
    url: "auth/sign-in",
    data: {
      ...data,
    },
  });
}

export function logout() {
  return request({
    method: "POST",
    url: "auth/logout",
  });
}
