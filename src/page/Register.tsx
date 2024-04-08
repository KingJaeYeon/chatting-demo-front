import Add from "../img/addAvatar.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../service/authService.ts";

export function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      await register({ displayName, email, password, icon: file });
      // navigate("/login");
    } catch (e) {
      setErr(true);
    }
  }

  return (
    <div className={"formContainer"}>
      <div className={"formWrapper"}>
        <span className={"logo"}>KingPj Chat</span>
        <span className={"title"}>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={"display name"} />
          <input type="email" placeholder={"email"} />
          <input type="password" placeholder={"password"} />
          <input type="file" id="file" hidden={true} />
          <label htmlFor={"file"}>
            <img src={Add} alt={"add image"} />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an Account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}
