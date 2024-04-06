import axios, { AxiosRequestConfig } from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return status < 400 || status === 401;
  },
});

client.interceptors.response.use(async (res) => {
  const { status } = res;
  if (status === 401) {
    // await refreshTokens();
    throw new Error("refresh token", { cause: { status: status } });
  }
  return res;
});

const onSuccess = function (response: any) {
  return response.data;
};

const onError = function (error: any) {
  return error;
};

export const request = function (options: AxiosRequestConfig) {
  return client(options).then(onSuccess).catch(onError);
};
