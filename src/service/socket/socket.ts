import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_CHAT_URL);
// client-side

export function socketTest() {
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });

  return socket;
}
