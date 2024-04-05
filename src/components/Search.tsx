import { useState } from "react";

export function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  function handleSearch() {}

  function handleKey(e: any) {
    e.code === "Enter" && handleSearch();
  }
  return (
    <div className={"search"}>
      <div className="searchForm">
        <input
          type="text"
          placeholder={"find a user"}
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18151445/pexels-photo-18151445.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChatInfo">Jane</div>
      </div>
    </div>
  );
}
