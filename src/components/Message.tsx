import { useAuthContext } from "../store/authStore.ts";
import { useChatContext } from "../store/chatStore.ts";
import { useEffect, useRef } from "react";

export function Message({ message }: { message: any }) {
  const { user: currentUser } = useAuthContext();
  const { data } = useChatContext();
  const ref = useRef<any>();
  const isCurrentUser = message.senderId === currentUser.uid;

  useEffect(() => {
    ref?.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);

  return (
    <div className={`message ${isCurrentUser && "owner"}`} ref={ref}>
      <div className="messageInfo">
        <img
          src={isCurrentUser ? currentUser.photoURL : data.user.photoURL}
          alt="img"
        />
        <span>
          {isCurrentUser ? currentUser.displayName : data.user.displayName}
        </span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="img" />}
      </div>
    </div>
  );
}
