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
  // 전체 에러 객체 로깅
  console.log("Error Object:", error);
  // 응답이 있는 경우, 상세한 응답 정보 로깅
  if (error.response) {
    console.log("Error Response:", error.response);
  }
  // 에러 메시지 로깅
  console.log("Error Message:", error.message.data);
  return Promise.reject(error.response.data);
};

export const request = function (options: AxiosRequestConfig) {
  return client(options).then(onSuccess).catch(onError);
};
