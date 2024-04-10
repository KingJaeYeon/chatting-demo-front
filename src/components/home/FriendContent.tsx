import { Search } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import FriendList from "@/components/home/FriendList.tsx";
import { useState } from "react";

export default function FriendContent() {
  const [search, setSearch] = useState("");
  return (
    <div className={"px-6 flex-1"}>
      <div className="relative flex-1 md:grow-0 px-1 max-w-[1200px] my-3">
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
        {search ? `"${search}"이 포함된 친구` : "모든 친구"}
      </p>
      <div className={"relative overflow-scroll h-[calc(100%-110px)]"}>
        <div className={"absolute"}>
          <FriendList filterKey={search} />
        </div>
      </div>
    </div>
  );
}
