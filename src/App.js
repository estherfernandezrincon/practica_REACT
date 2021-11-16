import "./App.css";
import "./login/loginPage.css";
import "./components/mainPage.css";
//import React, { Fragment } from "react";
import MainPage from "./components/MainPage";
import NewAnuncio from "./components/NewAnuncio";
import Detalle from "./components/Detalle";
import Login from "./login/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import { logout } from "./components/service";
import { AuthContextProvider } from "./components/context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
          <Route exact path="/Login">
            {(routeProps) => <Login {...routeProps} />}
          </Route>

          <PrivateRoute path="/nuevoAnuncio" component={NewAnuncio} />
          <PrivateRoute path="/anuncios" component={MainPage} />
          <Route path="/detalle" component={Detalle} />

          <Route exact path="/">
            <Redirect to="/anuncios" />
          </Route>
          <Route path="/404">
            <div>404 page not found</div>
          </Route>
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
