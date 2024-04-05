import { auth } from "../firebase.ts";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../store/authStore.ts";
export function Navbar() {
  const { user } = useAuthContext();
  return (
    <div className={"navbar"}>
      <span className={"logo"}>KingPj chat</span>
      <div className={"user"}>
        <img src={user?.photoURL} alt="" />
        <span>{user?.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}
