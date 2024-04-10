import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  Users,
  Ban,
  AArrowDownIcon,
  BanIcon,
  BotMessageSquareIcon,
  AccessibilityIcon,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";

export default function HomeSidebar() {
  const dummyUser = [
    {
      id: 1,
      name: "John Doe",
      icon: <Ban className="h-7 w-7" />,
    },
    {
      id: 2,
      name: "Jane Doe",
      icon: <AArrowDownIcon className="h-7 w-7" />,
    },
    {
      id: 3,
      name: "Jane Doe",
      icon: <BanIcon className="h-7 w-7" />,
    },
    {
      id: 4,
      name: "Jane Doe",
      icon: <BotMessageSquareIcon className="h-7 w-7" />,
    },
    {
      id: 5,
      name: "Jane Doe",
      icon: <AccessibilityIcon className="h-7 w-7" />,
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className="border-r bg-muted/40 min-w-[240px]">
      <div className="flex h-[calc(100%-53px)] max-h-screen flex-col gap-2">
        <div className="flex items-center border-b h-[60px] px-6">
          <Link to="/@me" className="flex items-center gap-2 font-semibold">
            <Home className="h-6 w-6" />
            <span className="">Home</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto scroll">
          <nav className="grid items-start text-sm font-medium px-4">
            <FriendsButton isActive={pathname === "/@me"} />

            <p className="text-sm text-muted-foreground transition-colors hover:text-foreground my-2">
              다이렉트 메세지
            </p>
            <div className={"flex flex-col w-full items-start"}>
              {dummyUser.map((user) => (
                <UserCard {...user} isActive={pathname === `/@me/${user.id}`} />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
function FriendsButton({ isActive }: { isActive: boolean }) {
  const className = isActive
    ? "bg-accent text-accent-foreground"
    : "text-muted-foreground";
  return (
    <Link
      to={"/@me"}
      className={cn(
        className,
        "justify-start w-full flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
      )}
    >
      <Users className="h-5 w-5" />
      {"친구"}
    </Link>
  );
}
function UserCard({
  id,
  name,
  icon,
  isActive,
}: {
  id: number;
  name: string;
  icon: any;
  isActive: boolean;
}) {
  const className = isActive
    ? "bg-accent text-accent-foreground"
    : "text-muted-foreground";
  return (
    <Link
      to={`/@me/${id.toString()}`}
      className={cn(
        className,
        "justify-start w-full flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
      )}
    >
      {icon}
      {name}
    </Link>
  );
}
