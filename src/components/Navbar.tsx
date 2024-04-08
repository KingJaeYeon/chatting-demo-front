import { useAuthContext } from "../store/authStore.ts";
export function Navbar() {
  const { user, logout } = useAuthContext();
  return (
    <div className={"navbar"}>
      <span className={"logo"}>KingPj chat</span>
      <div className={"user"}>
        <img src={user?.photoURL} alt="" />
        <span>{user?.displayName}</span>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
}
