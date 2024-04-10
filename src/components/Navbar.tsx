import { Link } from "react-router-dom";
import { Home, Settings, ShoppingCart, Compass, Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { cn } from "@/lib/utils.ts";

export function Navbar() {
  return (
    <aside className="inset-y-0 left-0 z-10 w-[72px] flex-col border-r bg-background flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-5">
        <Link
          to="/@me"
          className="group flex h-12 w-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
        >
          <Home className="h-6 w-6 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {Array.from({ length: 3 }, (_, k) => k).map((index) => (
          <Rooms isActive={index === 0} />
        ))}
        <SearchServer />
        <AddServer />
      </nav>
      <Setting />
    </aside>
  );
}

function Rooms({ isActive }: { isActive: boolean }) {
  const className = isActive
    ? "bg-accent text-accent-foreground"
    : "text-muted-foreground";
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to="#"
          className={cn(
            className,
            "flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:text-foreground",
          )}
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Orders</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Orders</TooltipContent>
    </Tooltip>
  );
}

function SearchServer() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to="/servers"
          className="flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
        >
          <Compass className="h-6 w-6" />
          <span className="sr-only">Customers</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Customers</TooltipContent>
    </Tooltip>
  );
}

function AddServer() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to="/h"
          className="flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
        >
          <Plus className="h-6 w-6" />
          <span className="sr-only">서버 추가하기</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">서버 추가하기</TooltipContent>
    </Tooltip>
  );
}

function Setting() {
  return (
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
    </nav>
  );
}
