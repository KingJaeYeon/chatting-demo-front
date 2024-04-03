import { Navbar } from "./Navbar.tsx";
import { Search } from "./Search.tsx";
import { Chats } from "./Chats.tsx";

export function Sidebar() {
  return (
    <div className={"sidebar"}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}
