import "./App.css";
import "./login/loginPage.css";
import "./components/mainPage.css";
import "./components/newAnuncio.css";

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

          <PrivateRoute path="/adverts/new" component={NewAnuncio} />
          <PrivateRoute path="/adverts" component={MainPage} />
          <Route path="/adverts/:id" component={Detalle} />

          <Route exact path="/">
            <Redirect to="/adverts" />
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
