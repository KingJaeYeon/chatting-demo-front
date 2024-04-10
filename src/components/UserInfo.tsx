import { Button } from "@/components/ui/button.tsx";
import { useAuthContext } from "@/store/authStore.ts";
import AvatarStateView from "@/components/AvatarStateView.tsx";

export default function UserInfo() {
  const { user, logout } = useAuthContext();
  return (
    <div
      className={
        "absolute z-0 w-[240px] left-[72px] bottom-0 h-[53px] bg-background px-2 items-center flex justify-between"
      }
    >
      <div className={"flex items-center"}>
        <AvatarStateView user={user} />
        <span className={"pl-[8px] text-[14px]"}>{user?.displayName}</span>
      </div>
      <Button className={"h-7"} onClick={logout}>
        logout
      </Button>
    </div>
  );
}
