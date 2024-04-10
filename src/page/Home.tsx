import { useState } from "react";
import Header from "@/components/home/Header.tsx";

import FriendContent from "@/components/home/friend/FriendContent.tsx";
import RequestFriendContent from "@/components/home/friend/request/RequestFriendContent.tsx";

export function Home() {
  const [toggle, setToggle] = useState("friend");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header toggle={toggle} setToggle={setToggle} />
      {toggle === "friend" && <FriendContent />}
      {toggle === "waitFriend" && <RequestFriendContent />}
      {toggle === "addFriend" && <RequestFriendContent />}
    </div>
  );
}
