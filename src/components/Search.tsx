import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.ts";

export function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [err, setErr] = useState(false);

  async function handleSearch() {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username),
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (e) {
      setErr(true);
    }
  }

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
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat">
          <img src={user.photoURL} alt={"img"} />
          <div className="userChatInfo">{user.displayName}</div>
        </div>
      )}
    </div>
  );
}
