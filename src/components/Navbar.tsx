import { useAuthContext } from "../store/authStore.ts";
export function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <div className={"navbar"}>
      <span className={"logo"}>KingPj chat</span>
      <div className={"user"}>
        <img
          src={import.meta.env.VITE_CLOUDFLARE_PUBLIC_URL + user?.icon}
          alt=""
        />
        <span>{user?.displayName}</span>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
}
