import "./App.css";
import "./login/loginPage.css";
import "./components/main/mainPage.css";
import React, { Fragment } from "react";
import MainPage from "./components/main/MainPage";
import Login from "./login/Login";
import { useState } from "react";

function App() {
  const [isLogged, setIslogged] = useState(false);

  const handleLogin = () => {
    setIslogged(true);
  };

  return (
    //aqui metemos Fragment en lugar de los div para envolver todo
    <Fragment>
      {isLogged ? (
        <MainPage isLogged={isLogged} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Fragment>
  );
}

export default App;
