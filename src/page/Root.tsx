import { Navbar } from "@/components/Navbar.tsx";
import { Outlet, useLocation } from "react-router-dom";
import HomeSidebar from "@/components/HomeSidebar.tsx";
import UserInfo from "@/components/UserInfo.tsx";
import RoomsSidebar from "@/components/RoomsSidebar.tsx";
import { socketTest } from "@/service/socket/socket.ts";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Root() {
  const { pathname } = useLocation();
  const access = Cookies.get("access");

  useEffect(() => {
    socketTest(access);
  }, [access]);

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Navbar />
      {pathname.includes("/@me") ? <HomeSidebar /> : <RoomsSidebar />}
      <UserInfo />
      <div className="flex gap-4 h-[100dvh] flex-1">
        <Outlet />
      </div>
    </div>
  );
}
