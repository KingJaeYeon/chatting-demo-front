import { io } from "socket.io-client";
import { useLayoutEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useSocket() {
  //쿠키에서 토큰을 가져온다
  const [socket, setSocket] = useState<any>(null);
  const access = Cookies.get("access");

  useLayoutEffect(() => {
    const newSocket = io(import.meta.env.VITE_CHAT_URL, {
      query: { token: access },
    });
    newSocket.on("connect", () => {
      console.log("Connected to socket server");
      setSocket(newSocket);
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from socket server");
      setSocket(null);
    });

    newSocket.on("error", (error) => {
      console.error("Socket connection error:", error);
    });

    return () => {
      newSocket.close();
    };
  }, [access]);

  if (!socket) {
    return null;
  }
  return socket;
}
