import { Message } from "./Message.tsx";
import { useChatContext } from "../store/chatStore.ts";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.ts";

export function Messages() {
  const { data } = useChatContext();
  console.log(data);
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().message);
    });
    return () => {
      unSub();
    };
  }, [data?.chatId]);

  return (
    <div className={"messages"}>
      {messages?.map((m: any) => <Message message={m} />)}
    </div>
  );
}
