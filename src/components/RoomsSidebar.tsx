import { Link } from "react-router-dom";
import { Bell, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx";
import { useState } from "react";

export default function RoomsSidebar() {
  const [toggle, setToggle] = useState("friend");
  return (
    <div className="border-r bg-muted/40 w-[240px]">
      <div className="flex h-[calc(100%-53px)] max-h-screen flex-col gap-2">
        <div className="flex items-center border-b h-[60px] px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
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
            <ToggleGroup
              type="single"
              defaultValue="friend"
              variant="default"
              value={toggle}
              onValueChange={(value) => {
                if (value) setToggle(value);
              }}
              className={"flex flex-col w-full items-start"}
            >
              <ToggleGroupItem
                value="friend"
                className="justify-start w-full flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-5 w-5" />
                친구
              </ToggleGroupItem>
              <p className="text-sm text-muted-foreground transition-colors hover:text-foreground my-2">
                다이렉트 메세지
              </p>
            </ToggleGroup>
          </nav>
        </div>
      </div>
    </div>
  );
}
