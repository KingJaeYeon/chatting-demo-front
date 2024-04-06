import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.ts";
import { useEffect, useState } from "react";
import { useAuthContext } from "../store/authStore.ts";
import { useChat } from "../store/chatStore.ts";

export function Chats() {
  const { user } = useAuthContext();
  const { dispatch } = useChat();
  const [chats, setChats] = useState<any>([]);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    user.uid && getChats();
  }, [user.uid]);

  function handleSelect(u: any) {
    dispatch({ type: "CHANGE_USER", payload: u });
  }

  return (
    <div className={"chats"}>
      {Object.entries(chats)?.map((chat: any) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1]?.userInfo)}
        >
          <img
            src={chat[1]?.userInfo?.photoURL}
            alt="img"
            style={{ background: "white" }}
          />
          <div className="userChatInfo">
            <span>{chat[1]?.userInfo?.displayName}</span>
            <p>{chat[1]?.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
