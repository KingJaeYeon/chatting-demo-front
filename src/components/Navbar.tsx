import { useAuthContext } from "../store/authStore.ts";
import DefaultIcon from "../assets/guest.png";
export function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <div className={"navbar"}>
      <span className={"logo"}>KingPj chat</span>
      <div className={"user"}>
        <img
          src={
            user.icon
              ? import.meta.env.VITE_CLOUDFLARE_PUBLIC_URL + user.icon
              : DefaultIcon
          }
          alt="profile"
        />
        <span>{user?.displayName}</span>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
}
