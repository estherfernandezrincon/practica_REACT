//import classNames from "classnames";
import { useContext } from "react";
import "./header.css";
import AuthContext from "../components/context";
import { Link } from "react-router-dom";

function Header({ className }) {
  const { isLogged, handleLogout, handleLogin } = useContext(AuthContext);

  return (
    <header className={("header", className)}>
      <div className="header-logo"></div>
      <nav className="header-nav">
        {isLogged ? (
          <button className="header-button" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <button className="header-button" onClick={handleLogin}>
            Log In
          </button>
        )}

        <button className="NewButton" as={Link} to="/nuevoAnuncio">
          Nuevo Anuncio
        </button>
      </nav>
    </header>
  );
}

export default Header;
