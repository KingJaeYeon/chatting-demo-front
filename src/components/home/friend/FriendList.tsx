import {
  Ban,
  AArrowDownIcon,
  BanIcon,
  BotMessageSquareIcon,
  AccessibilityIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
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

  const filteredData = filterKey
    ? dummyData.filter((data) =>
        data.name.toLowerCase().includes(filterKey.toLowerCase()),
      )
    : dummyData;

  return filteredData.map((data) => (
    <Link
      to={`/@me/${data.id}`}
      key={data.id + data.name}
      className="flex items-center gap-2 p-2 w-full hover:bg-background hover:bg-opacity-10 rounded-lg transition-all"
    >
      <div className="flex items-center justify-center rounded-full bg-primary">
        {data.profile}
      </div>
      <div>
        <p className="font-semibold">{data.name}</p>
        <p
          className={`text-xs ${
            data.status === "online" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {data.status}
        </p>
      </div>
    </Link>
  ));
}
