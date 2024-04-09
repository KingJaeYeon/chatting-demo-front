import { Navbar } from "@/components/Navbar.tsx";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navbar />
      <div className="flex gap-4 h-[100dvh] pl-[72px]">
        <Outlet />
      </div>
    </div>
  );
}
