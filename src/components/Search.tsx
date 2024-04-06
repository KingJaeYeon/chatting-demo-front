import { useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.ts";
import { useAuthContext } from "../store/authStore.ts";

export function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [err, setErr] = useState(false);

  const { user: currentUser } = useAuthContext();

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

  async function handleSelect() {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { message: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (e) {
      setErr(true);
    }
    setUser(null);
    setUsername("");
  }

  return (
    <div className={"search"}>
      <div className="searchForm">
        <input
          type="text"
          placeholder={"find a user"}
          value={username}
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt={"img"} />
          <div className="userChatInfo">{user.displayName}</div>
        </div>
      )}
    </div>
  );
}
