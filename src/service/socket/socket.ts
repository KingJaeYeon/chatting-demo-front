import { io } from "socket.io-client";

export let socket: any;
// client-side

export function socketTest(access: any) {
  //쿠키에서 토큰을 가져온다

  socket = io(import.meta.env.VITE_CHAT_URL, { query: { token: access } });
  socket.on("connect", () => {
    console.log("socket connect", socket.id); // x8WIv7-mJelg7on_ALbx
  });
  socket.on("error", (error: any) => {
    console.error(error);
  });
  socket.on("disconnect", () => {
    console.log("socket disconnect", socket.id); // undefined
  });
  socket.on("reconnect", (attempt) => {
    console.log("reconnect");
  });
  return socket;
}
