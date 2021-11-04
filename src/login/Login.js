import { useState, useEffect } from "react";
import { login } from "../components/main/service";

function Login() {
  const [myLogin, setLogin] = useState({ email: "", password: "" });

  const handleLogin = (event) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    login().then(() => setLogin(myLogin));
  }, [myLogin]);
  return (
    <div className="login">
      <h1>Welcome to NODEPOP</h1>
      <form>
        <label className="username">Username</label>
        <input
          type="text"
          name="email"
          value={myLogin.email}
          onChange={handleLogin}
        ></input>
        <label className="password">Password</label>
        <input
          type="password"
          name="password"
          value={myLogin.password}
          onChange={handleLogin}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
