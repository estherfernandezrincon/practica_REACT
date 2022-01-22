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
      <label className="buscador">BUSCADOR</label>
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
        <label className="label">
          Nombre
          <input type="string" name="name" />
        </label>

        <label className="label">
          Compra
          <input type="radio" value="sell" name="sale" />
        </label>

        <label className="label">
          Venta
          <input type="radio" name="sale" />
        </label>

        <label className="label">
          Todos
          <input type="radio" value="sell" name="sale" />
        </label>

        <label className="label">
          Precio
          <input type="number" value="sell" name="price" />
        </label>
      </form>
    </header>
  );
}

export default Header;
