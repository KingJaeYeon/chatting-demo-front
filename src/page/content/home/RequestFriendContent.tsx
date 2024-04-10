import RequestAddFriend from "@/components/home/friend/request/RequestAddFriend.tsx";
import {
  AArrowDownIcon,
  AccessibilityIcon,
  Ban,
  BanIcon,
  BotMessageSquareIcon,
} from "lucide-react";
import NoResponse from "@/components/home/friend/NoResponse.tsx";
import { cn } from "@/lib/utils.ts";
import RequestListContainer from "@/components/home/friend/request/RequestListContainer.tsx";

export default function RequestFriendContent() {
  const dummyResponse = [
    {
      id: 1,
      name: "John Doe",
      profile: <Ban className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 2,
      name: "Jane Doe",
      profile: <AArrowDownIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 3,
      name: "Jane Doe",
      profile: <BanIcon className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 4,
      name: "Jane Doe",
      profile: <BotMessageSquareIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 5,
      name: "Jane Doe",
      profile: <AccessibilityIcon className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 6,
      name: "Jane Doe",
      profile: <AArrowDownIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 7,
      name: "Jane Doe",
      profile: <BanIcon className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 8,
      name: "Jane Doe",
      profile: <BotMessageSquareIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 9,
      name: "Jane Doe",
      profile: <AccessibilityIcon className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 10,
      name: "Jane Doe",
      profile: <AArrowDownIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 11,
      name: "Jane Doe",
      profile: <BanIcon className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 12,
      name: "Jane Doe",
      profile: <BotMessageSquareIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 13,
      name: "Jane Doe",
      profile: <AccessibilityIcon className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 14,
      name: "Jane Doe",
      profile: <AArrowDownIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 15,
      name: "Jane Doe",
      profile: <BanIcon className="h-8 w-8" />,
      status: "online",
    },
    {
      id: 16,
      name: "Jgdfgas",
      profile: <BotMessageSquareIcon className="h-8 w-8" />,
      status: "offline",
    },
    {
      id: 17,
      name: "Jane Doe",
      profile: <AccessibilityIcon className="h-8 w-8" />,
      status: "online",
    },
  ];
  const isResponseExist = dummyResponse.length > 0;
  return (
    <div className={"flex-1 flex flex-col"}>
      <RequestAddFriend />
      <div className={"border-t my-6"} id={"hr"} />
      <main
        className={cn(
          "px-8 h-full relative flex",
          !isResponseExist && "justify-center",
        )}
      >
        {!isResponseExist ? (
          <NoResponse txt={"친구를 기다리고 있어요!!"} />
        ) : (
          <RequestListContainer data={dummyResponse} />
        )}
      </main>
    </div>
  );
}
