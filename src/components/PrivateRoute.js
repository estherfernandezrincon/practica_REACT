import { Route, Redirect } from "react-router";
import AuthContext from "./context";
import { useContext } from "react";

const PrivateRoute = (props) => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route>
      {({ location }) => (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />

        //redirigimos a la pagina que hemos pedido despues de hacer el login
      )}
    </Route>
  );
};

export default PrivateRoute;
