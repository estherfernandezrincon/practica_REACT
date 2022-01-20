//import classNames from "classnames";
import { useContext } from "react";
import "./header.css";
import AuthContext from "../components/context";
import { Link } from "react-router-dom";
import NewButton from "../components/NewButton";

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

        <NewButton as={Link} to="/adverts/new">
          Nuevo Anuncio
        </NewButton>
      </nav>
      <form>
        <label className="label">Filtra por precio</label>
        <input type="string" name="price" />
        <label className="label">Filtra por nombre</label>
        <input type="string" name="price" />
      </form>
    </header>
  );
}

export default Header;
