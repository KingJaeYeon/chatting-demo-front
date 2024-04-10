import { Button } from "@/components/ui/button.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";

import { cn } from "@/lib/utils.ts";
import { Check, X } from "lucide-react";

export default function RequestList({ data }: { data: any }) {
  return data.map((item: any) => <ItemRow item={item} />);
}

function ItemRow({ item }: { item: any }) {
  //TODO: 수락거절
  function acceptHandler() {
    alert("수락");
  }
  function rejectHandler() {
    alert("거절");
  }
  return (
    <div
      key={item.id + item.name}
      className="flex items-center gap-2 p-2 w-full hover:bg-background hover:bg-opacity-10 rounded-lg transition-all justify-between"
    >
      <div className={"flex items-center gap-2"}>
        <div className="flex items-center justify-center rounded-full bg-primary">
          {item.profile}
        </div>
        <div>
          <p className="font-semibold">{item.name}</p>
          <p
            className={`text-xs ${
              item.status === "online"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {item.status}
          </p>
        </div>
      </div>
      <div className={"flex gap-[10px]"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"secondary"}
              onClick={acceptHandler}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-colors px-0 hover:text-amber-200",
              )}
            >
              <Check className="h-5 w-5" />
              <span className="sr-only">수락</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">수락</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"secondary"}
              onClick={rejectHandler}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-amber-200 px-0",
              )}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">거절</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">거절</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
