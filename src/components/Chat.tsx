import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { Messages } from "./Messages.tsx";
import { Input } from "./Input.tsx";
import { useChatContext } from "../store/chatStore.ts";
export function Chat() {
  const { data } = useChatContext();

  return (
    <div className={"chat"}>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
