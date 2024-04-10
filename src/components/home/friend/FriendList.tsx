import {
  Ban,
  AArrowDownIcon,
  BanIcon,
  BotMessageSquareIcon,
  AccessibilityIcon,
  MessageSquareText,
  EllipsisVertical,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import AvatarStateView from "@/components/AvatarStateView.tsx";

export default function FriendList({ filterKey }: { filterKey: string }) {
  const dummyData = [
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
  const navigate = useNavigate();
  const filteredData = filterKey
    ? dummyData.filter((data) =>
        data.name.toLowerCase().includes(filterKey.toLowerCase()),
      )
    : dummyData;

  return filteredData.map((data) => (
    <Link
      to={`/@me/${data.id}`}
      key={data.id + data.name}
      className="flex items-center gap-2 p-2 w-full hover:bg-background hover:bg-opacity-10 rounded-lg transition-all justify-between"
    >
      <div className={"flex items-center gap-2"}>
        <AvatarStateView user={data} />
        <div>
          <p className="font-semibold">{data.name}</p>
          <p
            className={`text-xs ${
              data.status === "online"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {data.status}
          </p>
        </div>
      </div>
      <div className={"flex gap-[10px]"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"secondary"}
              onClick={() => navigate(`/@me/${data.id}`)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-amber-200 px-0",
              )}
            >
              <MessageSquareText className="h-5 w-5" />
              <span className="sr-only">메세지 보내기</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">메세지 보내기</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-amber-200 px-0 z-10",
                  )}
                >
                  <EllipsisVertical className="h-5 w-5" />
                  <span className="sr-only">기타</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                  영상 통화 시작하기
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                  음성 통화 시작하기
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => e.stopPropagation()}
                  className={
                    "text-rose-600 dark:focus:bg-red-700 dark:focus:text-white"
                  }
                >
                  친구 삭제하기
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent side="top">기타</TooltipContent>
        </Tooltip>
      </div>
    </Link>
  ));
}
