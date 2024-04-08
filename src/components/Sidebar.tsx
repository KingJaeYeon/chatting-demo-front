import { Navbar } from "./Navbar.tsx";
import { Search } from "./Search.tsx";
import { Chats } from "./Chats.tsx";
import { ModeToggle } from "@/components/ui/theme-toggle.tsx";

export function Sidebar() {
  return (
    <div className={"sidebar"}>
      <ModeToggle />
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}
