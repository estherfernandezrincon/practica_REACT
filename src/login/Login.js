import { useState } from "react";
import { login } from "../../service";

function LoginPage({}) {
  const [value, setValue] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  const change = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();

    try {
      await login(value);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="title">Log in to Nodepop</h1>
      <form className="form" onSubmit={submit}>
        <FormField
          type="text"
          name="username"
          label="username"
          className="form-filed"
          value={value.username}
          onChange={submit}
          autofocus
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="form-filed"
          value={value.password}
          onChange={change}
        />
      </form>
    </div>
  );
}
