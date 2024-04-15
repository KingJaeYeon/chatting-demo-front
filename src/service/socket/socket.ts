import { io } from "socket.io-client";

export let socket: any;
// client-side

export function socketTest() {
  //쿠키에서 토큰을 가져온다

  socket = io(import.meta.env.VITE_CHAT_URL);
  socket.on("connection", () => {
    console.log("socket connect", socket.id); // x8WIv7-mJelg7on_ALbx

    socket.on("error", (error: any) => {
      console.error(error);
    });
    socket.on("disconnect", () => {
      console.log("socket disconnect", socket.id); // undefined
    });
  });

  return socket;
}
