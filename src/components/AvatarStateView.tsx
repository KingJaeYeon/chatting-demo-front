import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import DefaultIcon from "@/assets/guest.png";
import { cn } from "@/lib/utils.ts";

export default function AvatarStateView({
  user,
  className,
  stateClassName,
  state = "offline",
}: {
  user: any;
  className?: string;
  stateClassName?: string;
  state?: string;
}) {
  return (
    <div className={"relative flex"}>
      <Avatar
        className={cn(
          "h-[30px] w-[30px] rounded-[999px] object-cover bg-white",
          className,
        )}
      >
        <AvatarImage
          src={
            user.icon
              ? import.meta.env.VITE_CLOUDFLARE_PUBLIC_URL + user.icon
              : DefaultIcon
          }
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "absolute w-[18px] h-[18px] bottom-[-4px] right-[-4px] rounded-full bg-background flex items-center justify-center",
          stateClassName,
        )}
      >
        <div
          className={cn(
            "w-2.5 h-2.5 rounded-full",
            state === "offline" && "bg-gray-400",
            state === "online" && "bg-green-500",
          )}
        ></div>
      </div>
    </div>
  );
}
