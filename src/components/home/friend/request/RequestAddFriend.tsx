import { CardDescription } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";

export default function RequestAddFriend() {
  const [search, setSearch] = useState("");
  return (
    <header className={"px-8"}>
      <h1 className={"py-2"}>친구 추가하기</h1>
      <CardDescription className={"py-1"}>
        사용자명을 사용하여 친구를 추가할 수 있어요.
      </CardDescription>
      <div className="relative flex-1 md:grow-0 max-w-[1200px] my-3 items-center flex">
        <Button className="absolute right-3 h-[32px]" variant={"secondary"}>
          친구 요청 보내기
        </Button>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="사용자명을 사용하여 친구를 추가할 수 있어요."
          className="max-w-[1200px] rounded-lg bg-background pr-8 h-[50px] py-1 text-[16px]"
        />
      </div>
    </header>
  );
}
