import { useState, useEffect } from "react";
import { login } from "../components/main/service";

function Login({ onLogin }) {
  const [myLogin, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleLogin = (event) => {
    setLogin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  //console.log(myLogin);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(myLogin);
      onLogin();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    login().then(() => setLogin(myLogin));
  }, [myLogin]);
  return (
    <div className="login">
      <h1>Welcome to NODEPOP</h1>
      <form onSubmit={handleSubmit}>
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
        <button
          className="btn"
          type="submit"
          disabled={!myLogin.email || !myLogin.password}
        >
          Login
        </button>
      </form>

      {error && <div className="loginError">{error.message}</div>}
    </div>
  );
}

export default Login;
