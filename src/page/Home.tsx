import { useState } from "react";
import Header from "@/components/home/Header.tsx";

import FriendContent from "@/page/content/home/FriendContent.tsx";
import RequestFriendContent from "@/page/content/home/RequestFriendContent.tsx";
import WaitingContent from "@/page/content/home/WaitingContent.tsx";

export function Home() {
  const [toggle, setToggle] = useState("friend");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header toggle={toggle} setToggle={setToggle} />
      {toggle === "friend" && <FriendContent />}
      {toggle === "waitFriend" && <WaitingContent />}
      {toggle === "addFriend" && <RequestFriendContent />}
    </div>
  );
}
