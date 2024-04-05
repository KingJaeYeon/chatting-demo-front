import { auth } from "../firebase.ts";
import { signOut } from "firebase/auth";
export function Navbar() {
  return (
    <div className={"navbar"}>
      <span className={"logo"}>KingPj chat</span>
      <div className={"user"}>
        <img
          src="https://images.pexels.com/photos/20232964/pexels-photo-20232964.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <span>Park</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}
