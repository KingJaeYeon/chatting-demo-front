import {
  AArrowDownIcon,
  AccessibilityIcon,
  Ban,
  BanIcon,
  BotMessageSquareIcon,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";
import { cn } from "@/lib/utils.ts";
import NoResponse from "@/components/home/friend/NoResponse.tsx";
import WaitingList from "@/components/home/friend/waiting/WaitingList.tsx";

export default function WaitingContent() {
  const [search, setSearch] = useState("");
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

  const filteredData = search
    ? dummyResponse.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase()),
      )
    : dummyResponse;
  return (
    <div className={"flex-1"}>
      <main
        className={cn(
          "px-6 h-full relative flex",
          !isResponseExist && "justify-center py-14",
        )}
      >
        {!isResponseExist ? (
          <div
            className={cn(
              "h-full relative flex w-full",
              !isResponseExist && "justify-center py-14",
            )}
          >
            <NoResponse
              txt={"대기 중인 친구 요청이 없네요"}
              className={"h-[80%]"}
            />
          </div>
        ) : (
          <div className={"flex w-full flex-col"}>
            <div className="relative flex-1 md:grow-0 max-w-[1200px] my-3 px-1">
              <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search..."
                className="max-w-[1200px] rounded-lg bg-background pr-8"
              />
            </div>

            <p className="text-sm text-muted-foreground transition-colors hover:text-foreground pt-2 pb-4">
              {`대기 중 - ${filteredData.length}명`}
            </p>
            <div
              className={"relative overflow-scroll h-[calc(100%-110px)] scroll"}
            >
              <div className={"absolute max-w-[1200px] w-full"}>
                <WaitingList data={filteredData} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
