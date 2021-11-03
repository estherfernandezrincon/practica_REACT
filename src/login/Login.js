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
      <label className="username">Username</label>
      <input type="text"></input>
      <label className="password">Password</label>
      <input type="password"></input>
      <button onChange={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
