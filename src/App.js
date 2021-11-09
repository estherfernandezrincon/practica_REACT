import "./App.css";
import "./login/loginPage.css";
import "./components/main/mainPage.css";
import React, { Fragment } from "react";
import MainPage from "./components/main/MainPage";
import Login from "./login/Login";
import { useState } from "react";
import { logout } from "./components/main/service";

//al pasarle el token mantenemos la sesion iniciada
function App({ isNowLogged, isNotLogged }) {
  const [isLogged, setIsLogged] = useState(isNowLogged);
  const [notLogged, setIsNotLogged] = useState(isNotLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    logout();
    setIsNotLogged(true);
  };

  return (
    //aqui metemos Fragment en lugar de los div para envolver todo
    <Fragment>
      {isLogged ? (
        <MainPage isLogged={isLogged} notLogged={notLogged} />
      ) : (
        <Login onLogin={handleLogin} onLogout={handleLogout} />
      )}
    </Fragment>
  );
}

export default App;
