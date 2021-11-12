import "./App.css";
import "./login/loginPage.css";
import "./components/mainPage.css";
//import React, { Fragment } from "react";
import MainPage from "./components/MainPage";
import Login from "./login/Login";
import { useState } from "react";
import { logout } from "./components/service";
import { AuthContextProvider } from "./components/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//al pasarle el token mantenemos la sesion iniciada
function App({ isNowLogged, isNotLogged }) {
  const [isLogged, setIsLogged] = useState(isNowLogged);
  //const [notLogged, setIsNotLogged] = useState(isNotLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    logout();
    setIsLogged(false);
    //setIsNotLogged(true)
  };

  return (
    <Router>
      <AuthContextProvider value={{ isLogged, handleLogout, handleLogin }}>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/nuevoAnuncio" component={newAnuncio} />
        </Switch>
        {isLogged ? <MainPage /> : <Login onLogin={handleLogin} />}
      </AuthContextProvider>
    </Router>
  );
}

export default App;
