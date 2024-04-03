export function Login() {
  return (
    <div className={"formContainer"}>
      <div className={"formWrapper"}>
        <span className={"logo"}>KingPj Chat</span>
        <span className={"title"}>Login</span>
        <form>
          <input type="email" placeholder={"email"} />
          <input type="password" placeholder={"password"} />
          <button>Sign in</button>
        </form>
        <p>You don't have an Account? Register</p>
      </div>
    </div>
  );
}
