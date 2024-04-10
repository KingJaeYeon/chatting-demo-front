import { useState } from "react";
import Header from "@/components/home/Header.tsx";

import FriendContent from "@/components/home/FriendContent.tsx";
import AddFriendContent from "@/components/home/AddFriendContent.tsx";

export function Home() {
  const [toggle, setToggle] = useState("friend");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header toggle={toggle} setToggle={setToggle} />
      {toggle === "friend" ? <FriendContent /> : <AddFriendContent />}
    </div>
  );
}
