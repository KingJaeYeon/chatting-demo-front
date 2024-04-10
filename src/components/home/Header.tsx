import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx";
import { Users } from "lucide-react";

export default function Header({
  toggle,
  setToggle,
}: {
  toggle: string;
  setToggle: (value: string) => void;
}) {
  return (
    <header className="sticky top-0 flex min-h-16 items-center gap-4 px-6 bg-background z-10">
      <nav className="font-medium flex items-center text-sm gap-6">
        <ToggleGroup
          type="single"
          defaultValue="friend"
          variant="default"
          value={toggle}
          onValueChange={(value) => {
            if (value) setToggle(value);
          }}
        >
          <ToggleGroupItem
            value="friend"
            className="justify-start flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Users className="h-5 w-5" />
            친구
          </ToggleGroupItem>
          <ToggleGroupItem
            value="waitFriend"
            className="justify-start flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            대기 중
          </ToggleGroupItem>
          <ToggleGroupItem
            value="addFriend"
            className="justify-start flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            친구 추가하기
          </ToggleGroupItem>
        </ToggleGroup>
      </nav>
    </header>
  );
}
