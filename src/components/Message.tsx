import { useAuthContext } from "../store/authStore.ts";
import { useChatContext } from "../store/chatStore.ts";

export function Message({ message }: { message: any }) {
  const { user } = useAuthContext();
  const { data } = useChatContext();

  return (
    <div className={"message owner"}>
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/19431210/pexels-photo-19431210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/19431210/pexels-photo-19431210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
        />
      </div>
    </div>
  );
}
