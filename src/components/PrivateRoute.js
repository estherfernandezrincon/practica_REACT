import { Route, Redirect } from "react-router";
import AuthContext from "./context";
import { useContext } from "react";

const PrivateRoute = (...props) => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? <Route {...props} /> : <Redirect to="/Login" />;
  //renderizamos las props que le llegan
};

export default PrivateRoute;
