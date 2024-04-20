import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Mic, Paperclip } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useSocket from "@/hooks/useSocket.ts";
import { Avatar, AvatarFallback } from "@/components/ui/avatar.tsx";
import { useAuthContext } from "@/store/authStore.ts";

export default function ChattingRoom() {
  const scrollTo = useRef<any>(null);
  const socket = useSocket();
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const { user } = useAuthContext();
  useEffect(() => {
    scrollTo.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket?.on("new_message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    socket?.on("user_connected", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    return () => {
      if (socket) {
        socket.off("new_message");
        socket.off("user_connected");
      }
    };
  }, [socket]);

  const onSendMessage = async (e: any) => {
    if (!text.trim()) return; // 입력된 텍스트가 없으면 함수 종료
    if (e.key === "Enter" && !e.shiftKey) {
      // shift 키가 눌리지 않은 상태에서 Enter만 처리
      e.preventDefault(); // 기본 이벤트 방지
      e.stopPropagation(); // 이벤트 버블링 중지
      socket?.emit("new_user", { message: text, user: user.id }, (data) => {
        setMessages((messages) => [...messages, data]);
      });
      setText("");
    }
  };
  const reverseMessage = [...messages]?.reverse();
  return (
    <main className="grid flex-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      <div className="relative flex h-[100dvh] min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <div className="flex-1 overflow-auto scroll flex-col-reverse flex">
          <div ref={scrollTo} />
          {reverseMessage?.map((message, index) => (
            <ChatMessage {...message} key={message.value} />
          ))}
        </div>
        <div className="p-[11px] h-[44px] max-h-full flex relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
          <Textarea
            id="message"
            onKeyUp={onSendMessage}
            placeholder="Type your message here..."
            className="resize-none border-0 shadow-none focus-visible:ring-0 py-0 overflow-hidden h-[22px]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex items-center pt-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Use Microphone</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </main>
  );
}

function ChatMessage(props: any) {
  // // if (!props.currentUser) return
  // const {text, uid, photoURL} = props.message
  // const className = uid === props.currentUser.uid ? 'sent' : 'received'
  // return (
  //         <div className={className}>
  //           <p>{text}</p>
  //           <img src={photoURL} alt={'User Photo'}/>
  //         </div>
  // )
  console.log(props);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState(props.message);
  const handleResizeHeight = (e: any) => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = `auto`;
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + `px`;
    }
    setComment(e.target.value);
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = `auto`;
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + `px`;
    }
  }, []);
  return (
    <div className={"flex border my-1 gap-4 p-5"}>
      <Avatar>
        <AvatarFallback>dds</AvatarFallback>
      </Avatar>
      <div className={"flex flex-col w-full gap-2"}>
        <div>{props.user}</div>
        <textarea
          ref={textareaRef}
          className={
            "flex h-full w-full resize-none p-5 text-black outline-none"
          }
          readOnly={true}
          onChange={handleResizeHeight}
        >
          {comment}
        </textarea>
      </div>
    </div>
  );
}
